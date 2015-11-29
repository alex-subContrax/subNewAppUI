angular.module('app.controllers')
   
.controller('notificationsPopoverCtrl', ['$scope', 'notificationsPopoverService', function($scope, notificationsPopoverService) {
    $scope.data = {};
    // TODO- GET NUM OF NEW NOTIFICATIONS 
    $scope.data.numberOfNotifications = 1;

    
}])