angular.module('app.controllers')
   
      
.controller('customersCtrl', ['localStorage', function(localStorage) {
    var ctrl = this;
    
    ctrl.customers = localStorage.localDB.customers;
    
    console.log(ctrl.customers);
}])