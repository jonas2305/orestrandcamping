function myMap() {
    var myCenter = new google.maps.LatLng(55.006643, 11.8726502);
    var mapCanvas = document.getElementById("googleMaps");
    var mapOptions = {center: myCenter, zoom: 10};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "Ore Strand Camping"
    });
    infowindow.open(map,marker);
}