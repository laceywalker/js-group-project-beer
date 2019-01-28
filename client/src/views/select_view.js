const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-ready', (evt) => {
    this.populate(evt.detail)
  });
};

SelectView.prototype.populate = function (countries) {
  countries.forEach((country) => {
    const countryOption = this.createOption(country.name);
    this.element.appendChild(countryOption);
  });
};

SelectView.prototype.createOption = function (name) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = name;
  return option;
};

module.exports = SelectView;
