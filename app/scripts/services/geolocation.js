'use strict';

angular.module('deviceStatusAppAngularApp')
  .service('geolocation', function geolocation() {

    if (!navigator.geolocation) {
      return {
        get: function() {
          return { lat: "ERROR", long: "ERROR" };
        }
      };
    }

    return {
      get: function() {
        return { lat: 12, long: 4 };
      }
    };
  });
