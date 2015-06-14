angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, $filter, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term

        // GET ALL
        $scope.loggingStore = LoggingStoreClient.query(); //fetch all

        $scope.gridOptions = {data: 'loggingStore'};


        //http://angular-ui.github.io/ng-grid/


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

/**
 *
 * @constructor
 */
function LoggingStore() {
    "use strict";
    this.id;
    this.timestamp;
    this.clientApplikation;
    this.clientVersion;
}
