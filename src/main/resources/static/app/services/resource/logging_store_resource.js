angular.module('myApp.services', [])
    .factory('LoggingStoreClient', function ($resource) {
        'use strict';

        return $resource("/services/rest/log/:id ", {id: '@_id'}, {
            update: {
                method: 'PUT'
            },query: {
                method: 'GET',
                isArray: true,
                transformResponse: function(data) {
                    var items = angular.fromJson(data);
                    var models = [];
                    angular.forEach(items, function(item) {
                        var loggingStore = new LoggingStore();
                        loggingStore.id = item.loggingStore.id;
                        loggingStore.timestamp = item.loggingStore.timestamp;
                        loggingStore.clientApplication = item.loggingStore.clientApplikation;
                        loggingStore.clientVersion = item.loggingStore.clientVersion;
                        loggingStore.debugInformation = item.loggingStore.debugInformation;
                        loggingStore.faultCode = item.loggingStore.faultCode;
                        loggingStore.faultMessage = item.loggingStore.faultMessage;
                        loggingStore.faultType = item.loggingStore.faultType;
                        loggingStore.severity = item.loggingStore.severity;
                        loggingStore.correlationId = item.loggingStore.correlationId;
                        loggingStore.detail = item.link.href;
                        //console.log("push : ", loggingStore);
                        models.push(loggingStore);
                    });
                    return models;
                }
            }
        });
    });

