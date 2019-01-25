const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view');

document.addEventListener('DOMContentLoaded', () => {

  const beerContainer = document.querySelector('#drank-beer-list');
  console.log(beerContainer);
  const beerListView = new BeerListView(beerContainer);
  beerListView.bindEvents();

  const url = "http://localhost:3000/api/beers";
  const beers = new Beers(url);
  beers.getData();

});
