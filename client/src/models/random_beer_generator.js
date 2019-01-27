const PubSub = require('../helpers/pub_sub.js');
const BeerStats = require('./beer_stats.js');
const RequestHelper = require('../helpers/request_helper.js')

const RandomBeerGenerator = function () {
  this.beerArray = null;
};

RandomBeerGenerator.prototype.bindEvents = function(){

  PubSub.subscribe('Beers:data-loaded', event => {
    this.beerArray = event.detail;
    const payload = this.getRandomBeer();
  });
  PubSub.subscribe('RandomBeerView:random-beer-clicked', (evt) => {
    this.randomBeer(evt.detail);
  });
};

RandomBeerGenerator.prototype.postRandomBeer = function (beerID) {
  console.log(beerID)
  this.request.post(beerID)
    .then((beers) => {
      PubSub.publish('RandomBeerGenerator: Random-Beer-Generated', payload)
    })
    .catch(console.error);
};


RandomBeerGenerator.prototype.getRandomBeer = function (beerID) {
  const randomBeer = this.beerArray[Math.floor(Math.random() * this.beerArray.length)];
  return randomBeer
  console.log(randomBeer);
};


module.exports = RandomBeerGenerator;
