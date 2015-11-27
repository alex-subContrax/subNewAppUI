angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('signUpService', [function($q) {
    return {
        signUpUser: function(email, pw) 
        {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (email == 'alex@alex.com' && pw == '1234') {
                deferred.resolve('Welcome ' + email + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
}]);
