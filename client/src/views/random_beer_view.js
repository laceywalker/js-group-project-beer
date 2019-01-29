const PubSub = require('../helpers/pub_sub.js')
// const RandomBeerGenerator = require('../models/random_beer_generator.js')

const RandomBeerView = function (container, element) {
  this.container = container;
  this.element = element;

}

RandomBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:random-beer-generated', (evt) => {
    this.container.style.display = "block";
    this.randomBeer = evt.detail;
    this.render(this.container)
    console.log(evt.detail);
    // this.populatePopoutBox();
  })
};

RandomBeerView.prototype.render = function (container) {
  this.container.innerHTML = '';
  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'Close';
  this.container.appendChild(closeButton);
  const randomBeerContainer = document.createElement('section');
  const randomBeer = this.createRandomBeer(`Try ${this.randomBeer.name} by ${this.randomBeer.brewery}. It's ${this.randomBeer.abv}% and is a ${this.randomBeer.type}.`)
  randomBeerContainer.appendChild(randomBeer)
   closeButton.addEventListener('click', () => {
    console.log("I clicked the close button");
      this.container.style.display = 'none';
  })
  // console.console.dir(randomBeer);

  this.container.appendChild(randomBeerContainer);
};


RandomBeerView.prototype.createRandomBeer= function (text) {
  const detail = document.createElement('li');
  detail.textContent = text;
  return detail;
};

module.exports = RandomBeerView
