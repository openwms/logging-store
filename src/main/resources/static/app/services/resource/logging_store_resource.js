angular.module('myApp.services', [])
    .factory('LoggingStoreClient', function ($resource) {
        'use strict';

        return $resource("/services/rest/log/:id ", {id: '@_id'}, {
            update: {
                method: 'PUT'
            },query: {
                method: 'GET',
                isArray: true,
                transformResponse: function(data, headersGetter) {
                    var items = angular.fromJson(data);
                    var models = [];
                    angular.forEach(items, function(item) {
                        var loggingStore = new LoggingStore();
                        loggingStore.id = item.loggingStore.id;
                        loggingStore.timestamp = item.loggingStore.timestamp;
                        loggingStore.clientApplication = item.loggingStore.clientApplikation;
                        loggingStore.clientVersion = item.loggingStore.clientVersion;
                        loggingStore.detail = item.link.href;

                        console.log("item: ", item.loggingStore.id);
                        console.log("item: ", item.loggingStore.timestamp);
                        console.log("item: ", item.loggingStore.clientApplikation);
                        console.log("item: ", item.loggingStore.clientVersion);
                        console.log("item: ", item.link.href);

                        models.push(loggingStore);
                    });
                    return models;
                }
            }
        });
    });

