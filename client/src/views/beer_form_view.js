const PubSub = require('../helpers/pub_sub.js');

const BeerFormView = function(container) {
  this.container = container;
};

BeerFormView.prototype.bindEvents = function () {
  this.container.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BeerFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBeerInput = this.createBeer(evt.target);
  PubSub.publish('BeerFormView:New Beer Submit', newBeerInput);
  evt.target.reset();
};

BeerFormView.prototype.createBeer = function (container) {
  const newBeerInput = {
    name: container.name.value,
    brewery: container.brewery.value,
    country: container.country.value,
    abv: container.abv.value,
    // type: container.type.value,
    description: container.description.value,
    rating: container.rating.value
  }
  return newBeerInput;
};








module.exports = BeerFormView;
