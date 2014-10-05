var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res) {
	//Couldnt figure out how to send the html file so just hack dat shit
	res.send('<html>' +
 	'<head>' + 
    '<style type="text/css">' +
      'html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}' +
    '</style>' +
    '<script type="text/javascript"' +
      'src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ojvW66BlV-9vl5X_v_8iMcSrGpxZ4J0">' +
   	'</script>' +
	'<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> ' +
	'<script type="text/javascript"  src="./js/map.js">' +
 '</script>' +
  '</head>' +
  '<body>'+
'<div id="map-canvas"></div>' +
  '</body>' +
'</html>')
	// res.render('map');
});

module.exports = router;
