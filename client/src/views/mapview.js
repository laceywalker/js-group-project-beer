import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import * as PubSub from '../helpers/pub_sub.js';

export function bindEventsMap(){
  PubSub.subscribe('Beers:data-loaded', event => {
    const processedArray = processBeers(event.detail); 
    Map(processedArray);
  });
}


function Map (processedArray){
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
  polygonTemplate.fill = am4core.color('#ff9900');

  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create('hover');
  hs.properties.fill = am4core.color('#FFFF00');

  // Remove Antarctica
  polygonSeries.exclude = ['AQ'];

  // Add some data
  polygonSeries.data = processedArray; 

  // Bind 'fill' property to 'fill' key in data
  polygonTemplate.propertyFields.fill = 'fill';

//  chart.maxZoomLevel = 1;
//  chart.seriesContainer.draggable = false;
//  chart.seriesContainer.resizable = false;
//  chart.seriesContainer.wheelable = false;
}

function processBeers(arrayOfBeers){
  //Extract encoded countrycode from beers
  const codesArray = arrayOfBeers.map(beer => beer.country.substr(-2));

  const processedArray = codesArray.map( code => {
    return {'id': code, 'fill': am4core.color('#F05C5C') }
  }); 
  return processedArray;
}
