angular.module('app.controllers').controller('resetPasswordPromptCtrl', ['$scope', '$ionicPopup', function($scope, $ionicPopup) {
     $scope.showResetPasswordPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="email" ng-model="data.password">',
    title: 'Please enter your email',
    subTitle: 'In order to reset your password',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Send</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.password) {
            //don't allow the user to close unless he enters an email 
            e.preventDefault();
          } else {
            return $scope.data.wifi;
              }
            }
          }
        ]
      });
    };
}])
