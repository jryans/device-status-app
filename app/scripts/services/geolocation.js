'use strict';

angular.module('deviceStatusAppAngularApp')
  .service('geolocation', function geolocation() {

    if (!navigator.geolocation) {
      return {
        get: function() {
          return when.resolve({ lat: "ERROR", long: "ERROR" });
        }
      };
    }

    return {
      get: function() {
        var deferred = when.defer();

        navigator.geolocation.getCurrentPosition(function(position) {
          deferred.resolve({
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
        });

        return deferred.promise;
      }
    };
  });
