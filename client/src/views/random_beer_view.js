const PubSub = require('../helpers/pub_sub.js')
const RandomBeerGenerator = require('../models/random_beer_generator.js')

const RandomBeerView = function (container) {
  this.container = container;
}

RandomBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('RandomBeerGenerator: Random-Beer-Generated', (evt) => {
    this.render = evt.detail;
    console.log(evt.detail);
  })
};

RandomBeerView.prototype.render = function (element) {

  const randomBeerContainer = document.createElement('section');
  randomBeerContainer.id = 'beer';

  const deleteButton = this.createDeleteButton(beer._id);
  drankBeerContainer.appendChild(deleteButton);

  this.container.appendChild(randomBeerContainer)

  // this.container.innerHTML = '';
  // const randomBeerView = new BeerView(this.container);
  // element.forEach((beer) => beerListView.render(beer));
};

// RandomBeerView.prototype.createDetailList = function (text) {
//   const detail = document.createElement('li');
//   detail.textContent = text;
//   return detail;
// };

RandomBeerView.prototype.createRandomBeerButton = function (beerId) {
  const randomButton = document.createElement('button');
  randomButton.classList.add('random-btn');
  randomButton.value = beerId;

  randomButton.addEventListener('click', (evt) => {
    PubSub.publish('RandomBeerView:random-beer-clicked', evt.target.value);
  });

  return randomButton;
};

module.exports = RandomBeerView;
