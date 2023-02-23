function fetchWcagInfo() {
  fetch('http://github/w3c/wcag/guidelines/wcag.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let wcag = data;
    console.log(wcag.wcag.principles.principle[0].id);
  });
}