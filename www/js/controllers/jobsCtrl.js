angular.module('app.controllers')
   

.controller('jobsCtrl', ['localStorage', '$state', function(localStorage, $state) {
    var ctrl = this;
    
    ctrl.jobs = localStorage.localDB.jobs;
    
    console.log(ctrl.jobs);
}])