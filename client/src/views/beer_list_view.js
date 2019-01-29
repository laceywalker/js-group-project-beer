const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeerListView = function(container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', (evt)=> {
    this.render(evt.detail);
  })
};

BeerListView.prototype.render = function (element) {
  this.container.innerHTML = '';
  element.forEach( (beer) => {
    const beerView = new BeerView(this.container, beer);
    beerView.render();
  });
};


module.exports = BeerListView;
