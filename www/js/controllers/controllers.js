angular.module('app.controllers', [])
  
.controller('signupToSubContraXCtrl', ['$scope', '$state','signUpService', 'localStorage', function($scope, $state, signUpService, localStorage) {
    
    $scope.data = {};
    
    $scope.signUp = function() {
        console.log("SIGNUP email: " + $scope.data.email + " - PW: " + $scope.data.password);
        
        localStorage.setObject('signInInfo',{
            email: $scope.data.email,
            password: $scope.data.password
        });
        
       console.log($localstorage.getObject('signInInfo'));
        
        $state.go('tabsController.dashboard');
    
    }
}])
   
.controller('loginToSubContraXCtrl', ['$scope', '$state', 'loginService', function($scope, $state, loginService) {
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
   
.controller('dashboardCtrl', ['$scope', '$ionicPopover', '$ionicSideMenuDelegate', function($scope, $ionicPopover, $ionicSideMenuDelegate) {
    $scope.data = {};
    // TODO- GET NUM OF NEW NOTIFICATIONS 
    $scope.data.numberOfNotifications = 1;
    
    $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };


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
    
    
}])
   
.controller('jobsCtrl', ['$scope', function($scope) {

}])
   
.controller('myNetworkCtrl', ['$scope', function($scope) {

}])
      
.controller('customersCtrl', ['$scope', function($scope) {

}])
 
.controller('settingsCtrl', ['$scope', function($scope) {

}])

.controller('addAJobCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
    $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])
 
.controller('addAContractorCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])

.controller('addACustomerCtrl', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
        $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}])


