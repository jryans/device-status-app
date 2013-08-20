'use strict';

angular.module('deviceStatusAppAngularApp')
  .controller('BatteryCtrl', function ($scope, battery) {
    $scope.battery = {
      charging: false,
      level: 0
    };

    $scope.getBattery = function() {
      battery.get().then(function(battery) {
        $scope.battery = battery;
        $scope.$apply();
      });
    };
  });
