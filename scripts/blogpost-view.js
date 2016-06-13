var blogpostView = {};

blogpostView.setTeasers = function() {
  // console.log($('.blogpost-content').children());
  // $('.blogpost-content *:nth-of-type(n+2)').hide();
  $('.blogpost-content .recipe-view').hide();
  console.log($('.blogpost-content .recipe-view'));
  $('article').on('click', 'a.view-recipe', function(e) {
    e.preventDefault();
    // if($(this).html() === 'View recipe  →') {
    if($(this).html() === 'View recipe') {
      console.log('reached inside the if statement');
      console.log($(this).html());
      $(this).parent().find('.recipe-view').fadeIn();
      // $(this).html('Hide recipe &larr;');
      $(this).html('Hide recipe');
    } else {
      console.log('reached the else statement');
      console.log($(this).html());
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      // $(this).html('Hide recipe &larr;');
      $(this).html('View recipe');
      $(this).parent().find('.blogpost-content .recipe-view').hide();
    }
  });
};


$(document).ready(function() {
  blogpostView.setTeasers();
});
