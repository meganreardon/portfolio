
var whatToView = {};

whatToView.handleMainNav = function() {
  $('.nav-list').on('click', '.tab', function() {
    $('.tab-content').hide();
    console.log('reached me');
    console.log('#' + $(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.nav-list .tab:first').click();
};

whatToView.handleMainNav();
