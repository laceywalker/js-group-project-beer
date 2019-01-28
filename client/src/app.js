const Beers = require('./models/beers.js');
const BeerStats = require('./models/beer_stats.js');

const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');

const RandomBeerButtonView = require('./views/random_beer_button_view.js')
const RandomBeerView = require('./views/random_beer_view.js')

const EditView = require('./views/edit_view.js');
const BeerStatsView = require('./views/beer_stats_view.js');


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


  const randomBeerContainer = document.querySelector('#random-beer');
  // console.log(randomBeerContainer);
  const randomBeerView = new RandomBeerView(randomBeerContainer)
  randomBeerView.bindEvents();

  // debugger
  const randomBeerButton = new RandomBeerButtonView(randomBeerContainer);
  randomBeerButton.bindEvents();

  const editDiv = document.querySelector('#edit-div');
  const editForm = document.querySelector('#edit-form');
  const editFormView = new EditView(editDiv, editForm);
  editFormView.bindEvents();


  const url = "http://localhost:3000/api/beers";
  const beers = new Beers(url);
  beers.bindEvents();
  beers.getData();

});
