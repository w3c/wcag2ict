function fetchWcagInfo() {
	return fetch('wcag.json').then((response) => {
		return response.json();
	}).then((data) => {
		let wcag = data;
		
		wcag.principles.forEach(function (princ) {
			prepPrinc(princ);
		});
		 wcag.terms.forEach(function(term) {
		 prepTerm(term);
		 });
	}).then((data) => {
		finalCleanup();
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

function slugify(string) {
  return string
    .replace(/\s/g, '-')
    .replace(/[%()=:.,!#$@"'/\\|?*+&]/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
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
        
        // Make relative URLs absolute
        var content = n.content.replaceAll("#input-purposes", 'https://www.w3.org/TR/WCAG22/#input-purposes');
        content = content.replaceAll("#cc5", 'https://www.w3.org/TR/WCAG22/#cc5');        
        
		bq.innerHTML = content;
		nhead.after(bq);
		
		// insert intent quote at end
		if (n.intent) {
			var intentsec = document.createElement("section");
			var intentheader = document.createElement("h5");
			intentheader.innerHTML = "Intent from Understanding " + nname;
			intentsec.appendChild(intentheader);
			var intentquote = document.createElement("blockquote");
			intentquote.setAttribute("class", "wcag-quote");
            
            // Clean out xmlns fields
            var intent = n.intent.replaceAll(/xmlns:wcag="https:\/\/www.w3.org\/WAI\/GL\/"/g, '');
            intent = intent.replaceAll(/xmlns="http:\/\/www.w3.org\/1999\/xhtml"/g, "");
            
            // Add something to help uniqiely identify section IDs
            var base_id = slugify(nname);
            intent = intent.replaceAll(/<section\s*id="/g, '<section id="' + base_id + '-section-');
            
            // Add missing IDs for headings
            for(var heading of intent.matchAll(/<h([345])>(.*?)<\/h[345]>/g)) {
                intent = intent.replace(heading[0], '<h' + heading[1] + ' id="' + base_id + "-" + slugify(heading[2]) + '">' + heading[2] + '</h' + heading[1] + '>');
            }
            
            // Remove duplicate IDs
            for(var replaceId of intent.matchAll(/"(inactive-controls|figure-grey-button-and-text|benefits)"/g)) {
                intent = intent.replace(replaceId[0], base_id + "-" + replaceId[1]);
            }
            
            // Make relative URLs absolute
            intent = intent.replaceAll('../../techniques/general/G183.html', 'https://www.w3.org/WAI/WCAG22/Techniques/general/G183.html');
            intent = intent.replaceAll('https://w3c.github.io/personalization-semantics/content/', 'https://www.w3.org/TR/adapt-symbols/');
            intent = intent.replaceAll('../22/focus-appearance-minimum.html', 'https://www.w3.org/TR/WCAG22/#focus-appearance');
            intent = intent.replaceAll('../../guidelines/sc/20/pause-stop-hide.html', 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide');
            intent = intent.replaceAll('../21/target-size-enhanced.html', 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced');
            intent = intent.replaceAll('relative-luminance.html', 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced');
            intent = intent.replaceAll('#status-examples', 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html#status-examples');
            intent = intent.replaceAll('#resources', 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum#resources');
            intent = intent.replaceAll('#excepted-examples', 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages#excepted-examples');
            intent = intent.replaceAll('https://w3c.github.io/html-aam/#accessible-name-and-description-computation', 'https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation');
            intent = intent.replaceAll('http://https://www.w3.org/WAI/tutorials/carousels', 'https://www.w3.org/WAI/tutorials/carousels')
            intent = intent.replaceAll(/<a href="(?!http)/g, '<a href="https://www.w3.org/WAI/WCAG22/Understanding/');
            
			intentquote.innerHTML = intent;
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
        
        // Make relative URLs absolute
        var definition = n.definition.replaceAll("#cc1", 'https://www.w3.org/TR/WCAG22/#cc1');
        definition = definition.replaceAll("#cc4", 'https://www.w3.org/TR/WCAG22/#cc4');
        definition = definition.replaceAll("#cc5", 'https://www.w3.org/TR/WCAG22/#cc5');
        definition = definition.replaceAll(/<a href="(?!http)/g, '<a href="https://www.w3.org/WAI/WCAG22/Understanding/');
        
		bq.innerHTML = definition; 
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
		var allNotes = sec.querySelectorAll(":first-child.note-title");
		var notes = []
		allNotes.forEach(note => {
			var parentElement = note.parentElement;	
			notes.push(note.parentElement);
		});
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
			notes.forEach(function(note) {
				if (sec.nodeName == "SECTION" && (note.closest('dd') != null || note.closest('blockquote') != null)) return;
				if (sec.nodeName == "SECTION" && note.closest('section') != sec) return;
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
		if (container == null) container = example.closest("blockquote"); // otherwise blockquote
		if (container == null) container = example.closest("section"); // otherwise section
		sectionsWithExamples.push(container);
	});
	
	sectionsWithExamples.forEach(function(sec) {
		if (sec.exprocessed) return;
		var examples = sec.querySelectorAll(".example");
		// no examples, shouldn't happen
		if (examples.length == 0) return;
		if (examples.length == 1) {
			// respec example, do nothing
			// included example, add marker
			if (examples[0].querySelector(".marker span") == null) addExampleMarker(examples[0], "Example: ");
		}
		// one example, remove the numbering
		// more than one example, number them
		// more than one example, number them
		if (examples.length > 1) {
			var count = 1;
			examples.forEach(function(example) {
				if (sec.nodeName == "SECTION" && (example.closest('dd') != null || example.closest('blockquote') != null)) return;
				if (sec.nodeName == "SECTION" && example.closest('section') != sec) return;
				var span = example.querySelector(".marker span");
				if (span != null) { // respec example
					span.textContent = "Example " + count;
				} else { // included example
					addExampleMarker(example, "Example " + count + ": ");
				}
				count++;
			});
		}
		sec.exprocessed = true;
	});

	function addExampleMarker(example, markerText) {
		span = document.createElement("span");
		span.textContent = markerText;
		var p = example.querySelector("p");
		if (p != null) p.insertBefore(span, p.firstChild);
		else example.insertBefore(span, example.firstChild);
	}
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

function hideDeepNumsGlossary() {
	document.querySelectorAll("#glossary-items-with-specific-guidance section").forEach(function(item) {
		var id = item.id;
		if (id.startsWith("guidance-when-")) {
			var tocItem = getTocItem(id);
			if (tocItem != null) tocItem.remove();
			var secno = item.querySelector("bdi.secno");
			if (secno != null) secno.remove();
		}
	});
}
function addHeadingIds() {
	var headingsWithMissingIds = document.querySelectorAll("h3:not([id]), h4:not([id]), h5:not([id])");
	headingsWithMissingIds.forEach(heading => {
    var id = heading.innerText.toLowerCase().replace(/\s|\(|\)/g, "-");
    heading.setAttribute("id", id);
	});
}

function removeNumberingFromHeadings() {
    // Select all headings in the document
    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Iterate over each heading
    for (var i = 0; i < headings.length; i++) {
        // Use regex to remove numbering from the heading text
        headings[i].innerText = headings[i].innerText.replace(/^[0-9.]+\s*/, '');
    }
}
function removeNumberingFromTocItemts(tocItems) {
	tocItems = document.querySelectorAll('ol>li>a>bdi');
	for (let tocItem of tocItems) {
	  if (tocItem.textContent.match(/^[0-9.]+/)) {
		tocItem.textContent = tocItem.textContent.replace(/^[0-9.]+/, '');
	  }
	}
}
function finalCleanup() {
	hideDeepNums();
	hideDeepNumsGlossary();
	numberNotes();
	renumberExamples();
	addHeadingIds();
	removeNumberingFromHeadings();
	removeNumberingFromTocItemts();
}
function postRespec() {
	return fetchWcagInfo();
}
