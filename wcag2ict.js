function fetchWcagInfo() {
	fetch('wcag.json').then((response) => {
		return response.json();
	}).then((data) => {
		let wcag = data;
		
		wcag.guidelines[0].principles.forEach(function (princ) {
			prepPrinc(princ);
		});
		/*
		 wcag.guidelines[1].terms.forEach(function(term) {
		 prepTerm(term);
		 });
		 *  */
	});
}

function prepPrinc(princ) {
	prepSec(princ, "principle");
	
	princ.guidelines.forEach(function (gl) {
		prepGl(gl);
	});
}

function prepGl(gl) {
	prepSec(gl, "guideline");
	
	gl.successcriteria.forEach(function (sc) {
		prepSc(sc);
	});
}

function prepSc(sc) {
	prepSec(sc, "sc");
}

function prepTerm(term) {
	var tid = term.id;
	prepSec(term, "term");
}

function prepSec(n, type) {
	var nid = n.id.split(":")[1];
	console.log (nid);
	var nsec = document.querySelector('#' + nid);
	var nname;
	if (nsec) {
		console.log("1");
		if (type == "term") {
			nname = Array.isArray(n.name) ? n.name[0]: n.name;
		} else {
			nname = n.handle;
			console.log(nname);
			// get the TOC item
			var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]');
			// last child is the text
			var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length -1];
			// update toc text
			tocitemtxt.nodeValue = nname;
		}
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
		if (type == "term") bq.innerHTML = n.definition; 
		else bq.innerHTML = n.content;
		nhead.after(bq);
	}
}

function postRespec() {
	fetchWcagInfo();
}