describe('AlertsCtrl',function(){
        var $controller, scope, alertsCtrl;
    beforeEach(function(){
        module('app.controllers');
        
         inject(function($rootScope, $controller, $q) {
        
        scope = $rootScope.$new();
        alertsCtrl = $controller('AlertsCtrl', {$scope: scope});
    })     
              
    } );
    




            
  describe('#getAlerts', function(){    
      it('should get an order object', function () {
      expect(alertsCtrl).toBeDefined();
  });
      
     // it('should return empty array', function(){
       //   expect(alertsCtrl.getAlerts()).toEqual([]);
      //})
  });
});