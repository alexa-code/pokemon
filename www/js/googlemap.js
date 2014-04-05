function GoogleMap(){
 
	this.initialize = function(){
		var map = showMap();
	}
	 
	var showMap = function(){
		var mapOptions = {
			zoom: 19,
			center: new google.maps.LatLng(38.98756, -76.94629),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}
}