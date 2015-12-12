angular.module('app.controllers')
   
    
.controller('settingsCtrl', ['$state', 'loginService', function($state, loginService) {
    
    var ctrl = this;

    ctrl.data = {};
    
    ctrl.logOut = function() {
    loginService.logout();
    $state.go('loginToSubContraX');
}}])