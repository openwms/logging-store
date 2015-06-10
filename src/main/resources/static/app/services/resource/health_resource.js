angular.module('myApp')
    .factory('HealthClient', function ($resource) {
        'use strict';
        return $resource("/health/");
    });
