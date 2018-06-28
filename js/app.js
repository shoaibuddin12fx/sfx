var app = angular.module("sfx", ['ui.router', 'ngSanitize', 'ui.select',  'ngAnimate', 'ui.bootstrap', 'smart-table' ]);
var partials = '/sfx/partials/';
app.run(function($rootScope, $q ) {
    
    // initialize any thing here if needed on very first run
    

});

app.config(function($stateProvider, $urlRouterProvider) {

    
    $stateProvider

        // VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: partials + 'home.html',
            controller: 'homeCtrl',
            

        })
              
    $urlRouterProvider.otherwise('/home');

  
});