//Scrupt to get the map and all the location stuff
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

var initialLocation;
var tweets = [];
var browserSupportFlag =  new Boolean();

function initialize() {
  var myOptions = {
    zoom: 16,
    mapTypeId: 'satellite'
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

  // Try W3C Geolocation (Preferred)
  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);


      google.maps.event.addListener(map, 'center_changed', function(){
      initialLocation = map.getCenter();

      setMarker(map, initialLocation);
    });


      setMarker(map, initialLocation);
      setTweets(map, initialLocation);

    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    map.setCenter(initialLocation);
  }

  function setMarker(map, myLatLng){
    src = './picker.png'
    var iconBase = $('<img src="' + src + '" />');
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      // icon: iconBase + 'schools_maps.png'
      icon: src
    });
  }

  function setTweets(map, LatLng){
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });

    infowindow.open(map,marker); 

    window.setInterval(function(){
          // marker.infowindow.setMap(null);
          marker.infowindow = null;
          marker.setMap(null);
    }, 5000)
  } 
}
google.maps.event.addDomListener(window, "load", initialize);
