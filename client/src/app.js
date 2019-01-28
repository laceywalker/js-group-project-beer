const Beers = require('./models/beers.js');
const BeerStats = require('./models/beer_stats.js');

const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');


const EditView = require('./views/edit_view.js');
const BeerStatsView = require('./views/beer_stats_view.js');

const MapView = require('./views/mapview.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerForm = document.querySelector('#form');
  const beerFormView = new BeerFormView(beerForm);
  beerFormView.bindEvents();

  const beerStatsContainer = document.querySelector('#stats');
  const beerStatsView = new BeerStatsView(beerStatsContainer);
  beerStatsView.bindEvents();

  const beerStats = new BeerStats();
  beerStats.bindEvents();

  const beerContainer = document.querySelector('#drank-beer-list');
  const beerListView = new BeerListView(beerContainer);
  beerListView.bindEvents();

  const editDiv = document.querySelector('#edit-div');
  const editForm = document.querySelector('#edit-form');
  const editFormView = new EditView(editDiv, editForm);
  editFormView.bindEvents();

  const url = "http://localhost:3000/api/beers";
  const beers = new Beers(url);
  beers.bindEvents();
  beers.getData();
  
  const mapView = new MapView;
});
