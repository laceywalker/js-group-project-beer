const BeerView = function(container) {
  this.container = container;
};


BeerView.prototype.render = function(beer) {

  const drankBeerContainer = document.createElement('section');
  drankBeerContainer.id = 'beer';

  const beerName = this.createName(`Beer: ${beer.name}`);
  drankBeerContainer.appendChild(beerName);

  const beerBrewery = this.createDetailList(beer.brewery);
  drankBeerContainer.appendChild(beerBrewery);

  const beerAbv = this.createDetailList(beer.abv);
  drankBeerContainer.appendChild(beerAbv);

  const beerType = this.createDetailList(beer.type);
  drankBeerContainer.appendChild(beerType);

  const beerDescription = this.createDetailList(beer.description);
  drankBeerContainer.appendChild(beerDescription);

  const beerCountry = this.createDetailList(beer.country);
  drankBeerContainer.appendChild(beerCountry);

  const beerRating = this.createDetailList(beer.rating);
  drankBeerContainer.appendChild(beerRating);

  this.container.appendChild(drankBeerContainer)

};

BeerView.prototype.createName = function (text) {
  const name = document.createElement('h1');
  name.textContent = text;
  return name;
};

BeerView.prototype.createDetailList = function (text) {
  const detail = document.createElement('li');
  detail.textContent = text;
  return detail;
};


module.exports = BeerView;
