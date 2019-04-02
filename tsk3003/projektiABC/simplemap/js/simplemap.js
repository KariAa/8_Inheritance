var map;

function initMap() {
    var mapCenter;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition (function(position) {
            mapCenter = {                   
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            
            var mapProperties = {
                center: mapCenter,
                zoom: 15,
            };

            map = new google.maps.Map(document.getElementById('map'), mapProperties);

            for (var i = 0; i < locations.length; i++) {
                //Note: Add own property infoString in the marker object to save info for the 
                //marker's infowindow
                console.log (i);
                var markerProps = {
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: map,
                    infoString: "ABC " + locations[i].info
                };
                var marker = new google.maps.Marker(markerProps);
                var infowindow = new google.maps.InfoWindow({});   //Empty window

                marker.addListener('click', function() {
                    infowindow.setContent(this.infoString);
                    infowindow.open(map, this);
                    map.setCenter(this.getPosition());
        
                    
                })
            }
        });
    };



};