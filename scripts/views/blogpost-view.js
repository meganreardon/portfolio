(function(module) {

  var blogpostView = {};

  blogpostView.setTeasers = function() {
    $('.blogpost-content .recipe-view').hide();
    $('article').on('click', 'a.view-recipe', function(event) {
      event.preventDefault();
      if($(this).html() === 'View Recipe') {
        $(this).parent().find('.recipe-view').fadeIn();
        $(this).html('Hide Recipe');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('View Recipe');
        $(this).parent().find('.blogpost-content .recipe-view').hide();
      }
    });
  };

  blogpostView.renderIndexPage = function() {
    BlogPost.allPosts.forEach(function(aSinglePost){
      $('#blogposts').append(aSinglePost.toHtml('#blog-posts-area'));
    });
    blogpostView.setTeasers();
    $('#recipe-titles-length').text(allRecipeTitles()); // ingredients.js
  };

  module.blogpostView = blogpostView;

})(window);

BlogPost.fetchAll();
