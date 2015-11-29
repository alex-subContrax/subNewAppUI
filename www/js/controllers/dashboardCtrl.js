angular.module('app.controllers')
   

   
.controller('dashboardCtrl', ['$scope', '$ionicPopover', '$ionicSideMenuDelegate', function($scope, $ionicPopover, $ionicSideMenuDelegate) {
    $scope.data = {};
    // TODO- GET NUM OF NEW NOTIFICATIONS 
    $scope.data.numberOfNotifications = 1;
    
    $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

////////////////// TODO- PUT IN OWN CONTROLLER AND SERVICE ////////////////////
  // .fromTemplateUrl() method
  $scope.popover = $ionicPopover.fromTemplateUrl('templates/notificationsPopover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
///////////////////////////// END TODO  ////////////////////////////
    
}])