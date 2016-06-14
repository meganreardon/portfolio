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
BlogPost.prototype.toHtml = function(nameOfTemplate) {
  var ourPostScript = $(nameOfTemplate).html();
  var ourPosts = Handlebars.compile(ourPostScript);
  return ourPosts(this);
};

BlogPost.loadAll = function(jsonData) {
  jsonData.blogpostData.forEach(function (onePost) {
    BlogPost.allPosts.push(new BlogPost(onePost));
  });
};

BlogPost.fetchAll = function() {
  if (localStorage.allBlogpostDataLS) {
    localCopy = JSON.parse(localStorage.getItem('allBlogpostDataLS'));
    BlogPost.loadAll(localCopy);
    blogpostView.renderIndexPage();
  } else {
    $.getJSON('data/allBlogpostData.json', function(data) {
      localStorage.setItem('allBlogpostDataLS', JSON.stringify(data));
      BlogPost.loadAll(data);
      blogpostView.renderIndexPage();
    });
  }
};
