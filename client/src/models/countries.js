const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function (url) {
  this.url = url
  this.request = new RequestHelper(this.url);
  this.countries = [];
};


Countries.prototype.getData = function () {
  this.request.get()
  .then((countries)=> {
    this.handleData(countries)
  })
  .catch(console.error);
};


Countries.prototype.handleData = function (data) {
  // console.log(data)
  this.countries = data;
  PubSub.publish('Countries:countries-data-ready', this.countries);
};

module.exports = Countries;
