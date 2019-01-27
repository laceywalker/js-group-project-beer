const PubSub = require('../helpers/pub_sub.js');

const BeerStatsView = function (container) {
  this.container = container;
  this.statsData = null;
};

BeerStatsView.prototype.bindEvents = function(){
  PubSub.subscribe('BeerStats:BeerStatsCalculated', event => {
    this.statsData = event.detail; 
    this.renderStats();
  });
};

BeerStatsView.prototype.render = function(){
  this.addHeader();
  this.addTable();
  this.populateTable();
};

BeerStatsView.prototype.addHeader = function(){

};

BeerStatsView.prototype.addTable = function(){

};

BeerStatsView.prototype.populateTable = function(){
 
};
module.exports = BeerStatsView;


