describe('logInCtrl', function() {

    var controller, 
        deferredLogin,
        dinnerServiceMock,
        stateMock,
        ionicPopupMock;

    // TODO: Load the App Module

    // TODO: Instantiate the Controller and Mocks

    describe('#login', function() {

        // TODO: Call login on the Controller

        it('should call login on loginService', function() {
            expect(loginService.login).toHaveBeenCalledWith('test1', 'password1'); 
        });

        describe('when the login is executed,', function() {
            it('if successful, should change state to tabsController.dashboard', function() {

                // TODO: Mock the login response from loginService

                expect(stateMock.go).toHaveBeenCalledWith('tabsController.dashboard');
            });

            it('if unsuccessful, should show a popup', function() {

                // TODO: Mock the login response from DinnerService

                expect(ionicPopupMock.alert).toHaveBeenCalled();
            });
        });
    })
});