angular.module('app.controllers')
   
.controller('logInCtrl', ['$scope', '$state', 'loginService', function($scope, $state, loginService) {
      $scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN email: " + $scope.data.email + " - PW: " + $scope.data.password);
        if($scope.isEmailAddressValid($scope.data.email) && $scope.isPasswordValid($scope.data.password))
            {
                $state.go('tabsController.dashboard');
            }
    }
    
    
    $scope.isEmailAddressValid = function(email){
        //TODO
       return true; 
    }
    
    
    $scope.isPasswordValid = function(password){
        //TODO
       return true; 
    }
}])