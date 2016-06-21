(function(module) {
  var blogpostController = {};

  blogpostController.index = function() {
    $('.tab-content').hide();
    $('#blogposts').fadeIn();
  };

  module.blogpostController = blogpostController;
})(window);

// comment for purpose of testing renaming a file
