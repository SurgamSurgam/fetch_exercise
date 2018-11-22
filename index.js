document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('.button');
    let body = document.querySelector('body');

    button.addEventListener('click', getRandomImage);

    function getRandomImage() {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        return response.json();
      })
      .then(response => {
        imagePicked(response.message);
      });
    }

    let dogName = document.createElement('h2');
    let imgNode = document.createElement('img');

    function imagePicked(randomImage) {
      let resultCopy = randomImage.split('/');
      dogName.innerText = resultCopy[4];
      body.appendChild(dogName);
      body.appendChild(imgNode);
      imgNode.setAttribute('src', randomImage);
    }

// //BONUS---------------------------------------------------

  let select = document.querySelector('select');

  function getRandomBreedImage() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      return response.json();
    })
    .then(response => {
      dropdownDog(response.message);
    })
  }

  function dropdownDog(objDogs) {
    Object.keys(objDogs).forEach(el => {
      let option = document.createElement('option');
      select.appendChild(option);
      option.innerText = el;
      option.setAttribute('value', el);
    })
  }

  function getSpecificIMG(value) {
     fetch(`https://dog.ceo/api/breed/${value}/images/random`)
     .then(response => {
       return response.json();
     })
     .then(response => {
       dogName.innerText = value;
       imgNode.setAttribute('src', response.message)

     })
  }

  getRandomBreedImage();

  select.addEventListener('change', (event) => {
    getSpecificIMG(event.target.value);
  })
})
