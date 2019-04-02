


$(document).ready(function () {

    console.log("ready");

    $("#adminbutton").click(function () {

        $("#admin").toggleClass("hide");

    });

    $("#menu").click(function () {

        $("#searchBox").toggleClass("hide");

    });

    // Päivitys clikki funktio, kun painetaan lataa napista kone suorittaa tämän klikkifunktion
    $("#upload").click(function () {
        var myFile = document.getElementById("myFile").value; // Get input file
        // Parse CSV string
        var data = Papa.parse(myFile);
        alert("Tämä ei tallennu tällä hetkellä mihinkään: \n\n" + JSON.stringify(data));
    });

    //});

    /* Funktio joka tulostaa json objektit kartalle. For-looppi. */

    var points = "aineisto.json"; // Muuttuja jossa on päivitetty kiintorastiaineisto
    
    $.getJSON(points, function (json) {
        for (var i = 0; i < json.length; i++) {

            //console.log(json[i].KARTTA + "," + json[i].LAT + "," + json[i].LON);

            // Luodaan muuttuja jossa on markkereitten tiedot
            var markerProperties = {
                position: new google.maps.LatLng(json[i].LAT, json[i].LON),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: markerImage,
                infoString: '<div class="markerikkuna"><b style="font-size: 18px;">' + json[i].KARTTA + '</b><br><b>Seura: </b>' + json[i].SEURA + '<br><b>Hinta: </b>' + json[i].HINTA + '<br><b>Mistä kartta? </b>' + json[i].LISAA + '<br><b>MOBO: </b>' + json[i].MOBO + '<br><br><button type="button" class="btn .btn-info"><a href="' + json[i].WEB + '" target=_blank">Lisäinfo</a></button></div>'
            };

            var marker = new google.maps.Marker(markerProperties);
            var infowindow = new google.maps.InfoWindow({});

            // Tehdään jokaiseen markkeriin click-funktio joka tulostaa infoikkunan klikattaessa markkeria
            marker.addListener('click', function () {
                infowindow.setContent(this.infoString);
                infowindow.open(map, this);
                map.setCenter(this.getPosition());
            });
        };
    });
});
