const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};


Beers.prototype.bindEvents = function () {

  PubSub.subscribe('BeerFormView:New Beer Submit', (evt) => {
    this.postBeer(evt.detail);
  })
};

Beers.prototype.getData = function () {
  this.request.get()
  .then((beers) => {
    PubSub.publish('Beers:data-loaded', beers);
    console.log(beers)
  })
  .catch(console.error);
};

Beers.prototype.postBeer = function (beerID) {
  this.request.post(beerID)
    .then((beers) => {
      PubSub.publish('BeerListView:data-loaded', beers);
    })
    .catch(console.error);
};


module.exports = Beers;
