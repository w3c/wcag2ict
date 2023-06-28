function fetchWcagInfo() {
	fetch('wcag.json').then((response) => {
		return response.json();
	}).then((data) => {
		let wcag = data;
		
		wcag.guidelines[0].principles.forEach(function (princ) {
			prepPrinc(princ);
		});
		 wcag.guidelines[1].terms.forEach(function(term) {
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
	console.log (nid);
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
			intentsec.setAttribute("class", "wcag-quote");
			intentsec.innerHTML = n.intent;
			var intentheader = document.createElement("h5");
			intentheader.innerHTML = "Intent from Understanding " + nname;
			intentsec.insertBefore(intentheader, intentsec.childNodes[0]);
			var subsec = nsec.querySelectorAll("section")[1];
			if (subsec) nsec.insertBefore(intentsec, subsec);
			else nsec.appendChild(intentsec);
		}
	}
}

function prepTerm(n) {
	var nid = n.id;
	console.log (nid);
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

function postRespec() {
	fetchWcagInfo();
}