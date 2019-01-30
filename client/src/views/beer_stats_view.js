const PubSub = require('../helpers/pub_sub.js');

const BeerStatsView = function (container) {
  this.container = container;
  this.statsData = null;
};

BeerStatsView.prototype.bindEvents = function(){
  PubSub.subscribe('BeerStats:BeerStatsCalculated', event => {
    this.statsData = event.detail;
    // console.table(this.statsData);
    this.container.innerHTML = '';
    this.renderStats();
  });
};

BeerStatsView.prototype.renderStats = function(){
//  const header = this.createHeader('Beer Journey');
//  this.container.appendChild(header);
  const list = this.createStatsList()
  this.container.appendChild(list);
};

BeerStatsView.prototype.createHeader = function(headerText){
  const header = document.createElement('h2');
  header.textContent = headerText;
  return header;
};

BeerStatsView.prototype.createStatsList = function(){
  const list = document.createElement('ul');
  return this.populateList(list);
};

BeerStatsView.prototype.populateList = function(list){
  const numberOfBeersLI = document.createElement('li');
  numberOfBeersLI.textContent = `You have quaffed a total of ${this.statsData.numBeersDrank} beers.`;

  const averageRatingLI = document.createElement('li');
  averageRatingLI.textContent = `On average you gave a beer a rating of ${this.statsData.averageRating} out of 5`;

  const averageStrengthLI = document.createElement('li');
  averageStrengthLI.textContent = this.strengthDescription();



  list.appendChild(numberOfBeersLI);
  list.appendChild(averageRatingLI);
  list.appendChild(averageStrengthLI);
  return list;
};

BeerStatsView.prototype.strengthDescription = function(){
  const strengthString = `The average strength of beer you drink is ${this.statsData.averageABV}% ABV. `;
  const strength = Number(this.statsData.averageABV);

  if (strength < 1){
    return strengthString + 'Homeopathic beer is your style.';
  } else if (strength < 3) {
    return strengthString + 'You like to remain in control of your faculties.';
  } else if (strength > 7) {
    return strengthString + 'Go canny!';
  } else {
    return strengthString;
  }

};


module.exports = BeerStatsView;
