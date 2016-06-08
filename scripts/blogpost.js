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

};

// example below
Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-catagory', this.cateory);
  $newArticle.find('a').html(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('h1').html(this.title);
  $newArticle.find('section.article-body').html(this.body);

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.removeClass('template');
  return $newArticle;
};
// end of example code
