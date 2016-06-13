var blogpostView = {};

blogpostView.setTeasers = function() {
  $('.blogpost-content .recipe-view').hide();
  $('article').on('click', 'a.view-recipe', function(e) {
    e.preventDefault();
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


$(document).ready(function() {
  blogpostView.setTeasers();
});
