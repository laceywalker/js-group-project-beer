const Beers = require('./models/beers.js');

document.addEventListener('DOMContentLoaded', () => {
  const url = "http://localhost:3000/api/beers";
  const beers = new Beers(url);
  beers.getData();

});
