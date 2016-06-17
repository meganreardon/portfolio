

  var whatToView = {};

  whatToView.handleMainNav = function() {
    $('.nav-list').on('click', '.tab', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.nav-list .tab:first').click();
  };

  whatToView.handleMainNav();
