
// ok new plan. let's list the recipes.
var biggernumber = 0;

allRecipeTitles = function() {
  return BlogPost.allPosts.map(function(recipe_name) {
    return recipe_name.title.length;
  })
  .reduce(function(a, b) {
    return a + b;
  });
};

// keeping this for the moment so I remember what I did here
// allRecipeTitlesMore = function() {
//   biggernumber = allRecipeTitles();
//   console.log('bigger number is: ' + biggernumber);
// };
//
// allRecipeTitlesMore();

// Note to self in future:
// this function is called in line 25 of blogpost-view.js
// it is rendered in the footer of index.html
