function fetchWcagInfo() {
  fetch('wcag.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let wcag = data;
    //console.log(wcag.wcag.principles.principle[0].id);
    
    wcag.guidelines.principle.forEach(function(princ) {
      prepNode(princ);
    /* 
      var pid = princ.id;
      var psec = document.querySelector('#' + pid);
      var phead = psec.querySelector('h1, h2, h3, h4, h5, h6').parentNode; // header wrapper
      var bq = document.createElement("blockquote");
      bq.innerHTML = princ.contenttext;
      phead.after(bq);
       */
      
      princ.guideline.forEach(function(gl) {
        prepNode(gl);
        
        if (Array.isArray(gl["success-criterion"])) {
          gl["success-criterion"].forEach(function(sc) {
            prepNode(sc);
          });
        } else {
          prepNode(gl["success-criterion"]);
        }
        
      });
    });
  });
}

function prepNode(n) {
  var nid = n.id;
  var nsec = document.querySelector('#' + nid);
  var nhead = nsec.querySelector('h1, h2, h3, h4, h5, h6').parentNode; // header wrapper
  var bq = document.createElement("blockquote");
  bq.innerHTML = n.contenttext;
  nhead.after(bq);
}