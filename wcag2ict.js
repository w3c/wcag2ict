function fetchWcagInfo() {
  fetch('http://github/w3c/wcag/guidelines/wcag.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let wcag = data;
    //console.log(wcag.wcag.principles.principle[0].id);
    
    wcag.wcag.principles.principle.forEach((principle) => {
      var pid = principle.id;
      var psec = document.querySelector('#' + pid);
      var el = document.createElement("p");
      el.innerHTML = principle.content;
      psec.insertBefore(el, psec.childNodes[2]);
    });
  });
}