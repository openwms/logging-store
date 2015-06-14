angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, $filter, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term


        // GET ALL
        $scope.loggingStore = LoggingStoreClient.query(); //fetch all

/*
        var storeData = [];
*/
        $scope.dataset = LoggingStoreClient.query(function (response) {
            /*for (var i = 0, len = response.length; i < len; i++) {
                var loggingStore = new LoggingStore();
                loggingStore.setId(response[i].loggingStore.id);
                loggingStore.setTimestamp(response[i].loggingStore.timestamp);
                loggingStore.setClientApplikation(response[i].loggingStore.clientApplikation);
                loggingStore.setClientVersion(response[i].loggingStore.clientVersion);
                storeData.push(loggingStore);
            }
            $scope.dataset = storeData;
             */
            $scope.tableParams = new NgTableParams({
                page: 1,            // show first page
                count: 5           // count per page
            }, {
                total: $scope.dataset.length, // length of data
                getData: function($defer, params) {
                    $defer.resolve($scope.dataset.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
        });


        $scope.recordsCount = function () {
            return $scope.loggingStore.length;
        };


        // get application info
        $scope.infoClient = InfoClient.get();
        // get application health
        $scope.healthClient = HealthClient.get();

        $scope.envClient = EnvClient.get();
        $scope.envProfile = $scope.envClient.profiles;
    });
