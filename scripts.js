let mapOptions = {
  center: [19.10, -104.10],
  zoom: 10
};

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');

/*
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Coordenadas: " + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
*/

let marker = null;
map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

    document.getElementById('longitude').value = event.latlng.lng;
    document.getElementById('latitude').value = event.latlng.lat;
    
})
