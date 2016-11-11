NucleusGlobalApp.directive('nucleusGlobalItem', function() {
  return {
    restrict: 'E',
    scope: {
      employee: '@',
      agency: '@',
      title: '@'
    },
    templateUrl: 'assets/views/nucleus-global-item.html',
    controller: function($scope) {

    }
  };
});
