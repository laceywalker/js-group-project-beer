const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
};


EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:update-button-clicked', (evt) => {
    this.container.style.visibility = "visible"
    const updatedBeer = this.populateEditBox(evt.detail);


  });
  // PubSub.publish('EditView:updated-beer-submit', updatedBeer);
      // this.container.style.visibility = "hidden"
      // PubSub.publish('EditView:updated-beer-submit', updatedBeer);
};


EditView.prototype.populateEditBox = function (beer) {
  console.table(beer);
  this.form.name.value = beer.name;
  this.form.brewery.value = beer.brewery;
  this.form.country.value = beer.country;
  this.form.abv.value = beer.abv;
  this.form.type.value = beer.type;
  this.form.description.value = beer.description;
  this.form.rating.value = beer.rating;
};



module.exports = EditView;
