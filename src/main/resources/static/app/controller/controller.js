angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, $filter, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term

        // GET ALL
        $scope.loggingStore = LoggingStoreClient.query(); //fetch all
        $scope.gridOptions = {
            data: 'loggingStore'
        };

        $scope.mySelections = [];
        $scope.gridOptions = {
            data: 'loggingStore',
            columnDefs: [
                {field: 'id', displayName: 'ID', width: 50, sortable: true},
                {field: 'timestamp', displayName: 'Timestamp', width: "auto" , pinnable: true},
                {field: 'clientApplication', displayName: 'Application', width: 50},
                {field: 'clientVersion', displayName: 'Version', width: 50},
                {field: 'debugInformation', displayName: 'Debug Information', width: 100 },
                {field: 'faultMessage', displayName: 'Fault Message', width: 100, visible: true},
                {field: 'faultCode', displayName: 'Fault Code', width: 100},
                {field: 'faultType', displayName: 'Fault Type', width: 100},
                {field: 'severity', displayName: 'Severity', width: 100},
                {field: 'correlationId', displayName: 'Correlation ID', width: 100},
                {field: 'detail', displayName: 'Details'}
            ],
            selectedItems: $scope.mySelections,
            multiSelect: false
        };
        //https://github.com/angular-ui/ng-grid/wiki/Defining-columns
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
function LoggingStore() {}
