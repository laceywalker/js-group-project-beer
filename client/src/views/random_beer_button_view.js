const PubSub = require('../helpers/pub_sub.js')

const RandomBeerButtonView = function (container) {
  this.container = container;
}

RandomBeerButtonView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', () => {
    // debugger
    this.createButton();
  })
};

RandomBeerButtonView.prototype.createButton = function(){
  const randomBeerButton = document.createElement('button');
  randomBeerButton.innerHTML = "Random Beer!"
  randomBeerButton.addEventListener('click', () => {
    PubSub.publish('RandomBeerButtonView:random-beer-clicked');
  })
  this.container.appendChild(randomBeerButton);
}

module.exports = RandomBeerButtonView;
