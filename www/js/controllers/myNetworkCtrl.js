angular.module('app.controllers')
   
   
.controller('myNetworkCtrl', ['localStorage', function(localStorage) {
    var ctrl = this;
    
    ctrl.contractors = localStorage.localDB.contractors;
    
    console.log(ctrl.contractors);
}])