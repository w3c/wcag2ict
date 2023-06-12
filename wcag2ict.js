function fetchWcagInfo() {
  fetch('wcag.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let wcag = data;
    
    wcag.guidelines.principle.forEach(function(princ) {
      prepPrinc(princ);
    });
    wcag.guidelines.term.forEach(function(term) {
      prepTerm(term);
    });
  });
}

function prepPrinc(princ) {
  prepSec(princ, "principle");
    
  if (Array.isArray(princ.guideline)) {
    princ.guideline.forEach(function(gl) {
      prepGl(gl);
    });
  } else {
    prepGl(princ.guideline);
  }
}

function prepGl(gl) {
  prepSec(gl, "guideline");
  
  if (Array.isArray(gl["success-criterion"])) {
    gl["success-criterion"].forEach(function(sc) {
      prepSc(sc);
    });
  } else {
    prepSc(gl["success-criterion"]);
  };
}

function prepSc(sc) {
  prepSec(sc, "sc");
}

function prepTerm(term) {
  var tid = term.id;
  prepSec(term, "term");
}

function prepSec(n, type) {
  var nid = n.id;
  var nsec = document.querySelector('#' + nid);
  if (nsec) {
    var nname = Array.isArray(n.name) ? n.name[0] : n.name;
    var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6'); // header element of section
    var nhtxt = nheader.childNodes[nheader.childNodes.length - 1]; // last node of the header is the text content
    nhtxt.nodeValue = nname; // update header text
    var tocitem = getTocLink(nid); // get the TOC item
    var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length -1]; // last child is the text
    tocitemtxt.nodeValue = nname; // update toc text
    var nhead = nheader.parentNode; // header wrapper
    var bq = document.createElement("blockquote");
    bq.setAttribute("class", "wcag-quote");
    if (type == "term") bq.innerHTML = n.definitiontext;
    else bq.innerHTML = n.contenttext;
    nhead.after(bq);
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

function postRespec() {
  fetchWcagInfo();
  hideDeepNums();
}