'use strict';

var app = angular.module('myApp', ['ui.router', 'ngResource', 'myApp.controllers', 'myApp.services', 'hateoas', 'spring-data-rest']);

/*
 app.config(function (HateoasInterceptorProvider) {
 HateoasInterceptorProvider.transformAllResponses();
 });*/

app.config(function (HateoasInterfaceProvider) {
    HateoasInterfaceProvider.setHttpMethods({
        update: {
            method: "PUT"
        }
    });
});


app.config(function (SpringDataRestAdapterProvider) {

    // set the new resource function
    SpringDataRestAdapterProvider.config({
        'resourcesFunction': function (url, paramDefaults, actions, options) {
            // do the call to the backend and return your desired object
        }
    });
});
/*
 app.config(function (HateoasInterfaceProvider) {
 HateoasInterfaceProvider.setLinksKey("related");
 // HateoasInterface will now search response data for links in a property called "related"
 });*/
