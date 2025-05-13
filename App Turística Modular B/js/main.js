import { renderList }   from './sitios.js';
import { renderDetail } from './detalle.js';
import { renderMap }    from './mapa.js';
import { showWeather }  from './clima.js';

const views = {
  sitios:  document.getElementById('view-sitios'),
  detalle: document.getElementById('view-detalle'),
  mapa:    document.getElementById('view-mapa'),
  clima:   document.getElementById('view-clima'),
};
const nav = {
  sitios:  document.getElementById('nav-sitios'),
  mapa:    document.getElementById('nav-mapa'),
  clima:   document.getElementById('nav-clima'),
};

document.getElementById('btn-back').addEventListener('click', () => location.hash = 'sitios');
Object.entries(nav).forEach(([k,btn]) => btn.addEventListener('click', () => location.hash = k));

window.addEventListener('hashchange', switchView);
document.addEventListener('DOMContentLoaded', () => {
  renderList();
  switchView();
});

function switchView(){
  const h = location.hash.slice(1) || 'sitios';
  Object.values(nav).forEach(b => b.classList.remove('active'));
  nav[h]?.classList.add('active');
  Object.values(views).forEach(v => v.classList.add('hidden'));

  if(h==='sitios'){ views.sitios.classList.remove('hidden'); }
  else if(h.startsWith('sitio-')){
    views.detalle.classList.remove('hidden');
    renderDetail(+h.split('-')[1]);
  }
  else if(h==='mapa'){ views.mapa.classList.remove('hidden'); renderMap(); }
  else if(h==='clima'){ views.clima.classList.remove('hidden'); showWeather(); }
}
