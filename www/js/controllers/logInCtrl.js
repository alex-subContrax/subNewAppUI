angular.module('app.controllers')
   
.controller('logInCtrl', ['$scope', '$state', '$ionicPopup','loginService', function($scope, $state, $ionicPopup, loginService) {
    
    var ctrl = this;

    ctrl.data = {};
    
    ctrl.login = function(data) {
    loginService.login(ctrl.data.email, ctrl.data.password).then(function(authenticated) {
      $state.go('tabsController.dashboard');
      //$scope.setCurrentUsername(data.username);
    }, function(err) {
      console.log(ctrl.data.email);
      var alertPopup = $ionicPopup.alert({
        title: "Sorry we can't log you in...",
        template: "The Email And/Or Password you've inputed are incorrect..."
      });
    });
  };

   
}
    
    
])