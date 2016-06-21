(function(module) {

  var githubreposView = {};

  var reposCompiler = function(repo) {
    var template = Handlebars.compile($('#github-page-template').text());
    return template(repo);
  };

  githubreposView.renderRepos = function() {
    console.log(repos.withTheAttribute('name')
    .map(reposCompiler));
    $('#githubinfo ul').empty().append(
      repos.withTheAttribute('name')
      .map(reposCompiler)
    );
  };

  repos.requestRepos(githubreposView.renderRepos);

  module.githubreposView = githubreposView;

})(window);
