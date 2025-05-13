import { sitios } from './sitios.js';
let inited = false;
export function initMap() {
  if (inited) return;
  inited = true;
  const map = L.map('map').setView([19.7032, -103.4644], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  sitios.forEach(s => {
    L.marker([s.latitude, s.longitude]).addTo(map).bindPopup(s.name);
  });
}