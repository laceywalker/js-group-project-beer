const am4core = require("@amcharts/amcharts4/core");
const am4maps = require("@amcharts/amcharts4/maps");
const am4geodata_worldLow = require("@amcharts/amcharts4-geodata/worldLow");

const MapView = function(){
  // Create map instance
  let map = am4core.create("mapdiv", am4maps.MapChart);
  // Setting a map defintion
  map.geodata = am4geodata_worldLow;
  // Set projection
  map.projection = new am4maps.projections.Miller();
  // Set polygon series
  let polygonSeries = new am4maps.MapPolygonSeries();
  map.series.push(polygonSeries);
};

module.exports = MapView; 
