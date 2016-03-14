var myApp = angular.module('myApp', ['uiGmapgoogle-maps', 'ngRoute']);
//,

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: '/views/templates/main.html',
            controller: 'MainController'
        })
        .when('/document_list', {
            templateUrl: '/views/templates/document_list.html',
            //controller: 'MainController'
        })
        .when('/public_transport_list', {
            templateUrl: '/views/templates/public_transport_list.html',
            controller: 'TransportController'
        })
        .when('/proximity_list', {
            templateUrl: '/views/templates/proximity_list.html',
            controller: 'ProximityController'
        })

        .otherwise({
            redirectTo: 'main'
        });
}]);

myApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBv4cdjE0ZW5jH9IE5VqLNC4wdij2GaB2k',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});