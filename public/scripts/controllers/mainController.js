myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

    console.log('Main Controller');

    //$scope.selectedMeeting = '';
    $scope.meetingLocation = '';
    $scope.meetingTime = '';
    $scope.meetingDay = '';
    $scope.set = false;
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

    $scope.selectedData = function() {
        var selectedMeeting = {
            name: $scope.meetingLocation.name,
            time: $scope.meetingTime.value,
            day: $scope.meetingDay.value

        };
        //console.log(selectedMeeting);
        $http.post('/search', selectedMeeting).then(function (response) {
            $scope.searchResults = response.data;
            console.log($scope.searchResults);
        });

        //console.log($scope.meetingLocation, $scope.meetingTime, $scope.meetingDay);
        //var selectedLocation = $scope.meetingLocation.name;
        //var selectedTime = $scope.meetingTime.value;
        //var selectedDay = $scope.meetingDay.value;
        //getData(selectedLocation, selectedTime, selectedDay);
    };
    //function getData() {
    //    $http.get('/search').then(function (response) {
    //        $scope.searchResults = response.data;
    //        console.log($scope.searchResults);
    //    });
    //};


    $http.get('/get_meeting_location').then(function(response) {
        $scope.meetingLocationData = response.data;
    });


    //$scope.chooseMeeting = function() {
    //    console.log($scope.meetingLocation);
    //    var selectedMeeting = $scope.meetingLocation;
    //    getMeeting(selectedMeeting);
    //};
    //function getMeeting(selectedMeeting) {
    //    $http.get('/get_meeting/' + encodeURIComponent(selectedMeeting)).then(function(response) {
    //        $scope.meetings = response.data;
    //        console.log($scope.meetings);
    //
    //    });
    //}

    $scope.setTransport = function (id) {
        console.log(id);
        $http.put('/set_transport/' + id, {"transport": true}).then(function(response) {
            console.log('sent to database');

        });
        $scope.set = true;
        $scope.transport = true;
    };

    //$scope.chooseTime = function() {
    //    var selectedTime = $scope.meetingTime.value;
    //    getTime(selectedTime);
    //};
    //function getTime(selectedTime) {
    //    $http.get('get_time/' + selectedTime).then(function(response) {
    //        $scope.times = response.data;
    //    });
    //}



}]);