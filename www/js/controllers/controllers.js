angular.module('app.controllers', [])
  
.controller('signupToSubContraXCtrl', function($scope, $ionicPopup, $state, signUpService) {
    $scope.data = {};
 
    $scope.signUp = function() {
        signUpService.signUpUser($scope.data.email, $scope.data.password).success(function(data) {
            $state.go('tabsController.dashboard');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Sign Up failed!',
                template: 'Please input a valid email!'
            });
        });
    }
})
   
.controller('loginToSubContraXCtrl', function($scope) {

})
   
.controller('dashboardCtrl', function($scope) {

})
   
.controller('jobsCtrl', function($scope) {

})
   
.controller('myNetworkCtrl', function($scope) {

})
      
.controller('customersCtrl', function($scope) {

})
 
.controller('settingsCtrl', function($scope) {

})

.controller('addAJobCtrl', function($scope, $ionicHistory) {
    $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})
 
.controller('addAContractorCtrl', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('addACustomerCtrl', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})


