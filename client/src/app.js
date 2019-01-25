const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerForm = document.querySelector('#form');
  const beerFormView = new BeerFormView(beerForm);
  beerFormView.bindEvents();

  const beerContainer = document.querySelector('#drank-beer-list');
  console.log(beerContainer);
  const beerListView = new BeerListView(beerContainer);
  beerListView.bindEvents();

  const url = "http://localhost:3000/api/beers";
  const beers = new Beers(url);
  beers.bindEvents();
  beers.getData();

});
