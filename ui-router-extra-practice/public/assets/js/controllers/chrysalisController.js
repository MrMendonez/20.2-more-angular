NucleusGlobalApp.controller('ChrysalisController', function($scope, $stateParams) {

  $scope.nameFromUrl = $stateParams.name || 'unknown. Please type a name in the URL bar directly after "chysalis/"';

  $scope.employeeStats = [{
    employee: 'Dr. Emmit Brown',
    agency: 'Articulate Science',
    title: 'Senior Account Executive'
  }, {
    employee: 'Dr. Jack Shephard',
    agency: 'Scimentum',
    title: 'Medical Writer'
  }];

});
