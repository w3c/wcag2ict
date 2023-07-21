function fetchWcagInfo() {
	fetch('wcag.json').then((response) => {
		return response.json();
	}).then((data) => {
		let wcag = data;
		
		wcag.principles.forEach(function (princ) {
			prepPrinc(princ);
		});
		 wcag.terms.forEach(function(term) {
		 prepTerm(term);
		 });
	});
}

function prepPrinc(princ) {
	prepSec(princ);
	
	princ.guidelines.forEach(function (gl) {
		prepGl(gl);
	});
}

function prepGl(gl) {
	prepSec(gl);
	
	gl.successcriteria.forEach(function (sc) {
		prepSc(sc);
	});
}

function prepSc(sc) {
	prepSec(sc, "sc");
}

function prepSec(n) {
	var nid = n.id.split(":")[1];
	var nsec = document.querySelector('#' + nid);
	if (nsec) {
		var nname = n.handle;
		// get the TOC item
		var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]');
		// last child is the text
		var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length -1];
		// update toc text
		tocitemtxt.nodeValue = nname;
		// header element of section
		var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6');
		// last node of the header is the text content
		var nhtxt = nheader.childNodes[nheader.childNodes.length - 1];
		// update header text
		nhtxt.nodeValue = nname;
		
		// find header wrapper
		var nhead = nheader.parentNode;
		// insert SC quote after header
		var bq = document.createElement("blockquote");
		bq.setAttribute("class", "wcag-quote");
		bq.innerHTML = n.content;
		nhead.after(bq);
		
		// insert intent quote at end
		if (n.intent) {
			var intentsec = document.createElement("section");
			var intentheader = document.createElement("h5");
			intentheader.innerHTML = "Intent from Understanding " + nname;
			intentsec.appendChild(intentheader);
			var intentquote = document.createElement("blockquote");
			intentquote.setAttribute("class", "wcag-quote");
			intentquote.innerHTML = n.intent;
			intentsec.appendChild(intentquote);
			var subsec = nsec.querySelectorAll("section")[1];
			if (subsec) nsec.insertBefore(intentsec, subsec);
			else nsec.appendChild(intentsec);
		}
	}
}

function prepTerm(n) {
	var nid = n.id;
	var nsec = document.querySelector('#' + nid);
	if (nsec) {
		var nname = n.name[0];
		// get the TOC item
		var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]');
		// last child is the text
		var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length -1];
		// update toc text
		tocitemtxt.nodeValue = nname;

		// header element of section
		var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6');
		// last node of the header is the text content
		var nhtxt = nheader.childNodes[nheader.childNodes.length - 1];
		// update header text
		nhtxt.nodeValue = nname;
		
		// header wrapper
		var nhead = nheader.parentNode;
		var bq = document.createElement("blockquote");
		bq.setAttribute("class", "wcag-quote");
		bq.innerHTML = n.definition; 
		nhead.after(bq);
	}
}

// number notes if there are multiple per section
function numberNotes() {
	var sectionsWithNotes = new Array();
	document.querySelectorAll(".note").forEach(function(note) {
		var container = note.closest("dd");
		if (container == null) container = note.closest("blockquote");
		if (container == null) container = note.closest("section");
		sectionsWithNotes.push(container);
	});
	
	sectionsWithNotes.forEach(function(sec) {
		if (sec.noteprocessed) return;
		var notes = sec.querySelectorAll('.note');
		// no notes, shouldn't happen
		if (notes.length == 0) return;
		// one note
		if (notes.length == 1) {
			// respec note, do nothing
			// included note, add marker
			if (notes[0].querySelector(".marker span") == null) addNoteMarker(notes[0], "Note: ");
		}
		// more than one note, number them
		if (notes.length > 1) {
			var count = 1;
			sec.querySelectorAll(".note").forEach(function(note) {
				var span = note.querySelector(".marker span");
				if (span != null) { // respec note
					span.textContent = "Note " + count;
				} else { // included note
					addNoteMarker(note, "Note " + count + ": ");
				}
				count++;
			});
		}
		sec.noteprocessed = true;
	});
	
	function addNoteMarker(note, markerText) {
		span = document.createElement("span");
		span.textContent = markerText;
		var p = note.querySelector("p");
		if (p != null) p.insertBefore(span, p.firstChild);
		else note.insertBefore(span, note.firstChild);
	}
}

// change the numbering of examples to remove number from lone examples in a section, and restart numbering for multiple in each section
function renumberExamples() {
	var sectionsWithExamples = new Array();
	document.querySelectorAll(".example").forEach(function(example) {
		var container = example.closest("dd"); // use dd container if present
		if (container == null) container = example.closest("section"); // otherwise section
		sectionsWithExamples.push(container);
	});
	
	sectionsWithExamples.forEach(function(sec) {
		if (sec.exprocessed) return;
		var examples = sec.querySelectorAll(".example");
		// no examples, shouldn't happen
		if (examples.length == 0) return;
		// one example, remove the numbering
		// more than one example, number them
		else {
			var count = 1;
			var rmOrAdd = examples.length == 1 ? "rm" : "add";
			sec.querySelectorAll(".example").forEach(function(example) {
				var marker = example.querySelector(".marker");
				if (rmOrAdd == "rm") marker.textContent = "Example";
				else marker.textContent = "Example " + count;
				count++;
			});
		}
		sec.exprocessed = true;
	});
}

function getTocLink(id) {
	return document.querySelector('a[class="tocxref"][href="#' + id + '"]');
}

function getTocItem(id) {
	var tocLink = getTocLink(id);
	if (tocLink != null) {
		var tocItem = tocLink.parentElement;
		return tocItem;
	} else {
		return null;
	}
}

function hideDeepNums() {
	document.querySelectorAll("#comments-by-guideline-and-success-criterion section").forEach(function(item) {
		var id = item.id;
		if (id.startsWith("guidance-when-")) {
			var tocItem = getTocItem(id);
			if (tocItem != null) tocItem.remove();
			var secno = item.querySelector("bdi.secno");
			if (secno != null) secno.remove();
		}
	});
}

function postRespec() {
	fetchWcagInfo();
	hideDeepNums();
	numberNotes();
	//renumberExamples();
}