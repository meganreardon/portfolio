(function(module) {

  var githubreposView = {};

  var reposCompiler = function(repo) {
    var template = Handlebars.compile($('#github-page-template').text());
    return template(repo);
  };

  githubreposView.renderRepos = function() {
    $('#githubinfo ul').empty().append(
      repos.withTheAttribute('name')
      .map(reposCompiler)
    );
  };

  repos.requestRepos(repoView.renderRepos);

  module.githubreposView = githubreposView;

})(window);
