myApp.controller('TransportController', ['$scope', '$http', function($scope, $http) {
    console.log('Transport Controller');


    $http.get('/transport_data').then(function(response){
        var data = response.data;

        $scope.transportMeetings = data;

    });

}]);