(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#aboutthis').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
