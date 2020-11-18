function initMap () {
	var latlng = {lat: <%= @map.latitude %>, lng: <%= @map.longitude %>};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: latlng
	});
	var transitLayer = new google.maps.TransitLayer();
	transitlayer.setMap(map);

	var contentString = '<%= @map.address %>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Maker({
		position: latlng,
		map: map,
		title: contentString
	});

	marker.addListener('click', function(){
		infowindow.open(map, marker);
	});
}