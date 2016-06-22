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

  // * * * below is original code * * * //
  // repos.requestRepos = function(callback) {
  //   $.ajax({
  //     url: 'https://api.github.com/users/meganreardon/repos' + '?per_page=5' + '&sort=updated',
  //     type: 'GET',
  //     headers: {'Authorization': 'token ' + githubToken},
  //     success: function(data) {
  //       console.log(data);
  //       repos.allRepos = data;
  //       callback();
  //     }
  //   });
  // };
  //
  // repos.withTheAttribute = function(myAttr) {
  //   return repos.allRepos.filter(function(aRepo) {
  //     return aRepo[myAttr];
  //   });
  // };

  module.repos = repos;
})(window);
