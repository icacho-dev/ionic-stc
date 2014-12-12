// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'app.controllers',
    'app.controllers.lev',
    'app.factories',
    'app.directives'
])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        /*
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }*/
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);


    $stateProvider

      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/app.html",
      })

      .state('app.login', {
          url: "/login",
          views: {
              'appContent': {
                  templateUrl: "templates/login.html"
              }
          }
      })
    .state('app.dashboard', {
        url: "/dashboard",
        views: {
            'appContent': {
                templateUrl: "templates/dashboard.html"
            }
        }
    })
    // -----------------------------
    .state('app.infra_full', {
        url: "/infra_full/:page",
        views: {
            'appContent': {
                templateUrl: function($stateParams) {
                    return "templates/infra_full/" + $stateParams.page + ".html";
                }
            }
        }
    })
    .state('app.infra_imueble', {
        url: "/infra_imueble/:page",
        views: {
            'appContent': {
                templateUrl: function($stateParams) {
                    return "templates/infra_imueble/" + $stateParams.page + ".html";
                }
            }
        }
    })
    .state('app.infra_simple', {
        url: "/infra_simple/:page",
        views: {
            'appContent': {
                templateUrl: function($stateParams) {
                    return "templates/infra_simple/" + $stateParams.page + ".html";
                }
            }
        }
    })
    .state('app.sp', {
        url: "/sp/:page",
        views: {
            'appContent': {
                templateUrl: function($stateParams) {
                    return "templates/sp/" + $stateParams.page + ".html";
                }
            }
        }
    })
    .state('app.tic_admin', {
        url: "/tic_admin/:page",
        views: {
            'appContent': {
                templateUrl: function($stateParams) {
                    return "templates/tic_admin/" + $stateParams.page + ".html";
                }
            }
        }
    })
    .state('app.tic_simple', {
        url: "/tic_simple/:page",
        views: {
            'appContent': {
                templateUrl: function ($stateParams) {
                    return "templates/tic_simple/" + $stateParams.page + ".html";
                }
            }
        }
    })
    ;
    $urlRouterProvider.otherwise('/app/login');
});

