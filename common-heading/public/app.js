angular.module('CommonHeadingApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/rcb', {
      templateUrl: 'rcb.html'
    })
    .when('/expoz', {
      templateUrl: 'expoz.html'
    })
    .when('/calc', {
      templateUrl: 'calc.html'
    })
    .when('/chem', {
      templateUrl: 'chem.html'
    })
    .when('/bio', {
      templateUrl: 'bio.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);