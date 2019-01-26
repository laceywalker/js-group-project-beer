const PubSub = require('../helpers/pub_sub.js');

const EditView = function(divContainer, editForm) {
  this.container = divContainer;
  this.form = editForm;
};
// make a new div in index html- and a new edit form -  edit of
// the form  BUT pulls through the information- then
// // could make an invisible form in index.html and a method which changes
// hidden to non-hidden to the bind bindEvents
EditView.prototype.bindEvents = function () {
  PubSub.subscribe('BeerView:edit-view-open', (evt) => {
    this.container.style.visibility = "visible"
    console.log(this.container)
    // this.render(evt.detail);
  });

  // PubSub.publish('BeerListView:beer-update-clicked', evt.target.value);
};


// the render will bring up the form - write this in html and if possible pre-filled out with
// current information

// then

module.exports = EditView;
