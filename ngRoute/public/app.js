angular.module('RoutingApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/first', {
      templateUrl: 'first.html'
    })
    .when('/second', {
      templateUrl: 'second.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }])

  .controller('RouterController', function($scope) {
    $scope.footerUrl = 'footer.html';
  });
