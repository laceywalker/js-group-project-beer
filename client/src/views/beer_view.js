const PubSub = require('../helpers/pub_sub.js');

const BeerView = function(container) {
  this.container = container;
};


BeerView.prototype.render = function(beer) {

  const drankBeerContainer = document.createElement('section');
  drankBeerContainer.id = 'beer';

  const beerName = this.createName(`Beer: ${beer.name}`);
  drankBeerContainer.appendChild(beerName);

  const beerRating = this.createDetailList(`Rating: ${beer.rating}`);
  drankBeerContainer.appendChild(beerRating);

  const beerBrewery = this.createDetailList(`Brewery: ${beer.brewery}`);
  drankBeerContainer.appendChild(beerBrewery);

  const beerAbv = this.createDetailList(`ABV: ${beer.abv}%`);
  drankBeerContainer.appendChild(beerAbv);

  const beerType = this.createDetailList(`Type: ${beer.type}`);
  drankBeerContainer.appendChild(beerType);

  const beerCountry = this.createDetailList(`Country: ${beer.country}`);
  drankBeerContainer.appendChild(beerCountry);

  const beerDescription = this.createDetailList(`Description: ${beer.description}`);
  drankBeerContainer.appendChild(beerDescription);

  const deleteButton = this.createDeleteButton(beer._id);
  drankBeerContainer.appendChild(deleteButton);

  this.container.appendChild(drankBeerContainer)

};

BeerView.prototype.createName = function (text) {
  const name = document.createElement('h3');
  name.textContent = text;
  return name;
};

BeerView.prototype.createDetailList = function (text) {
  const detail = document.createElement('li');
  detail.textContent = text;
  return detail;
};

BeerView.prototype.createDeleteButton = function (beerId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = beerId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BeerListView:beer-delete-clicked', evt.target.value);
  });

  return button;
};


module.exports = BeerView;
