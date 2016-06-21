(function(module) {
  var githubController = {};

  githubController.index = function() {
    $('.tab-content').hide();
    $('#githubinfo').fadeIn();
  };

  module.githubController = githubController;
})(window);
