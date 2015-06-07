angular.module('myApp.controllers', [])
    .controller('LoggingStoreController', function ($log, $scope, $http, LoggingStoreClient) {
        'use strict';

        $scope.sortType     = 'id'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchFish   = '';     // set the default search/filter term



        // GET ALL
        $scope.store = LoggingStoreClient.query(); //fetch all
        $scope.getAllRecords = function () {
            return $scope.store.length;
        };
        // callback for ng-click 'deleteUser':
       /* $scope.deleteLog = function (storeId) {
            LoggingStoreClient.delete({id: storeId});
            $scope.store = LoggingStoreClient.query();
        };*/
    });


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





app.factory('User', function ($cacheFactory, $resource) {
/*
    var User = $resource('/users/:userid', {}, {
*/
    var User = $resource('/hal/customer/ ', {}, {
        get: { cache: true, method: 'get' }
    });
    return User;
})

app.controller('MainCtrl', function ($scope, User) {
    $scope.users = User.query();
});

app.controller('UserCtrl', function ($scope, user, User, $location) {
    $scope.user = user;
    $scope.remove = function () {
        User.remove({ userid: user.id });
        $location.path('/');
    };
});

app.controller('AddUserCtrl', function ($scope, User, $location) {
    $scope.save = function () {
        var user = new User({
            name: $scope.name,
            job: $scope.job
        })
        user.$save();
        $location.path('/');
    };
});