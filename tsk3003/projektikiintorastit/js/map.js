var map;
var infowindow;
var centerLatLng = {
    lat: 64.250533,
    lng: 26.476404
};
var zoomTaso = 5; // Kartan zoomitaso
var markerImage = 'img/rastilippu.png'; // Marker image





/* Funktio joka muodostaa kartan */

function initMap() {

    var mapCanvas = document.getElementById("map"); //$("#map")[0];

    var mapProperties = {
        center: new google.maps.LatLng(centerLatLng),
        zoom: zoomTaso,
        disableDefaultUI: true,
        mapTypeId: 'terrain',
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_LEFT_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
            style: google.maps.ZoomControlStyle.LARGE,
        },
        scaleControl: true,
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: false,
    };


    map = new google.maps.Map(mapCanvas, mapProperties);

    map = new google.maps.Map($("#map")[0], mapProperties);

    var card = document.getElementById('pac-card');
    var input = document.getElementById('searchBox');
    // var countries = document.getElementById('country-selector');

    // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Set initial restrict to the greater list of countries.
    autocomplete.setComponentRestrictions({
        'country': ['fi']
    });

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        //anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    });
};
