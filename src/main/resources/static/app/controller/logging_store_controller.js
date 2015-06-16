angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, $filter, LoggingStoreClient, InfoClient, HealthClient, EnvClient, NgTableParams) {
        'use strict';

        $scope.sortType = 'id'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchLog = '';     // set the default search/filter term

        // GET ALL
        $scope.allStoreItems = LoggingStoreClient.query();

        // Record Count
        $scope.recordsCount = function () {
            return $scope.allStoreItems.length;
        };

        // Paginator
        $scope.currentPage = 1;
        $scope.itemsPerPage = 5;
        /*
        $scope.pageCount = function () {
            return Math.ceil($scope.allStoreItems.length / $scope.itemsPerPage);
        };
        */
        $scope.allStoreItems.$promise.then(function () {
            $scope.totalItems = $scope.allStoreItems.length;
            $scope.$watch('currentPage + itemsPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                    end = begin + $scope.itemsPerPage;

                $scope.filteredLoggingStore = $scope.allStoreItems.slice(begin, end);
            });
        });


        // get application info
        $scope.infoClient = InfoClient.get();
        // get application health
        $scope.healthClient = HealthClient.get();
        // get application environemt
        $scope.envClient = EnvClient.get();
        // get application profiles
        $scope.envProfile = $scope.envClient.profiles;
    });
/**
 *
 * @constructor
 */
function LoggingStore() {
}
