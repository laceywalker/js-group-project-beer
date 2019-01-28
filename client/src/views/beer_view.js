const PubSub = require('../helpers/pub_sub.js');

const BeerView = function(container) {
  this.container = container;
};


BeerView.prototype.render = function(beer) {

  const drankBeerContainer = document.createElement('section');
  drankBeerContainer.id = 'beer';

  const beerName = this.createName(`Beer: ${beer.name}`);
  drankBeerContainer.appendChild(beerName);

  const beerRatingDesc = this.createDetailList('Rating: ');
  drankBeerContainer.appendChild(beerRatingDesc);

  const beerRating = this.createBeerRating(beer.rating);
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

  const updateButton = this.createUpdateButton(beer);
  drankBeerContainer.appendChild(updateButton);

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
  button.textContent = 'Delete';
  button.value = beerId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BeerListView:beer-delete-clicked', evt.target.value);
  });

  return button;
};


BeerView.prototype.createUpdateButton = function (beer) {
  const button = document.createElement('button');
  button.classList.add('update-btn');
  button.value = beer;
  button.addEventListener('click', (evt) => {
    PubSub.publish('BeerView:edit-view-open', evt.target.value);

  });

  return button;
};

BeerView.prototype.createBeerRating = function(rating){
  const ratingLI = document.createElement('li');
  ratingLI.className = 'beerPic';

  for (let i = 0; i < rating; i++) {
    const littleBeer = document.createElement('img');
    littleBeer.src = '/assets/beer-mug.png';
    ratingLI.appendChild(littleBeer);
  }

  return ratingLI;

};



module.exports = BeerView;
