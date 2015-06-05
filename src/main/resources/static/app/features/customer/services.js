
angular.module ( 'myApp.services', [] )
    .factory ( 'ServiceClient', function ( $resource ) {
    'use strict';

    return $resource ( "/api/customer/:id ", {id : '@_id'}, {
        update : {
            method : 'PUT'
        }
    } );
})

    .factory ( 'CustomerServiceClient', function ( $resource ) {

    //http://blog.mgechev.com/2014/02/05/angularjs-resource-active-record-http/

    'use strict';
    return $resource ( "/hal/customer/ ", {}, {
        update : {
            method : 'PUT'
        }
    } );
});

