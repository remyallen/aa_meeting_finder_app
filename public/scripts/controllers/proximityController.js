myApp.controller('ProximityController', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
    console.log('Proximity Controller');


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
        console.log('here');
        $scope.map = { center: { latitude: 44.977753, longitude: -93.265011 }, zoom: 8 };


        $scope.markers = [];

        $http.get('/get_coordinates').then(function(response) {

            console.log(response.data);


            for(var i = 0; i < response.data.length; i++) {

                var site = response.data[i];

                var marker = {
                    id: i,
                    coords: {
                        latitude: site.latitude,
                        longitude: site.longitude
                    },
                    options: {
                        //labelContent: site.name,
                        labelClass: 'marker-label',
                        animation: 'DROP'
                    },
                    events: {

                    },
                    name: site.name,
                    address: site.address,
                    city_state: site.city_state

                };

                $scope.markers.push(marker);

            }

            console.log($scope.markers);

        });

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };


    });


}]);

