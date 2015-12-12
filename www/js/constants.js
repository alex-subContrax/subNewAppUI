angular.module('app')

.constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
   premium: 'premium_role',
   gold: 'gold_role',
   basic: 'basic_role'
});