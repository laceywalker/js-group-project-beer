const PubSub = require('../helpers/pub_sub.js');

const BeerStats = function(){
  this.beerArray = null;
  this.beerStats = null;
}

BeerStats.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:data-loaded', event => {
    this.beerArray = event.detail;
    this.calculateStats();
  })
}

BeerStats.prototype.calculateStats = function(){


// Various function calls to calculate the individual stats go here
const numBeersDrank = this.beerArray.length;

this.favouriteBeer();
this.worstBeer();
this.favouriteCountry();
this.averageRating();
this.averageABV();

// Package the various stats into an object for publication
  
this.beerStats = {'numBeersDrank': numBeersDrank}; 

console.table(this.beerArray);
console.table(this.beerStats);
}

BeerStats.prototype.favouriteBeer = function(){
  return null;
}

BeerStats.prototype.worstBeer = function(){
  return null;
}

BeerStats.prototype.favouriteCountry = function(){
  return null;
}

BeerStats.prototype.averageRating = function(){
  return null;
}

BeerStats.prototype.averageABV = function(){
  return null;
}

module.exports = BeerStats;
