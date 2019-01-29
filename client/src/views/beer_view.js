const PubSub = require('../helpers/pub_sub.js');

const BeerView = function(container, beer) {
  this.container = container;
  this.beer = beer;
};


BeerView.prototype.render = function() {

  const drankBeerContainer = document.createElement('section');
  drankBeerContainer.id = 'beer';

  const beerName = this.createName(`Beer: ${this.beer.name}`);
  drankBeerContainer.appendChild(beerName);

  const beerRatingDesc = this.createDetailList('Rating: ');
  drankBeerContainer.appendChild(beerRatingDesc);

  const beerRating = this.createBeerRating(this.beer.rating);
  drankBeerContainer.appendChild(beerRating);

  const beerBrewery = this.createDetailList(`Brewery: ${this.beer.brewery}`);
  drankBeerContainer.appendChild(beerBrewery);

  const beerAbv = this.createDetailList(`ABV: ${this.beer.abv}%`);
  drankBeerContainer.appendChild(beerAbv);

  const beerType = this.createDetailList(`Type: ${this.beer.type}`);
  drankBeerContainer.appendChild(beerType);

  const beerCountry = this.createDetailList(`Country: ${this.beer.country}`.slice(0, -3));
  drankBeerContainer.appendChild(beerCountry);

  const beerDescription = this.createDetailList(`Description: ${this.beer.description}`);
  drankBeerContainer.appendChild(beerDescription);

  const beerDate = document.createElement('li');
  const dateToAdd = new Date(this.beer.date);
  formattedDate = dateToAdd.toLocaleDateString();
  beerDate.textContent = `Date Consumed: ${formattedDate}`;
  drankBeerContainer.appendChild(beerDate);

  const deleteButton = this.createDeleteButton();
  drankBeerContainer.appendChild(deleteButton);

  const updateButton = this.createUpdateButton();
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

BeerView.prototype.createDeleteButton = function () {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.textContent = 'Delete';
  button.value = this.beer._id;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BeerListView:beer-delete-clicked', evt.target.value);
  });

  return button;
};


BeerView.prototype.createUpdateButton = function () {
  const button = document.createElement('button');
  button.classList.add('update-btn');
  button.textContent = "Edit";
  button.addEventListener('click', (evt) => {
    PubSub.publish('BeerView:update-button-clicked', this.beer);
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
