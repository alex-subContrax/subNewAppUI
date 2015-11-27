angular.module('app.controllers', [])
  
.controller('signupToSubContraXCtrl', function($scope) {

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


