// 1) Define tus lugares
const places = [
  { name: 'Chichén Itzá', coords: [20.6843, -88.5678] },
  { name: 'Teotihuacán', coords: [19.6925, -98.8438] },
  { name: 'Catedral CDMX', coords: [19.4333, -99.1333] }
];

// 2) Inicializa el mapa (centrado en CDMX)
const map = L.map('map').setView([19.4326, -99.1332], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3) Crea la lista en pantalla
const listDiv = document.getElementById('list');
places.forEach((place, idx) => {
  const el = document.createElement('div');
  el.className = 'place-item';
  el.textContent = place.name;
  el.onclick = () => showPlace(idx);
  listDiv.appendChild(el);
});

// 4) Al seleccionar un lugar
function showPlace(i) {
  const place = places[i];
  // centrar y marcar
  map.setView(place.coords, 13);
  L.marker(place.coords).addTo(map)
    .bindPopup(place.name).openPopup();
  // trazar ruta desde CDMX (19.4326,-99.1332)
  drawRoute([19.4326, -99.1332], place.coords);
}

// 5) Función para trazar ruta con OpenRouteService
async function drawRoute(start, end) {
  // borra rutas previas
  map.eachLayer((layer) => {
    if (layer instanceof L.Polyline) map.removeLayer(layer);
  });
  const res = await fetch('https://api.openrouteservice.org/v2/directions/foot-walking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '5b3ce3597851110001cf624872b3d10db02c4c31b04bf83f857711bf'
    },
    body: JSON.stringify({ coordinates: [[start[1],start[0]],[end[1],end[0]]] })
  });
  const json = await res.json();
  const coords = json.features[0].geometry.coordinates.map(c => [c[1], c[0]]);
  L.polyline(coords, { weight: 4 }).addTo(map);
}
