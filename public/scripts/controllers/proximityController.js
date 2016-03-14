myApp.controller('ProximityController', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
    console.log('Proximity Controller');
//
//    var promise = $http.get('/get_coordinates').then(function(response) {
//        $scope.markers = response.data;
//        console.log($scope.markers);
//
//    });


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
        console.log('here');
        $scope.map = { center: { latitude: 44.9128201, longitude: -93.3191595 }, zoom: 8 };
        //$scope.map = new google.maps.Map(document.getElementById('map'), {
        //    zoom: 12,
        //    // center: new google.maps.LatLng(-33.92, 151.25),
        //    center: new google.maps.LatLng(36.8857, -76.2599)
        //});

        $scope.markers = [];
        ////
        ////var marker, i;
        //
        //for (i = 0; i < markers.length; i++) {
        //    marker = new google.maps.Marker({
        //        position: new google.maps.LatLng(markers[i][2], markers[i][4]),
        //        map: map
        //    });

        $http.get('/get_coordinates').then(function(response) {
            //$scope.markers = response.data;
            console.log(response.data);
            //$scope.markers = response.data;

            for(var i = 0; i < response.data.length; i++) {
                var site = response.data[i];
                var marker = {
                    id: i,
                    coords: {
                        latitude: site.latitude,
                        longitude: site.longitude
                    },
                    options: {
                        labelContent: site.name,
                        labelClass: 'marker-label'
                    }
                };

                $scope.markers.push(marker);
            }

            console.log($scope.markers);

        });


        //generateMarkers($scope.markers);
    });


    //function generateMarkers(array) {
    //    for (var i = 0; i < array.length; i++) {
    //        new google.maps.Marker({
    //            position: new google.maps.LatLng(array[i].latitude, array[i].longitude),
    //            map: $scope.map,
    //            title: array[i].name
    //        });
    //    }
    //}

    //initMap();
    //
    //var map;
    //function initMap() {
    //    map = new google.maps.Map(document.getElementById('map'), {
    //        center: {lat: -34.397, lng: 150.644},
    //        zoom: 8
    //    });
    //    $http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBv4cdjE0ZW5jH9IE5VqLNC4wdij2GaB2k&callback=initMap').then(
    //        function(response) {
    //
    //            $scope.googleMap = response.data;
    //        }
    //    );
    //}


}]);

