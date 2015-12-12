describe('logInCtrl', function() {

    var controller, 
        deferredLogin,
        dinnerServiceMock,
        stateMock,
        ionicPopupMock;

    // Load the App Module
    beforeEach(module('app'));
    
  // instantiate the controller and mocks for every test
	beforeEach(inject(function($controller) {
        
		
		// instantiate LoginController
	//	controller = $controller('logInCtrl', {  }
	//				 );
	}));
    
    describe('#login', function() {

        // TODO: Call login on the Controller

        it('should call login on loginService', function() {
            expect(true).toBe(true); 
        });

    })
});