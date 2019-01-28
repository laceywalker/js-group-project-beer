const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
};


EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:update-button-clicked', (evt) => {
    this.container.style.visibility = "visible"
    const updatedBeer = this.renderEditBox(evt.detail);
    PubSub.publish('EditView:updated-beer-submit', updatedBeer);
  });

    // PubSub.publish('EditView:updated-beer-submit', updatedBeer);
      // this.container.style.visibility = "hidden"
};


EditView.prototype.renderEditBox = function (container) {
  const updatedBeerInput = {
    name: container.name.value
  }
  return updatedBeerInput;
};





// BeerFormView.prototype.createBeer = function (container) {
//   const newBeerInput = {
//     name: container.name.value,
//     brewery: container.brewery.value,
//     country: container.country.value,
//     abv: container.abv.value,
//     type: container.type.value,
//     description: container.description.value,
//     rating: container.rating.value
//     // date: container.date.value,
//   }
//   return newBeerInput;
// };

module.exports = EditView;
