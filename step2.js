document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector('body');
  let select = document.querySelector('select');
  let ul = document.querySelector('ul');
  let arrayObjAllMovies = [];


  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      return response.json();
    })
    .then(response => {
      arrayObjAllMovies = response;
      showMovies(response)
    })

  function showMovies(arrayObj) {
    arrayObj.forEach(el => {
      let option = document.createElement('option');
      select.appendChild(option);
      option.innerText = el.title;
      option.setAttribute('value', el.title);
    })
  }

// // Outside of function so li gets redefined;
let title = document.createElement('li');
let director = document.createElement('li');
let description = document.createElement('li');
let releaseDate = document.createElement('li');
let rtScore = document.createElement('li');
let h3 = document.createElement('h3');

  function showDetails(movieName) {
    arrayObjAllMovies.forEach(el => {
      if (movieName === el.title) {
        // debugger

        title.innerHTML = `<strong>Title:</strong> ${el.title}`;
        ul.appendChild(title);

        director.innerHTML = `<strong>Director:</strong> ${el.director}`;
        ul.appendChild(director);

        description.innerHTML = `<strong>Description:</strong> <br>${el.description}`;
        ul.appendChild(description);

        releaseDate.innerHTML = `<strong>Release Date:</strong> ${el['release_date']}`;
        ul.appendChild(releaseDate);

        rtScore.innerHTML = `<strong>Rotten Tomato Score:</strong> ${el['rt_score']}`;
        ul.appendChild(rtScore);
      }
    })

  }

  select.addEventListener('change', (event)=> {
    showDetails(event.target.value);
  })


})
