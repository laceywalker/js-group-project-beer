const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
};


EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:edit-view-open', (evt) => {
    this.container.style.visibility = "visible"
    this.renderEditBox(evt.detail);
  });
    // PubSub.publish('BeerListView:beer-update-clicked', evt.target.value);
      // this.container.style.visibility = "hidden"
};


EditView.prototype.renderEditBox = function (evt) {

};


module.exports = EditView;
