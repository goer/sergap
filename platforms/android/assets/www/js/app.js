// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

        $ionicConfigProvider.views.transition('none');

  $stateProvider

      .state('root',{
            url: '',
            abstract: true,
            template : '<ion-nav-view name="view-main"></ion-nav-view>'
      })

      .state('root.room',{
            url: '/room',
            views : {
                'view-main@root' : {templateUrl : 'templates/room-list.html'}
            }
      })

      .state('root.room.map',{
            url: '/map',
            views : {
                'view-main@root' : {templateUrl : 'templates/roomdetail.html'}
            }
      })

      //.state('root.room.roomdetail.map',{
      //    url: '/map',
      //    views : {
      //        'menu-content@root.room.roomdetail' : {templateUrl : 'templates/roomdetail-map.html'}
      //    }
      //})


;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/room');

});
