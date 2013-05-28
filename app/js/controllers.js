
/* Controllers */

angular.module('dntrApp.controllers', []).

    controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

        'use strict';

        // Check for HTML5 geolocation support.
        if(navigator.geolocation) {

            // Start a timer since some browsers (Firefox!) don't correctly implement success/error on dismiss.
            // Note: we're using a closure in the setTimeout function to retain access to the error_handler function.
            var geo_timeout = $scope.location_timeout = $timeout(function () {

                geo_error_handler('Too Late.');

            }, 10000);

            // Call the fancy new HTML5 geolocation feature with handlers for success/error and a 8-second timeout.
            navigator.geolocation.getCurrentPosition(geo_success_handler, geo_error_handler);
        }

        else { // If navigator.geolocation is falsy, there's no HTML5 geolocation support. Fall back to IP-based geolocation.
            console.log('Fell Back');
            //geoPluginFallback();
        }

        function geo_success_handler (position) {

            $timeout.cancel(geo_timeout);

             // Get the coordinates from the HTML5 geolocation API.
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            // If HTML5 geolocation reports success but fails to provide coordinates...
            if (!latitude || !longitude) {
              $scope.status = 'navigator.geolocation.getCurrentPosition returned bad data.';
              //geoPluginFallback();
              console.log($scope.status);
            }
            else {  // HTML5 geolocation success!
              $scope.status = 'HTML5 Geolocation API location obtained.';
              $scope.latitude = latitude;
              $scope.longitude = longitude;
              console.log($scope.status);
              // Use the Google Maps API geocoder to get the city and state name from the lat/long.
              //scope.address = reverseGeocode(latitude,longitude);
              plotLocation();
            }

        }

        function geo_error_handler (message) {
            if (message) {
                console.log(message);
            }
            else {
                console.log("Boo.");
            }
        }

        function plotLocation () {
            // Center the map on the current location.
            var center = new google.maps.LatLng($scope.latitude, $scope.longitude);

            // Create a new map marker showing the visitor's current location.
            var marker = new google.maps.Marker({
                position: center,
                map: $scope.map
                //icon: "/wp-content/plugins/localbusiness/img/mapicons/star-3.png"
            });
        }
  }])

  .controller('MyCtrl2', [function () {

}]);