angular.module('myApp.controllers', [])
    .controller('EmpController', function ($log, $scope, $http, ServiceClient) {
        'use strict';
        // GET ALL
        $scope.customers = ServiceClient.query(); //fetch all
        $scope.getTotalCustomers = function () {
            return $scope.customers.length;
        };
        // callback for ng-click 'deleteUser':
        $scope.deleteCustomer = function (customerId) {
            ServiceClient.delete({id: customerId});
            $scope.customers = ServiceClient.query();
        };
    })



    .controller('CustomerClientController', function ($log, $scope, $http, CustomerServiceClient) {
        'use strict';


        // http://blog.mgechev.com/2014/02/05/angularjs-resource-active-record-http/



    })



    .controller('CustomerController', function ($log, $scope, $http, $resource) {
        'use strict';
        var url = "/hal/customer/:id ";

        var personResource = $resource(url);

        $scope.customerList = [];

        var response = personResource.query(null, function () {
            angular.forEach(response, function (customer) {
                var user = new User();
                // TODO workaround to get the self link at the moment we only have one
                // FIXME
                angular.forEach(customer.links, function (link) {
                    var customerDetails = $resource(link.href).get(null, function () {
                        user.setId(customerDetails.id);
                        user.setFirstname(customerDetails.firstname);
                        user.setLastname(customerDetails.lastname);
                        user.setSelfLink(link.href);
                        $scope.customerList.push(user);
                        console.log("--------------------");
                        console.log("link:" + link.href + " rel:" + link.rel);
                        console.log("--------------------");
                        console.log("Add Customer ID:", customerDetails.id + " firstname:" + customerDetails.firstname + " lastName:" + customerDetails.lastname + " selfLink:" + link.href);
                    });
                });
            });
        });

        // Remove / Delete Customer
        $scope.removeCustomer = function (url, index) {
            console.log("Delete Customer " + url);
            $http.delete(url);
            $scope.customerList.splice(index, 1);
        };
    })
    .controller('CustomerSubmitController', function ($log, $scope, $http, $resource) {
        'use strict';
        var url = "/hal/customer/ ";

        $scope.register = function() {
            console.log("Register new customer " + $scope.firstname + " " + $scope.lastname);

            var user = new User();
            user.firstname = $scope.firstname;
            user.lastname = $scope.lastname;
            $http.post(url, user);
            console.log("Add new Customer " + user);
        };
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