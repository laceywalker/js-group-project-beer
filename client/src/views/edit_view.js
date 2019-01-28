const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
  this.beer = null;
};


EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:update-button-clicked', (evt) => {
    this.container.style.visibility = "visible"
    this.beer = evt.detail;
    this.populateEditBox();
  })
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
      // this.container.style.visibility = "hidden"
};

EditView.prototype.populateEditBox = function () {
    this.form.name.value = this.beer.name;
    this.form.brewery.value = this.beer.brewery;
    this.form.country.value = this.beer.country;
    this.form.abv.value = this.beer.abv;
    this.form.type.value = this.beer.type;
    this.form.description.value = this.beer.description;
    this.form.rating.value = this.beer.rating
};

EditView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const updatedBeerInput = this.createUpdatedBeer(evt.target);
  console.log(updatedBeerInput)
  PubSub.publish('EditView:updated-beer-submit', updatedBeerInput);
};

EditView.prototype.createUpdatedBeer = function () {
  const updatedBeer = {
    name: this.form.name.value,
    brewery: this.form.brewery.value,
    country: this.form.country.value,
    abv: this.form.abv.value,
    type: this.form.type.value,
    description: this.form.description.value,
    rating: this.form.rating.value
  };
  return updatedBeer;
};



module.exports = EditView;
