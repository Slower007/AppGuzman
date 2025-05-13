import { sitios } from './sitios.js';
export function renderMap(){
  const markers = sitios.map(s => s.latitude + ',' + s.longitude).join('|');
  document.getElementById('view-mapa').innerHTML = `
    <iframe 
      src="https://maps.google.com/maps?q=${markers}&z=13&output=embed" 
      frameborder="0" allowfullscreen>
    </iframe>`;
}
