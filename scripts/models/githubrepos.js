(function(module) {

  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.get('/github/users/meganreardon/repos' +
          '?per_page=10&sort=updated')
          .done(function(data) {
            repos.allRepos = data;
          }).done(callback);
  };

  repos.withTheAttribute = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
})(window);
