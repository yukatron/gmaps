let map
let geocoder

const display = document.getElementById('display')

function initMap(){
  geocoder = new google.maps.Geocoder()

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7828, lng:-73.9653},
    zoom: 12,
  });

  marker = new google.maps.Marker({
    position:  {lat: 40.7828, lng:-73.9653},
    map: map
  });
}

function codeAddress(){
  let inputAddress = document.getElementById('address').value;

  geocoder.geocode( { 'address': inputAddress}, function(results, status) {
    if (status == 'OK') {
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        let mark = {
            lat: lat,
            lng: lng
        };
        map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });

        display.textContent = "検索結果：" + results[ 0 ].geometry.location
        } else {
            alert('該当する結果がありませんでした：' + status);
        }
    });
}