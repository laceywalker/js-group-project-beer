const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeerListView = function(container) {
  this.container = container;
};

BeerListView.prototype.render = function (element) {
  this.container.innerHTML = '';
  const beerListView = new BeerView(this.container);
  element.forEach((beer) => beerListView.render(beer));
  console.log(beer);
};


module.exports = BeerListView;
