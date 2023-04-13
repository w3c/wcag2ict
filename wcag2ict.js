function fetchWcagInfo() {
  fetch('wcag.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let wcag = data;
    //console.log(wcag.wcag.principles.principle[0].id);
    
    wcag.guidelines.principle.forEach(function(princ) {
      prepPrinc(princ);
    });
    wcag.guidelines.term.forEach(function(term) {
console.log (term.id);
      prepTerm(term);
    });
  });
}

function prepPrinc(princ) {
console.log(princ.id);
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
console.log(gl.id);
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
console.log (sc.id);
  prepSec(sc, "sc");
}

function prepTerm(term) {
  var tid = term.id;
console.log(tid);
  prepSec(term, "term");
}

function prepSec(n, type) {
  var nid = n.id;
  var nsec = document.querySelector('#' + nid);
  if (nsec) {
    var nname = Array.isArray(n) ? n[0].name : n.name;
    var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6'); // header element of section
    var nhtxt = nheader.childNodes[nheader.childNodes.length - 1]; // last node of the header is the text content
    nhtxt.nodeValue = nname; // update header text
    if (type != "term") {
      var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]'); // get the TOC item
      var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length -1]; // last child is the text
      tocitemtxt.nodeValue = nname; // update toc text
    }
    var nhead = nheader.parentNode; // header wrapper
    var bq = document.createElement("blockquote");
    if (type == "term") bq.innerHTML = n.definition;
    else bq.innerHTML = n.contenttext;
    nhead.after(bq);
  }
}

