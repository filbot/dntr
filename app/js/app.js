/**
 * dntr angular module
 * @type {object}
 */

var angular = angular || {};

var dntrApp = angular.module('dntrApp', ['dntrApp.filters', 'dntrApp.services', 'dntrApp.directives', 'dntrApp.controllers', 'ui.compat']).run(function ($rootScope, $location, $state) {

    'use strict';

    // Provide the current location to all scopes
    $rootScope.location = $location;

    // Provide the current state to all scopes
    $rootScope.$state = $state;

    // Global console logging helper
    $rootScope.log = function(variable) {
        console.log(variable);
    };

    // Global alert helper
    $rootScope.alert = function(text) {
        window.alert(text);
    };
});

dntrApp.config(['$stateProvider', function($stateProvider) {

    // Configure the state service
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
    })
    .state('main.address', {
        url: '/{address}',
        data: {
            /* Arbitary state data */
        }
    })
    .state('main.details', {
        url: '/{details}',
        data: {

        }
    });
  }]);