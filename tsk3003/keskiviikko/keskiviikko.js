
// Initialize and add the map
function initMap() {
    
      var sello = {lat: 60.218224, lng: 24.812558};
    
  // The map, centered at Sello
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: {lat: 60.239741, lng: 24.923749}});
    
  // The marker, positioned at Sello
    //var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker1 = new google.maps.Marker ({position: sello, map: map, },  
    //icon: "marker.png"
  );

        var selloTeksti = '<div id="content">'+
      //'<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Kauppakeskus Sello</h3>'+
      '<div id="bodyContent">'+
      '<p><b>Osoite</b>: Leppävaarankatu 3-9, 02600 Espoo</p>'+
      '<p><b>Aukioloajat</b>: Marketit <b>7-22/23</b> Erikoisliikkeet <b>10-21</b> Vapaa-ajankeskus <b>7.45-24</b></p>'+
      '<p><b>Muut aukioloajat: </b><a href="https://www.sello.fi/aukioloajat" target="_blank">'+'https://www.sello.fi/aukioloajat</a></p>'+
      '<p><a href="https://www.sello.fi/" target="_blank">'+
      'https://www.sello.fi/</a> '+
      '</div>'+
      '</div>';
    var infowindow1 = new google.maps.InfoWindow({

        content: selloTeksti
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });
    

    var kamppi = {lat: 60.167458, lng: 24.931075};
    var marker2 = new google.maps.Marker({position: kamppi, map: map})
            var kamppiTeksti = '<div id="content">'+
      //'<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Kampin kauppakeskus</h3>'+
      '<div id="bodyContent">'+
      '<p><b>Osoite</b>: Leppävaarankatu 3-9, 02600 Espoo</p>'+
      '<p><b>Aukioloajat</b>: Marketit <b>Ma-Pe 7-22/23</b> Erikoisliikkeet <b>Ma-Pe 10-21</b> Vapaa-ajankeskus <b>Ma-La 7.45-24</b></p>'+
      '<p><a href="https://www.sello.fi/" target="_blank">'+
      'https://www.sello.fi/</a> '+
      '</div>'+
      '</div>';
    var infowindow2 = new google.maps.InfoWindow({
        content: "Kamppi"
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
    
    var ainoa = {lat: 60.176112, lng: 24.805074};
    var marker3 = new google.maps.Marker({position: ainoa, map: map});
    var infowindow3 = new google.maps.InfoWindow({
        content: "AINOA"
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });

    var omena = {lat: 60.161600, lng: 24.738349};
    var marker4 = new google.maps.Marker({position: omena, map: map});
    var infowindow4 = new google.maps.InfoWindow({
        content: "Iso Omena"
    });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
    });

    var easton = {lat: 60.210111, lng: 25.085370};
    var marker5 = new google.maps.Marker({position: easton, map: map});
    var infowindow5 = new google.maps.InfoWindow({
        content: "Easton"
    });
    marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
    });

    var kaari = {lat: 60.236788, lng: 24.892731};
    var marker6 = new google.maps.Marker({position: kaari, map: map});
    var infowindow6 = new google.maps.InfoWindow({
        content: "Kaari"
    });
    marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
    });
    
    var nova = {lat: 60.251038, lng: 25.012771};
    var marker7 = new google.maps.Marker({position: nova, map: map});
    var infowindow7 = new google.maps.InfoWindow({
        content: "Malmin Nova"
    });
    marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
    });
    
    var itis = {lat: 60.212017, lng: 25.083053};
    var marker8 = new google.maps.Marker({position: itis, map: map});
    var infowindow8 = new google.maps.InfoWindow({
        content: "Itis"
    });
    marker8.addListener('click', function() {
        infowindow8.open(map, marker8);
    });
    
    var forum = {lat: 60.168750, lng: 24.938332};
    var marker9 = new google.maps.Marker({position: forum, map: map});
    var infowindow9 = new google.maps.InfoWindow({
        content: "Forum"
    });
    marker9.addListener('click', function() {
        infowindow9.open(map, marker9);
    });
    
    var myyrmanni = {lat: 60.260058, lng: 24.853371};
    var marker10 = new google.maps.Marker({position: myyrmanni, map: map});
    var infowindow10 = new google.maps.InfoWindow({
        content: "Myyrmanni"
    });
    marker10.addListener('click', function() {
        infowindow10.open(map, marker10);
    });
    
    var tikkuri = {lat: 60.292245, lng: 25.041739};
    var marker11 = new google.maps.Marker({position: tikkuri, map: map});
    var infowindow11 = new google.maps.InfoWindow({
        content: "Tikkuri"
    });
    marker11.addListener('click', function() {
        infowindow11.open(map, marker11);
    });
}