myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

    console.log('Main Controller');


    $scope.meetings = {}; //Always as all meetings found

    //$scope.selectedMeeting = '';
    $scope.meetingLocation = '';
    $scope.meetingTime = '';
    $scope.meetingDay = '';
    $scope.meeting = {};
    $scope.meeting.set = false;
    $scope.transport = false;
    $scope.meetingTimes = [{"value":"6:00 am","label":"6:00 am"},{"value":"6:30 am","label":"6:30 am"},{"value":"7:00 am","label":"7:00 am"},
        {"value":"7:30 am","label":"7:30 am"},{"value":"8:00 am","label":"8:00 am"},{"value":"8:30 am","label":"8:30 am"},
        {"value":"9:00 am","label":"9:00 am"},{"value":"9:30 am","label":"9:30 am"},{"value":"10:00 am","label":"10:00 am"},
        {"value":"10:30 am","label":"10:30 am"},{"value":"11:00 am","label":"11:00 am"},{"value":"11:30 am","label":"11:30 am"},
        {"value":"Noon","label":"Noon"},{"value":"12:30 pm","label":"12:30 pm"},{"value":"1:00 pm","label":"1:00 pm"},
        {"value":"1:30 pm","label":"1:30 pm"},{"value":"2:00 pm","label":"2:00 pm"},{"value":"2:30 pm","label":"2:30 pm"},
        {"value":"3:00 pm","label":"3:00 pm"},{"value":"3:30 pm","label":"3:30 pm"},{"value":"4:00 pm","label":"4:00 pm"},
        {"value":"4:30 pm","label":"4:30 pm"},{"value":"5:00 pm","label":"5:00 pm"},{"value":"5:30 pm","label":"5:30 pm"},
        {"value":"6:00 pm","label":"6:00 pm"},{"value":"6:30 pm","label":"6:30 pm"},{"value":"7:00 pm","label":"7:00 pm"},
        {"value":"7:30 pm","label":"7:30 pm"},{"value":"8:00 pm","label":"8:00 pm"},{"value":"8:30 pm","label":"8:30 pm"}];

    $scope.meetingDays = [{"value":"0","label":"Sunday"},{"value":"1","label":"Monday"},{"value":"2","label":"Tuesday"},
        {"value":"3","label":"Wednesday"},{"value":"4","label":"Thursday"},{"value":"5","label":"Friday"},
        {"value":"6","label":"Saturday"}];

    $scope.selectLocation = function() {
        $scope.selected = $scope.meetingLocation;
        $scope.meetingTimes = $scope.selected.meetings;

        $scope.searchResults = [$scope.selected];

        //$scope.searchResults = $scope.selected;
        console.log($scope.selected);
    };

    $scope.selectTime = function() {
        $scope.selectedTime = $scope.meetingTime;
        console.log($scope.meetingTime);
        $scope.displayMeetingDetails = {
            name: $scope.selected.name,
            address: $scope.selected.address,
            city_state: $scope.selected.city_state,
            meetings: [$scope.selectedTime]
        }
        $scope.searchResults = [$scope.displayMeetingDetails];

    };

    $scope.selectedData = function() {
        var selectedMeeting = {
            //name: $scope.meetingLocation.name,
            //time: $scope.meetingTime.value,
            day: $scope.meetingDay.value

        };
        //console.log(selectedMeeting);
        $http.post('/search', selectedMeeting).then(function (response) {
            $scope.searchResults = response.data;
            $scope.meetings = $scope.searchResults;
            console.log($scope.searchResults);
            //$scope.meetingLocation = null;
            //$scope.meetingTime = null;
            //$scope.meetingDay = null;

        });


    };


    $http.get('/get_meeting_location').then(function(response) {
        $scope.meetingLocationData = response.data;
    });


    $scope.setTransport = function (meeting) {

        $http.put('/set_transport/' + meeting.name, {"transport": true}).then(function(response) {
            console.log('sent to database');

        });
        meeting.set = true;
        meeting.transport = true;
    };

}]);