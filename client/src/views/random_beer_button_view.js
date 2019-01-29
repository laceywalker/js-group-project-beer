const PubSub = require('../helpers/pub_sub.js')

const RandomBeerButtonView = function (container) {
  this.container = container;

}

RandomBeerButtonView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', () => {
    console.log("coming in hot");
    const randomBeerButton = document.querySelector('#touch-me');
    randomBeerButton.addEventListener('click', () => {
      PubSub.publish('RandomBeerButtonView:random-beer-clicked');
      })
  })
};




module.exports = RandomBeerButtonView;
