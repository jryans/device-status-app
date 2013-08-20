'use strict';

angular.module('deviceStatusAppAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/geolocation.html',
        controller: 'GeolocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
