angular.module('app.controllers')
  
.controller('signUpCtrl', ['$scope', '$state','signUpService', '$localStorage', function($scope, $state, signUpService, $localstorage) {
    
    $scope.data = {};
    
    $scope.signUp = function() {
        console.log("SIGNUP email: " + $scope.data.email + " - PW: " + $scope.data.password);
        
        
        $state.go('tabsController.dashboard');
    
    }
}])