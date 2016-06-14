
/*
map array of cups of sugar from each recipe
content.ul.first li
strip out " cups of sugar"
transform remaining things into numbers
push into array

REDUCE that array into total cups of sugar

IIFE this whole page w/ call for when other page loads

lastly, add the four remaining recipes
*/

ingredients = [];
var sugar = [];
// var innerSugar = [];

ingredients.findTheSugar = function() {
  sugar = $('.blogpost-content .recipe-view ul li:first-child');
  // sugar = $('.blogpost-content ul li:first-child'); // why doesn't this one work?
  // the above gives us array of four LIs with inner text string "X cups flour"
  console.log(sugar);
};

// ingredients.declareTheSugar = function() {
//   innerSugar = sugar.innerText;
//   console.log(innerSugar);
// };


// sugaryDeath = function() {
//   innerSugar = sugar.innerText;
//   console.log(innerSugar);
// };

ingredients.findTheSugar();
// ingredients.declareTheSugar();
// sugaryDeath();
