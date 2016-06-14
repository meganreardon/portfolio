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

// TODO: change this to a BlogPost function like in example
// pushes each post into the blogposts array
// blogpostData.forEach(function(ele){ // blogpostData is old and new name
//   blogposts.push(new BlogPost(ele));
// });

BlogPost.loadAll = function(jsonData) {
  jsonData.blogpostData.forEach(function (onePost) {
    BlogPost.allPosts.push(new BlogPost(onePost));
  });
};

BlogPost.fetchAll = function() {
  if (localStorage.allBlogpostDataLS) {
    console.log('reached if statment');
    /* When our data is already in localStorage:
     1. We can process and load it,
     2. Then we can render the index page */
    // Article.loadAll(//TODO: Invoke with our localStorage!);
    localCopy = JSON.parse(localStorage.getItem('allBlogpostDataLS'));
    BlogPost.loadAll(localCopy);
    blogpostView.renderIndexPage();
    // TODO: Now let's render the index page.
    // articleView.renderIndexPage(); // PUT ME BACK IN
  } else {
    console.log('reached else statement');
    /* TODO: Otherwise, without our localStorage data we need to:
    - Retrieve our JSON file asynchronously
      (which jQuery method is best for this?).
    Within this jQuery method, we should:
      1. Load our JSON data,
      2. Store that same data in localStorage so we can skip the server call next time,
      3. And then render the index page. */
    // console.log('initial loading of hackerIpsum from server');
    $.getJSON('data/allBlogpostData.json', function(data) {
      // localCopy = Article.loadAll(data);
      localStorage.setItem('allBlogpostDataLS', JSON.stringify(data));
      BlogPost.loadAll(data);
      blogpostView.renderIndexPage();
      // articleView.renderIndexPage(); // PUT ME BACK IN
    });
  }
};

// old function that loads blog posts to main page
// blogposts.forEach(function(article){
//   $('#blogposts').append(article.toHtml());
// });

//BlogPost.fetchAll(); // move this to view folder
