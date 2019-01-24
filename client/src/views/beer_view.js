const BeerView = function(container) {
  this.container = container;
};


BeerView.prototype.render = function(beer) {
  const drankBeerContainer = document.querySelector("drank-beer-list");


  const newBeer = this.createDetail(beer);
  drankBeerContainer.appendChild(newBeer);

  this.container.appendChild(drankBeerContainer)

};

BeerView.prototype.createDetail = function (text) {
  const detail = document.createElement('div');
  detail.textContent = text;
  return detail;
};



module.exports = BeerView;
