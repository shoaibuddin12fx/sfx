var app = angular.module("sfx", ['ui.router', 'ngSanitize', /*'ui.select', */ 'ngAnimate', 'ui.bootstrap' /*, 'smart-table' */ ]);
// var partials = '/partials/';
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
        .state('experience', {
            url: '/experience',
            templateUrl: partials + 'experience.html',
            controller: 'experienceCtrl',
        })
        .state('education', {
            url: '/education',
            templateUrl: partials + 'education.html',
            controller: 'educationCtrl',
        })
        .state('skills', {
            url: '/skills',
            templateUrl: partials + 'skills.html',
            controller: 'skillsCtrl',
        })
        .state('projects', {
            url: '/projects',
            templateUrl: partials + 'projects.html',
            controller: 'projectsCtrl',
        })

        

        
              
    $urlRouterProvider.otherwise('/home');

  
});