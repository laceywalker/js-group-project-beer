const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
  this.beer = null;
};


EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:update-button-clicked', (evt) => {
    this.container.style.display = "block";
    this.beer = evt.detail;
    this.populateEditBox();
  })
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

EditView.prototype.populateEditBox = function () {


    this.form.name.value = this.beer.name;
    this.form.brewery.value = this.beer.brewery;

    const countrySelect = document.querySelector('#edit-countries')
    const countryName = this.beer.country.slice(0, -3);

    const selectLength = countrySelect.options.length -1
    for (let i = 0; i < selectLength; i++){
      if (countrySelect.options[i].textContent === countryName) {
        countrySelect.selectedIndex = i;
      }
    };
    this.form.abv.value = this.beer.abv;
    this.form.type.value = this.beer.type;
    this.form.description.value = this.beer.description;
    this.form.rating.value = this.beer.rating;

    const dateToChange = this.beer.date;
    const newDate = dateToChange.split("/").join("-");
    this.form.consumed.value = newDate;
};

EditView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const updatedBeerInput = this.createUpdatedBeer(evt.target);
  this.container.style.display = "none";
  PubSub.publish('EditView:updated-beer-submit', updatedBeerInput);
};

EditView.prototype.createUpdatedBeer = function () {
  const select = this.form['edit-countries']
  const value = select.options[select.selectedIndex].value;

  const updatedBeer = {
    id: this.beer._id,
    name: this.form.name.value,
    brewery: this.form.brewery.value,
    country: value,
    abv: this.form.abv.value,
    type: this.form.type.value,
    description: this.form.description.value,
    rating: this.form.rating.value,
    date: this.form.consumed.value
  };
  return updatedBeer;
};



module.exports = EditView;
