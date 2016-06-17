
  var biggernumber = 0;

  allRecipeTitles = function() {
    return BlogPost.allPosts.map(function(recipe_name) {
      return recipe_name.title.length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  // Note to self in future:
  // this function is called in line 25 of blogpost-view.js
  // it is rendered in the footer of index.html
