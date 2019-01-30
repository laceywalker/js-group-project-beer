const PubSub = require('../helpers/pub_sub.js')


const RandomBeerView = function () {
  this.buttonContainer = document.querySelector('#randomiser-container');
  this.popupContainer = document.querySelector('#randomiser-popup');
};

RandomBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', (beers) => {
    if (beers.detail.length === 0) {
      this.buttonContainer.innerHTML = '';
    }
    else {
      this.buttonContainer.innerHTML = '';
      const beerButton = document.createElement('button');
      beerButton.textContent = 'Random Beer';
      this.buttonContainer.appendChild(beerButton);
      this.buttonContainer.addEventListener('click', (evt) => {
      PubSub.publish('RandomBeerButtonView:random-beer-clicked', beers.detail)
    });
    }
  })
  PubSub.subscribe('Beers:random-beer-generated', (evt) => {
      this.popupContainer.style.display = "block";
      this.randomBeer = evt.detail;
      this.render()
    })
};


RandomBeerView.prototype.render = function () {
  this.popupContainer.innerHTML = '';

  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'Close';
  this.popupContainer.appendChild(closeButton);

  // const randomBeerContainer = document.createElement('section');

  const randomBeer = this.createRandomBeer(`Try ${this.randomBeer.name} by ${this.randomBeer.brewery}. It's ${this.randomBeer.abv}% and is a ${this.randomBeer.type}.`)
  // randomBeerContainer.appendChild(randomBeer)
   closeButton.addEventListener('click', () => {
      this.popupContainer.style.display = 'none';
  })

  this.popupContainer.appendChild(randomBeer);
};


RandomBeerView.prototype.createRandomBeer= function (text) {
  const detail = document.createElement('p');
  detail.textContent = text;
  return detail;
};


module.exports = RandomBeerView
