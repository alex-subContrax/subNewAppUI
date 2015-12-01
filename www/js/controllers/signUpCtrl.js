angular.module('app.controllers')
  
.controller('signUpCtrl', ['$state','signUpService', 'localStorage', function($state, signUpService, localStorage) {
    
    var ctrl = this;
    
    ctrl.data = {};
        console.log(localStorage.loadData("userEmail"));
         console.log(localStorage.loadData("userPassword"));
    ctrl.signUp = function() {
        console.log("SIGNUP email: " + ctrl.data.email + " - PW: " + ctrl.data.password);
        

        
        
        localStorage.storeData("userEmail",ctrl.data.email);
        localStorage.storeData("userPassword",ctrl.data.password);
        
        $state.go('tabsController.dashboard');
    
    }
}])