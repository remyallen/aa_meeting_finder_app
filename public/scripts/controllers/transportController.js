myApp.controller('TransportController', ['$scope', '$http', function($scope, $http) {
    console.log('Transport Controller');


    $http.get('/data').then(function(response){
        var data = response.data;

        $scope.meetings = data;

    });

}]);