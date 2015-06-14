angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term


        // GET ALL
        $scope.loggingStore = LoggingStoreClient.query(); //fetch all

        var storeLogs = [];

        LoggingStoreClient.query(function (data) {
            for (var i = 0, len = data.length; i < len; i++) {
                var loggingStore = new LoggingStore();
                loggingStore.setId(data[i].loggingStore.id);
                loggingStore.setTimestamp(data[i].loggingStore.timestamp);
                loggingStore.setClientApplikation(data[i].loggingStore.clientApplikation);
                loggingStore.setClientVersion(data[i].loggingStore.clientVersion);
                storeLogs.push(loggingStore);
            }
            /*            console.log(data[0].loggingStore.id);
             console.log(data[0].loggingStore.timestamp);
             console.log(data[0].loggingStore.clientApplikation);*/
        });
        $scope.loggingStoreData = storeLogs;

        var data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

        $scope.tableParams = new NgTableParams({
            page: 1,            // show first page
            count: 10           // count per page
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });


        $scope.recordsCount = function () {
            return $scope.loggingStore.length;
        };


        // callback for ng-click 'deleteUser':
        /* $scope.deleteLog = function (storeId) {
         LoggingStoreClient.delete({id: storeId});
         $scope.store = LoggingStoreClient.query();
         };*/

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

/**
 * Constructor, with class name
 */
function User() {
    "use strict";
    // Public properties, assigned to the instance ('this')
    this.id;
    this.firstname;
    this.lastname;
    this.selfLink;

    return {
        setId: function (id) {
            this.id = id;
        },
        getId: function () {
            return id;
        },
        setFirstname: function (firstname) {
            this.firstname = firstname;
        },
        getFirstname: function () {
            return firstname;
        },
        setLastname: function (lastname) {
            this.lastname = lastname;
        },
        getLastname: function () {
            return lastname;
        },
        setSelfLink: function (link) {
            this.selfLink = link;
        },
        getSelfLink: function () {
            return selfLink;
        }
    };
}