angular.module('app.controllers')
   
.controller('logInCtrl', ['$scope', '$state', 'loginService', function($scope, $state, loginService) {
      $scope.data = {};
        $scope.login = function(){
          loginService.login($scope.data.email, $scope.data.password);  
        }; 
   
    }
    
    
])