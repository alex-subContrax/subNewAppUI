angular.module('app.controllers')
   

.controller('AlertsCtrl', ['', function() {
    var ctrl = this;
    
    ctrl.var = true;
    
    ctrl.getAlerts = function(){
        return [];
    };
}])