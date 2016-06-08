// all my js belongs to here

function BlogPost (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.sourcetitle = opts.sourcetitle;
  this.sourceurl = opts.sourceurl;
  this.published = opts.published;
  this.content = opts.content;
}

BlogPost.prototype.toHtml = function() {
  var $newBlogPost = $('article.blogpost-template').clone();
  $newBlogPost.find('blogpost-header.h2').html(this.title); // title
  $newBlogPost.find('blogpost-header.span').html(this.author); // author
  $newBlogPost.find('blogpost-header.address').html(this.sourcetitle); // sourcetitle
  $newBlogPost.find('blogpost-header.a').attr('href', this.sourceurl); // sourceurl
  $newBlogPost.find('blogpost-header.time').html(this.published); // published
  $newBlogPost.find('blogpost-content').html(this.content); // content
  $newBlogPost.removeClass('blogpost-template'); // remove class from template
  return $newBlogPost;
};

// // example below
// Article.prototype.toHtml = function() {
//   // clone the whole article area
//   var $newArticle = $('article.template').clone();
//   $newArticle.attr('data-catagory', this.cateory); // do I need a version of this?
//   $newArticle.find('a').html(this.author); // author
//   $newArticle.find('a').attr('href', this.authorUrl); // author url
//   $newArticle.find('h1').html(this.title); // title
//   $newArticle.find('section.article-body').html(this.body); // body text
//
//   $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
//   $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//
//   $newArticle.removeClass('template');
//   return $newArticle;
// };
// // end of example code
