var blogposts = [];

function BlogPost (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.sourceTitle = opts.sourceTitle;
  this.sourceUrl = opts.sourceUrl;
  this.published = opts.published;
  this.content = opts.content;
}

BlogPost.allPosts = [];

// Handlebar code that replaces jQuery
BlogPost.prototype.toHtml = function() {
  var ourPostScript = $('#blog-posts-area').html();
  var ourPosts = Handlebars.compile(ourPostScript);
  return ourPosts(this);
};

// TODO: change this to a BlogPost function like in example
// pushes each post into the blogposts array
// blogpostData.forEach(function(ele){ // blogpostData is old and new name
//   blogposts.push(new BlogPost(ele));
// });

BlogPost.loadAll = function(posts) {
  posts.forEach(function (onePost) {
    BlogPost.allPosts.push(new BlogPost(onePost));
  });
};

// old function that loads blog posts to main page
// blogposts.forEach(function(article){
//   $('#blogposts').append(article.toHtml());
// });
