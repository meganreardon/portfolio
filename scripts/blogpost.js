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
  var $newBlogPost = $('article.blogpost-template').clone();
  $newBlogPost.find('.blogpost-header h2').text(this.title); // title // this could be .text instead
  $newBlogPost.find('.blogpost-header span').text(this.author); // author
  $newBlogPost.find('.blogpost-header a').text(this.sourceTitle); // sourceTitle
  $newBlogPost.find('.blogpost-header a').attr('href', this.sourceUrl); // sourceUrl
  $newBlogPost.find('.blogpost-header time').text(this.published); // published
  $newBlogPost.find('.blogpost-content').html(this.content); // content // this can be html because have p tags in the string
  $newBlogPost.removeClass('blogpost-template'); // remove class from template
  return $newBlogPost;
};

blogpostData.forEach(function(ele){
  blogposts.push(new BlogPost(ele));
});

blogposts.forEach(function(article){
  $('#blogposts').append(article.toHtml()); // headdesk headdesk
});
