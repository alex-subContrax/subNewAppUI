angular.module('app.services')
.service('loginService', ['$state', function($state){
         this.login = function(email, password) {
            console.log("LOGIN email: " + email + " - PW: " + password);
            if(this.isEmailAddressValid(email) && this.isPasswordValid(password))
            {
                $state.go('tabsController.dashboard');
            }
    }
        
        this.isEmailAddressValid = function(email){
            return true;
    };
    
    this.isPasswordValid = function(password){
        return true;
    };
}
])
