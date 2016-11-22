angular.module('homeworkApp').directive('homeworkItem', function() {
  return {
    restrict: 'E',
    scope: {
      student: '@',   // This passes data one way
      repo: '@'   // This passes data one way
    },
    // template: '<li>{{ student }} submitted to {{ repo }}</li>', // Start out with this
    templateUrl: '/views/partials-homework-item.html', // then move to a separate file
    controller: function($scope, $http) {
      $scope.loadRepos = function(username) {
        $http.get('https://api.github.com/users/' + username + '/repos')
        .then(function(response) {
          $scope.repos = response.data;
        });
      }

      $scope.clearRepos = function() {
        $scope.repos = [];
      }
    }
  }
});
