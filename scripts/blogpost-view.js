var blogpostView = {};

blogpostView.setTeasers = function() {
  console.log($('.blogpost-content').children());
  $('.blogpost-content *:nth-of-type(n+2)').hide();
  $('.blogpost-content .recipe-view').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if($(this).text() === 'View recipe &rarr;') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Hide recipe &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('View recipe &rarr;');
      $(this).parent().find('.blogpost-content *:nth-of-type(n+2)').hide();
    }
  });
};


$(document).ready(function() {
  blogpostView.setTeasers();
});
