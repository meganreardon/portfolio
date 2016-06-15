
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
var eachCupsOfSugar = [];
// var innerSugar = [];

ingredients.findTheSugar = function() {
  sugar = $('.blogpost-content .recipe-view ul li:first-child');
  // the above gives us array of four LIs with inner text string "X cups flour"
  // sugar = $('.blogpost-content ul li:first-child'); // why doesn't this one work?
  // console.log(sugar);
};

ingredients.findTheSugarCups = function() {
  eachCupsOfSugar = sugar.map(function(cups){
    return cups.match([0-9]);
  });
};

ingredients.findTheSugar();
ingredients.findTheSugarCups();





// ingredients.declareTheSugar = function() {
//   innerSugar = sugar.innerText;
//   console.log(innerSugar);
// };


// sugaryDeath = function() {
//   innerSugar = sugar.innerText;
//   console.log(innerSugar);
// };

// ingredients.declareTheSugar();
// sugaryDeath();




// ------ example code from MDN
// var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
//
// var reformattedArray = kvArray.map(function(obj){
//   var rObj = {};
//   rObj[obj.key] = obj.value;
//   return rObj;
// });

// ------ example code from Lab 07
// Article.numWordsAll = function() {
//   return Article.allArticles.map(function(article) {
//       //DONE: Grab the word count from each article body.
//     return article.body.match(/\w+/g).length;
//   })
//   .reduce(function(a, b) {
//     return a + b;
//   });
// };
