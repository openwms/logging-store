angular.module('myApp')
    .factory('EnvClient', function ($resource) {
        'use strict';
        return $resource("/env/");
    });
