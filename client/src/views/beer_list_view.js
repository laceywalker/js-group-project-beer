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
  if (element = []) {
  //displayHeader = document.querySelector('#displayheader');
  //displayHeader.style.display = 'none';
  //stats = document.querySelector('#stats');
  //stats.style.display = 'none';
    this.setHidden('#displayheader');
    this.setHidden('#stats');
    this.setHidden('#drank-beer-list');
  };
  this.container.innerHTML = '';
  const beerListView = new BeerView(this.container);
  element.forEach((beer) => beerListView.render(beer));
};

BeerListView.prototype.setHidden = function (elementid){
  element = document.querySelector(elementid);
  element.style.display = 'none';
}


module.exports = BeerListView;
