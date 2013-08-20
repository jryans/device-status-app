'use strict';

angular.module('deviceStatusAppAngularApp')
  .service('battery', function battery() {

    if (!navigator.battery) {
      return {
        get: function() {
          return when.resolve({
            charging: "ERROR",
            level: "ERROR"
          });
        }
      };
    }

    return {
      get: function() {
        return when.resolve({
          charging: navigator.battery.charging,
          level: navigator.battery.level
        });
      }
    };
  });
