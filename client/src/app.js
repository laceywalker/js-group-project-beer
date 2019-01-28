import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';


const Beers = require('./models/beers.js');
const BeerStats = require('./models/beer_stats.js');

const BeerListView = require('./views/beer_list_view.js');
const BeerFormView = require('./views/beer_form_view.js');

const RandomBeerButtonView = require('./views/random_beer_button_view.js');
const RandomBeerView = require('./views/random_beer_view.js');

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
  const randomBeerView = new RandomBeerView(randomBeerContainer);
  randomBeerView.bindEvents();

  // debugger
  const randomBeerButton = new RandomBeerButtonView(randomBeerContainer);
  randomBeerButton.bindEvents();

  const editDiv = document.querySelector('#edit-div');
  const editForm = document.querySelector('#edit-form');
  const editFormView = new EditView(editDiv, editForm);
  editFormView.bindEvents();


  const url = 'http://localhost:3000/api/beers';
  const beers = new Beers(url);
  beers.bindEvents();
  beers.getData();

  drawMap();
});

const drawMap = function(){

  // Create map instance
  var chart = am4core.create('chartdiv', am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;

  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = '{name}';
  polygonTemplate.fill = am4core.color('#74B266');

  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create('hover');
  hs.properties.fill = am4core.color('#367B25');

  // Remove Antarctica
  polygonSeries.exclude = ['AQ'];

  // Add some data
  polygonSeries.data = [{
    'id': 'US',
    'fill': am4core.color('#F05C5C')
  }, {
    'id': 'FR',
    'fill': am4core.color('#5C5CFF')
  }];

  // Bind 'fill' property to 'fill' key in data
  polygonTemplate.propertyFields.fill = 'fill';

  chart.maxZoomLevel = 1;
  chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;
  chart.seriesContainer.wheelable = false;


};




