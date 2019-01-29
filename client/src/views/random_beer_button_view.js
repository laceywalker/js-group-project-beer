const PubSub = require('../helpers/pub_sub.js')

const RandomBeerButtonView = function (container) {
  this.container = container;
  this.createButton();

}

RandomBeerButtonView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-loaded', () => {
    console.log("coming in hot");
    // debugger
  })
};

RandomBeerButtonView.prototype.createButton = function(){
  const randomBeerButton = document.createElement('button');
  randomBeerButton.innerHTML = "Random Beer!"
  randomBeerButton.addEventListener('click', () => {
    PubSub.publish('RandomBeerButtonView:random-beer-clicked');
  })

  this.container.appendChild(randomBeerButton);
}


// // Get the modal
// var modal = document.getElementById('myModal');
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
module.exports = RandomBeerButtonView;
