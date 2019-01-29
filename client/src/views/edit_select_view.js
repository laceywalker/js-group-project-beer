const PubSub = require('../helpers/pub_sub.js');

const EditSelectView = function (editSelectElement) {
  this.element = editSelectElement;

};

EditSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-ready', (evt) => {
    this.populateEditBox(evt.detail)
  });
};

EditSelectView.prototype.populateEditBox = function (countries) {
  countries.forEach((country) => {
    const countryOption = this.createEditOption(country.name, country.alpha2Code);
    this.element.appendChild(countryOption);
  });
};

EditSelectView.prototype.createEditOption = function (name, countryCode) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = [name, countryCode]
  return option;
};

module.exports = EditSelectView;
