const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
};

// // could make an invisible form in index.html and a method which changes
// hidden to non-hidden to the bind bindEvents
EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:edit-view-open', (evt) => {
    // debugger;
    this.container.style.visibility = "visible"
    // this.renderEditBox(evt.detail);
  });

  // PubSub.publish('BeerListView:beer-update-clicked', evt.target.value);
};


// EditView.prototype.renderEditBox = function (evt) {
//     this.container.style.visibility = "visible";
// };


module.exports = EditView;