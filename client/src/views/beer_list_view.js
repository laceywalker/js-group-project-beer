const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeerListView = function(container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', (evt)=> {
    console.log(evt)
    this.render(evt.detail);
  })
};

BeerListView.prototype.render = function (element) {
  this.container.innerHTML = '';
  const beerListView = new BeerView(this.container);
  element.forEach((beer) => beerListView.render(beer));
};


module.exports = BeerListView;
