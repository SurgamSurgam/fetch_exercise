document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector('body');
  let select = document.querySelector('select');
  let ul = document.querySelector('ul');


  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      return response.json();
    })
    .then(response => {
      showMovies(response)
    })

  function showMovies(arrayObj) {
    arrayObj.forEach(el => {
      let option = document.createElement('option');
      select.appendChild(option);
      option.innerText = el.title;
    })
  }


})
