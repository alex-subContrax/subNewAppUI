angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('signupToSubContraX', {
      url: '/signUp',
      templateUrl: 'templates/signupToSubContraX.html',
      controller: 'signUpCtrl as signUpCtrl'
    })

        
    .state('loginToSubContraX', {
      url: '/login',
      templateUrl: 'templates/loginToSubContraX.html',
      controller: 'logInCtrl as logInCtrl'
    })
        
          
    .state('tabsController.dashboard', {
      url: '/dashboard',
      views: {
        'tab1': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl as dashboardCtrl'
        }
      }
    })
        
          
    .state('tabsController.jobs', {
      url: '/jobs',
      views: {
        'tab2': {
          templateUrl: 'templates/jobs.html',
          controller: 'jobsCtrl as jobsCtrl'
        }
      }
    })
        
      
    .state('tabsController.myNetwork', {
      url: '/myNetwork',
      views: {
        'tab3': {
          templateUrl: 'templates/myNetwork.html',
          controller: 'myNetworkCtrl as myNetworkCtrl'
        }
      }
    })
        
      
      
    .state('tabsController', {
      url: '/tabsCtrl',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
             
    .state('tabsController.customers', {
      url: '/customers',
      views: {
        'tab4': {
          templateUrl: 'templates/customers.html',
          controller: 'customersCtrl as customersCtrl'
        }
      }
    })
    
    .state('tabsController.settings', {
      url: '/settings',
      views: {
        'tab5': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl as settingsCtrl'
        }
      }
    })
         
    .state('addAJob', {
      url: '/addJob',
      templateUrl: 'templates/addAJob.html',
      controller: 'addJobCtrl as addJobCtrl'
    })
      
  .state('addAContractor', {
      url: '/addContractor',
      templateUrl: 'templates/addContractor.html',
      controller: 'addContractorCtrl as addContractorCtrl'
    })
  
  .state('addACustomer', {
      url: '/addCustomer',
      templateUrl: 'templates/addCustomer.html',
      controller: 'addCustomerCtrl as addCustomerCtrl'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signUp');

});