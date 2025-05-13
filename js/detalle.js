import { sitios } from './sitios.js';
export function renderDetail(i){
  const s = sitios[i];
  const d = document.getElementById('detalle-container');
  d.innerHTML = `
    <div class="swiper"><div class="swiper-wrapper">
      ${s.images.map(url => `<div class="swiper-slide"><img src="${url}" alt=""></div>`).join('')}
    </div></div>
    <div class="info"><h1>${s.name}</h1>
      <p>${s.description}</p>
      <p><b>Horario:</b> ${s.horario}</p>
      <p><b>Actividades:</b> ${s.actividades.join(', ')}</p>
      <p><b>Recomendaciones:</b> ${s.recomendaciones}</p>
      <p><b>Contacto:</b> ${s.contacto}</p>
    </div>`;
  new Swiper('#detalle-container .swiper',{autoplay:{delay:5000},loop:true,effect:'fade'});
}
