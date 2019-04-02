var map;

function initMap() {
    var mapCenter;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
                mapCenter = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };


                var mapProperties = {
                    center: mapCenter,
                    zoom: 15
                };

                map = new google.maps.Map(document.getElementById('map'), mapProperties);

                var directionsService = new google.maps.DirectionsService;

                for (var i = 0; i < locations.length; i++) {
                    //Note: Add own property infoString in the marker object to save info for the 
                    //marker's infowindow
                    var markerProps = {
                        position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                        map: map,
                        infoString: "ABC " + locations[i].info
                    };
                    var marker = new google.maps.Marker(markerProps);
                    var infowindow = new google.maps.InfoWindow({}); //Empty window
                    
                    var directionsDisplay = new google.maps.DirectionsRenderer;
                    directionsDisplay.setMap(map);

                    marker.addListener('click', function () {
                        infowindow.setContent(this.infoString);
                        infowindow.open(map, this);
                        map.setCenter(this.getPosition());
                        calculateAndDisplayRoute(directionsService, directionsDisplay,this);
                    });

                };

                function calculateAndDisplayRoute(directionsService, directionsDisplay, marker) {
                    directionsService.route({
                        origin: mapCenter,
                        destination: marker.getPosition(),
                        travelMode: 'DRIVING'
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }

            });

        };
    };
