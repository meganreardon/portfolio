var blogposts = [];

function BlogPost (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.sourceTitle = opts.sourceTitle;
  this.sourceUrl = opts.sourceUrl;
  this.published = opts.published;
  this.content = opts.content;
}

BlogPost.prototype.toHtml = function() {
  var ourPostScript = $('#blog-posts-area').html();
  var ourPosts = Handlebars.compile(ourPostScript);
  return ourPosts(this);
};

blogpostData.forEach(function(ele){
  blogposts.push(new BlogPost(ele));
});

blogposts.forEach(function(article){
  $('#blogposts').append(article.toHtml());
});
