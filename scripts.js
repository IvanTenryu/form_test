/* Opciones de localización y zoom para el mapa */
let mapOptions = {
  center: [19.10, -104.10],
  zoom: 10
};

/* Construir el objeto mapa */
let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

/* Cambiar el cursor sobre el mapa a una cruz */
L.DomUtil.addClass(map._container,'crosshair-cursor-enabled');

/* Para extraer las coordenadas separadas en Longitud y Latitud */
let marker = null;
map.on('click', (event)=> {

    if(marker !== null){
        map.removeLayer(marker);
    }

    marker = L.marker([event.latlng.lat , event.latlng.lng]).addTo(map);

    document.getElementById('longitude').value = event.latlng.lng;
    document.getElementById('latitude').value = event.latlng.lat;
    
})
