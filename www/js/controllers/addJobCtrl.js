angular.module('app.controllers')
   

.controller('addJobCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
    $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])