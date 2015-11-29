angular.module('app.controllers')
   

.controller('addCustomerCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])