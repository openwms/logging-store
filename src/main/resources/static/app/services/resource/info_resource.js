angular.module('myApp')
    .factory('InfoClient', function ($resource) {
        'use strict';
        return $resource("/info/");
    });
