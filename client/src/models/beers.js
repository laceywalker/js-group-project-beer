const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.beers = null;
};


Beers.prototype.bindEvents = function () {
  PubSub.subscribe('EditView:updated-beer-submit', (evt) => {
    this.updateBeer(evt.detail);
  });

  PubSub.subscribe('BeerListView:beer-delete-clicked', (evt) => {
    this.deleteBeer(evt.detail);
  });
  PubSub.subscribe('BeerFormView:New Beer Submit', (evt) => {
    this.postBeer(evt.detail);
  })
  PubSub.subscribe('RandomBeerButtonView:random-beer-clicked', (evt) => {
    const randomBeer = this.getRandomBeer(evt.detail);
    PubSub.publish('Beers:random-beer-generated', randomBeer);
  })
};

Beers.prototype.getData = function () {
  this.request.get()
  .then((beers) => {
    this.beers = beers;
    PubSub.publish('Beers:data-loaded', beers);
    // console.log(beers)
  })
  .catch(console.error);
};

Beers.prototype.postBeer = function (beerID) {
  console.log(beerID)
  this.request.post(beerID)
    .then((beers) => {
      PubSub.publish('Beers:data-loaded', beers);
    })
    .catch(console.error);
};

Beers.prototype.deleteBeer = function (beerId) {
  this.request.delete(beerId)
    .then((beers) => {
      PubSub.publish('Beers:data-loaded', beers);
    })
    .catch(console.error);
};

Beers.prototype.getRandomBeer = function(currentBeers){
  const randomBeer = currentBeers[Math.floor(Math.random() * this.beers.length)];
  return randomBeer
}

  Beers.prototype.updateBeer = function (beerToUpdate) {
    const id = beerToUpdate.id;
    this.request
      .put(beerToUpdate, id)
      .then((beers) => {
        PubSub.publish('Beers:data-loaded', beers);
      })
      .catch(console.error);
    };



module.exports = Beers;
