function initMap(){
  let inputAddress = document.getElementById('address').value;

    // geocodingしたあとmapを移動
    geocoder.geocode({
      'address': inputAddress
    }, function (results, status) {
      if (status == 'OK') {
        // map.setCenterで地図が移動
        map.setCenter(results[0].geometry.location);

        // google.maps.MarkerでGoogleMap上の指定位置にマーカが立つ
        // google.maps.Markerインスタンスを生成
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}