'use strict';

angular.module('deviceStatusAppAngularApp')
  .controller('GeolocationCtrl', function ($scope, geolocation) {
    $scope.location = {
      lat: 0,
      long: 0
    };

    $scope.getLocation = function() {
      $scope.location = geolocation.get();
    };
  });
