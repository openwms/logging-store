angular.module('myApp.services', [])
    .factory('LoggingStoreClient', function ($resource) {
        'use strict';

        return $resource("/services/rest/log/:id ", {id: '@_id'}, {
            update: {
                method: 'PUT'
            }
        });
    });
