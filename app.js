const sitios = [
  { name:"Parque Centenario", description:"Jardín central...", horario:"24h", latitude:19.70519, longitude:-103.46271,
    images:["https://live.staticflickr.com/7198/6961860203_0684cbcc50_b.jpg","https://...jpg","https://...jpg"],
    actividades:["Paseos","Eventos"], recomendaciones:"Al atardecer", contacto:"N/A" },
  // ... los 9 restantes tal cual definidos arriba ...
];

const navButtons = document.querySelectorAll('.bottom-nav button');
navButtons.forEach(btn => btn.addEventListener('click', () => {
  anime({ targets: btn, scale:[1,1.2,1], duration:300 });
  navButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('section').forEach(s=>s.classList.add('hidden'));
  document.getElementById(btn.id.replace('btn-','')).classList.add('active');
}));

function renderSitios(){
  const c=document.getElementById('sitios');
  sitios.forEach(s=>{
    const card=document.createElement('div'); card.className='card';
    card.innerHTML=`<h2>${s.name}</h2><div class="swiper"><div class="swiper-wrapper">
      ${s.images.map(i=>`<div class="swiper-slide"><img src="${i}" alt=""></div>`).join('')}
    </div></div><div class="info"><p>${s.description}</p><p><b>Horario:</b>${s.horario}</p>
    <p><b>Actividades:</b>${s.actividades.join(', ')}</p><p><b>Rec:</b>${s.recomendaciones}</p>
    <p><b>Contacto:</b>${s.contacto}</p></div>`;
    c.appendChild(card);
    new Swiper(card.querySelector('.swiper'),{autoplay:{delay:5000},loop:true,effect:'fade'});
  });
}

function initMap(){
  const map=L.map('map').setView([19.7032,-103.4644],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  sitios.forEach(s=>L.marker([s.latitude,s.longitude]).addTo(map).bindPopup(s.name));
}

function mostrarClima(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Ciudad%20Guzman,mx&appid=65ae8e4371267e3a3ceccf9d963383e9&units=metric&lang=es')
  .then(r=>r.json()).then(data=>{
    document.getElementById('weather-card').innerHTML=`<div class="card">
      <h2>Clima en ${data.name}</h2><p>🌡️${data.main.temp}°C</p>
      <p>💧${data.main.humidity}%</p><p>💨${data.wind.speed}m/s</p><p>☁️${data.weather[0].description}</p>
    </div>`;
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('btn-sitios').classList.add('active');
  renderSitios(); initMap(); mostrarClima();
});