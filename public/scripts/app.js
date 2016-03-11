var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl: '/views/templates/main.html',
            controller: 'MainController'
        })
        .when('/document_list', {
            templateUrl: '/views/templates/document_list.html',
            controller: 'MainController'
        })
        .when('/public_transport_list', {
            templateUrl: '/views/templates/public_transport_list.html',
            controller: 'TransportController'
        })
        .when('/proximity_list', {
            templateUrl: '/views/templates/proximity_list.html',
            controller: 'MainController'
        })

        .otherwise({
            redirectTo: 'main'
        });


}]);