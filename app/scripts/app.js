'use strict';

angular.module('deviceStatusAppAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/geolocation', {
        templateUrl: 'views/geolocation.html',
        controller: 'GeolocationCtrl'
      })
      .when('/battery', {
        templateUrl: 'views/battery.html',
        controller: 'BatteryCtrl'
      })
      .otherwise({
        redirectTo: '/geolocation'
      });
  });
