angular.module('app.controllers')
   
 
.controller('addContractorCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])