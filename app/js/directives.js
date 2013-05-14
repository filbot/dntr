/* Directives */


angular.module('dntrApp.directives', [])

  .directive('appVersion', ['version', function(version) {
    return function (scope, element, attrs) {
      element.text(version);
    };
  }])

  /**
   * Custom Google Maps Directive
   */
  .directive('ngMap', [function() {
    'use strict';
    return function (scope, element, attrs) {

        var mapOptions = {
          center: new google.maps.LatLng(37.757687, -122.437477),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    };
  }]);
