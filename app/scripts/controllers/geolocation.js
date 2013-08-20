'use strict';

angular.module('deviceStatusAppAngularApp')
  .controller('GeolocationCtrl', function ($scope) {
    $scope.location = {
      lat: 32,
      long: 35
    };
  });
