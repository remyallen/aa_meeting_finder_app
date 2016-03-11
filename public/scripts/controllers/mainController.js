myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

    console.log('Main Controller');

    $scope.meeting = {};
    $scope.set = false;
    $scope.transport = false;

    $scope.chooseMeeting = function() {
        console.log($scope.meeting);
        var selectedMeeting = $scope.meeting;
        getMeeting(selectedMeeting);
    };

    function getMeeting(selectedMeeting) {
        $http.get('/get_meeting/' + encodeURIComponent(selectedMeeting)).then(function(response) {
            $scope.meetings = response.data;
            console.log($scope.meetings);

        });
    }

    $scope.setTransport = function (id) {
        console.log(id);
        $http.put('/set_transport/' + id, {"transport": true}).then(function(response) {
            console.log('sent to database');

        });
        $scope.set = true;
        $scope.transport = true;
    };

}]);