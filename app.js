const sitios = [
  {
    nombre: "Laguna de Zapotlán",
    descripcion: "Hermoso cuerpo de agua rodeado de naturaleza.",
    horario: "Libre acceso",
    actividades: ["Paseos en lancha", "Observación de aves"],
    recomendaciones: ["Llevar protector solar", "No contaminar"],
    contacto: "turismo@guzman.gob.mx",
    imagenes: ["https://upload.wikimedia.org/wikipedia/commons/3/3f/Laguna_de_Zapotlan.jpg"],
    ubicacion: [19.7018, -103.4643]
  },
  {
    nombre: "Teatro José Rosas Moreno",
    descripcion: "Centro cultural con arquitectura neoclásica.",
    horario: "10:00 a 18:00",
    actividades: ["Obras de teatro", "Conciertos"],
    recomendaciones: ["Llega temprano", "Verifica la cartelera"],
    contacto: "cultura@guzman.gob.mx",
    imagenes: ["https://cdn2.radionacional.gob.mx/sites/default/files/styles/webp/public/jalisco.jpg.webp"],
    ubicacion: [19.7058, -103.4630]
  }
];

function navigate(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("active");
}

function renderSitios() {
  const cont = document.getElementById("sitios");
  sitios.forEach(sitio => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${sitio.nombre}</h2>
      <p>${sitio.descripcion}</p>
      <div class="swiper">
        <div class="swiper-wrapper">
          ${sitio.imagenes.map(img => `<div class="swiper-slide"><img src="${img}" width="100%"></div>`).join('')}
        </div>
      </div>
      <p><strong>Horario:</strong> ${sitio.horario}</p>
      <p><strong>Actividades:</strong> ${sitio.actividades.join(", ")}</p>
      <p><strong>Recomendaciones:</strong> ${sitio.recomendaciones.join(", ")}</p>
      <p><strong>Contacto:</strong> ${sitio.contacto}</p>
    `;
    cont.appendChild(card);
  });

  new Swiper('.swiper', {
    autoplay: { delay: 5000 },
    loop: true
  });
}

function initMap() {
  const map = L.map("map").setView([19.7032, -103.4644], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  sitios.forEach(sitio => {
    L.marker(sitio.ubicacion).addTo(map).bindPopup(sitio.nombre);
  });
}

function mostrarClima() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Ciudad%20Guzman,mx&appid=65ae8e4371267e3a3ceccf9d963383e9&units=metric&lang=es`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const card = document.getElementById("weather-card");
      card.innerHTML = `
        <div class="card">
          <h2>${data.name}</h2>
          <p>🌡️ Temperatura: ${data.main.temp} °C</p>
          <p>💧 Humedad: ${data.main.humidity} %</p>
          <p>💨 Viento: ${data.wind.speed} m/s</p>
          <p>☁️ Cielo: ${data.weather[0].description}</p>
        </div>
      `;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSitios();
  initMap();
  mostrarClima();
});