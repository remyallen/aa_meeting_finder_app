myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

    console.log('Main Controller');

    $scope.meeting = {};

    $scope.chooseMeeting = function() {
        console.log($scope.meeting);
        var selectedMeeting = $scope.meeting;
        getMeeting(selectedMeeting);
    };

    function getMeeting(_id) {
        $http.get('/get_meeting/' + _id).then(function(response) {
            $scope.meetings = response.data;

        });
    }

}]);