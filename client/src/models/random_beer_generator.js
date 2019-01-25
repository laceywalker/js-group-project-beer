const PubSub = require('../helpers/pub_sub.js');
const BeerStats = require('./beer_stats.js');
const RequestHelper = require('../helpers/request_helper.js')

const RandomBeerGenerator = function () {
  this.beerArray = null;
};

// Randomizer.prototype.bindEvents = function () {
//
// };

RandomBeerGenerator.prototype.getRandomBeer = function (4) {
  const randomBeer = beerArray[Math.floor(Math.random() * beerArray.length)];
  console.log(randomBeer);
};


module.exports = RandomBeerGenerator;
