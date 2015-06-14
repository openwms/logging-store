angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, $filter, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term

        // GET ALL
        $scope.loggingStore = LoggingStoreClient.query(); //fetch all
        $scope.dataset = LoggingStoreClient.query(function (response) {
            $scope.tableParams = new NgTableParams({
                page: 1,            // show first page
                count: 5           // count per page
            }, {
                total: $scope.dataset.length, // length of data
                getData: function ($defer, params) {
                    $defer.resolve($scope.dataset.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
        })
        $scope.gridOptions = {data: 'dataset'};




        //var2
        var storeData = [];
        $scope.storeEntries = LoggingStoreClient.query(function (response) {

        }).$promise.then(function (data) {
                $scope.events = data;
                for (var i = 0, len = $scope.events.length; i < len; i++) {
                    var loggingStore = new LoggingStore();
                    loggingStore.setId($scope.events[i].loggingStore.id);
                    loggingStore.setTimestamp($scope.events[i].loggingStore.timestamp);
                    loggingStore.setClientApplikation($scope.events[i].loggingStore.clientApplikation);
                    loggingStore.setClientVersion($scope.events[i].loggingStore.clientVersion);
                    storeData.push(loggingStore);
                }
                $scope.test = storeData;
                return storeData;
            });

        $scope.gridOptions2 = {data: 'storeData'};



        $scope.getResult = function() {
            LoggingStoreClient.query(function(data) {
                $scope.result = data;
            });
        };

        $scope.getResult();

        /*

         var itemList = LoggingStoreClient.query({}, function success() {}, function err() {});
         // will call: /my-end-point/get-some-stuff
         // will be array. each object is resource's instance
         console.log("itemList - " + itemList.length);




         $scope.videos = LoggingStoreClient.query();
         $scope.what = function() {
         var newVideoData = {}; // prepare new video data here from the model
         new loggingStore(newVideoData).$save(function(video){
         $scope.videos.push(video);
         });
         }
         console.log("videos - " + $scope.videos.length);
         */

        /*$scope.regions={};
         $scope.regions = LoggingStoreClient.query();
         $scope.regions.$promise.then(function (result) {
         $scope.regions = result;
         });
         LoggingStoreClient.query({}, function(response) {
         $scope.regions = response;
         // Do stuff that depends on $scope.regions here
         });
         console.log("regions.... -" + regions.length);*/


        /*
         var storeData = [];
         $scope.gridOptions = {};
         $scope.storeEntries = LoggingStoreClient.query(function (response) {
         for (var i = 0, len = response.length; i < len; i++) {
         var loggingStore = new LoggingStore();
         loggingStore.setId(response[i].loggingStore.id);
         loggingStore.setTimestamp(response[i].loggingStore.timestamp);
         loggingStore.setClientApplikation(response[i].loggingStore.clientApplikation);
         loggingStore.setClientVersion(response[i].loggingStore.clientVersion);
         storeData.push(loggingStore);
         }
         $scope.gridOptions = {data: 'storeData'};
         });

         console.log(gridOptions.length);

         $scope.gridOptions = {
         data: 'storeEntries', howGroupPanel: true,
         jqueryUIDraggable: true
         };*/


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
 * Constructor, with class name
 * loggingStore: {
 *     id: 1,
 *     timestamp: 1434192016307,
 *     clientApplikation: "ccb1",
 *     clientVersion: "1.2.3",
 *     debugInformation: "mymessage",
 *     faultCode: "289-333423322232-2323-23-23-32-32232332",
 *     faultMessage: "Hello maxi World SEARCH ME IN THE INFORAMTION calculate errror",
 *     faultType: "SYSTEM_UMGEBUNG",
 *     severity: "INFO",
 *     correlationId: "100004"
 *     },
 *     link: {
 *     href: "http://localhost:8080/services/rest/log/1"
 * },
 */
function LoggingStore() {
    "use strict";
    // Public properties, assigned to the instance ('this')
    this.id;
    this.timestamp;
    this.clientApplikation;
    this.clientVersion;

    return {
        setId: function (id) {
            this.id = id;
        },
        getId: function () {
            return id;
        },
        setTimestamp: function (timestamp) {
            this.timestamp = timestamp;
        },
        getTimestamp: function () {
            return timestamp;
        },
        setClientApplikation: function (clientApplikation) {
            this.clientApplikation = clientApplikation;
        },
        getClientApplikation: function () {
            return clientApplikation;
        },
        setClientVersion: function (clientVersion) {
            this.clientVersion = clientVersion;
        },
        getClientVersion: function () {
            return clientVersion;
        }
    };
}
