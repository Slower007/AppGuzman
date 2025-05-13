// — Datos de los 10 sitios —
const sitios = [
  {
    name: "Parque Centenario",
    description: "Jardín central de la ciudad con kiosco y áreas verdes.",
    horario: "24 horas",
    latitude: 19.70519, longitude: -103.46271,
    images: [
      "https://live.staticflickr.com/7198/6961860203_0684cbcc50_b.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht4UlWiHtQ618m2E1339CRDnWqgu7eLitYLzHFPF91La8mumBZym7KWUkW2Ivq7iM143KhuysS_2rEohaRZ1vO0XI1mRab3MUqsUXMp3FtUz6LALRYnzYWhD_c0KAYMcgFxnoMXjMUmj9C/s1600/ciudad+guzman.jpg",
      "https://grandecdguzmanjal.com.mx/wp-content/uploads/2022/01/1portalfrayjuandepadilla.jpg"
    ],
    actividades: ["Paseos familiares", "Eventos culturales"],
    recomendaciones: "Visitar al atardecer.",
    contacto: "N/A"
  },
  {
    name: "Catedral de San José de Ciudad Guzmán",
    description: "Templo neoclásico de planta basilical de tres naves, consagrado en 1900 y sede de la Diócesis.",
    horario: "07:00 - 19:00",
    latitude: 19.703611, longitude: -103.463056,
    images: [
      "https://live.staticflickr.com/8707/17010170319_be2e1e8e02_b.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Zapotlan-el-grande.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Catedral_de_Cd._Guzm%C3%A1n.JPG"
    ],
    actividades: ["Misa diaria", "Visitas guiadas"],
    recomendaciones: "Visitar el Jardín Principal.",
    contacto: "+52 341 415 0240"
  },
  {
    name: "Casa Taller Literario Juan José Arreola",
    description: "Museo que recrea la vivienda y taller original de Juan José Arreola.",
    horario: "Mar–Sáb: 10–14; Dom: 10–14",
    latitude: 19.706687, longitude: -103.456499,
    images: [
      "https://blob.udgtv.com/images/uploads/2018/02/casa-taller-literario-juan-jos%C3%A9-arreola-desnudateyhazunritual.wordpress-focus-0-0-696-464.jpg",
      "https://offloadmedia.feverup.com/guadalajarasecreta.com/wp-content/uploads/2022/11/07033749/casa-taller-literario-juan-jose-arreola2.jpg",
      "https://sc.jalisco.gob.mx/sites/sc.jalisco.gob.mx/files/51899272031_cf7ef5d7f1_c.jpg"
    ],
    actividades: ["Recorridos temáticos", "Talleres literarios"],
    recomendaciones: "Visitar la cafetería literaria.",
    contacto: "+52 341 415 1234"
  },
  {
    name: "Laguna de Zapotlán",
    description: "Humedal volcánico, Sitio Ramsar por su avifauna migratoria.",
    horario: "Acceso gratuito",
    latitude: 19.75262, longitude: -103.46495,
    images: [
      "https://livingandworkinginmexico.wordpress.com/wp-content/uploads/2010/03/laguna.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/2b/b6/99/bf/caption.jpg",
      "http://www.ciudadguzman.gob.mx/Imagenes/Paginas/a8a996a3-8b6c-4209-97e7-29f08ae1d326/123456.jpg"
    ],
    actividades: ["Observación de aves", "Paseos en lancha", "Pesca deportiva"],
    recomendaciones: "Probar pescado zarandeado.",
    contacto: "+52 341 420 0800"
  },
  {
    name: "Parque Nacional Nevado de Colima",
    description: "Área protegida con nevadas ocasionales y senderos de alta montaña.",
    horario: "06:00–18:00",
    latitude: 19.5365, longitude: -103.616,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/33/a8/87/nevado-de-colima.jpg?w=1200&h=-1&s=1",
      "https://www.globalnationalparks.com/es/wp-content/uploads/volcan-nevado-de-colima-national-park.jpg",
      "https://cdn.milenio.com/uploads/media/2023/12/30/asi-los-increibles-paisajes-del.jpg"
    ],
    actividades: ["Senderismo", "Campismo", "Esquí de fondo"],
    recomendaciones: "Llevar equipo térmico.",
    contacto: "+52 33 3669 7380"
  },
  {
    name: "Parque Ecológico Las Peñas",
    description: "Parque urbano con mirador panorámico y muro de escalada.",
    horario: "08:00–12:00 y 15:00–18:00",
    latitude: 19.698056, longitude: -103.445278,
    images: [
      "https://www.mexicoenfotos.com/MX12182393302218.jpg",
      "https://verdebandera.mx/wp-content/uploads/2015/07/Parque-Ecologico-las-pe%C3%B1as-2.jpg",
      "https://verdebandera.mx/wp-content/uploads/2015/07/Los-Compadres..jpg"
    ],
    actividades: ["Caminatas", "Escalada", "Picnic"],
    recomendaciones: "Llevar sombrero.",
    contacto: "+52 341 415 1414"
  },
  {
    name: "Feria Zapotlán el Grande",
    description: "Feria de octubre con exposiciones, conciertos y gastronomía.",
    horario: "6–23 octubre",
    latitude: 19.69278, longitude: -103.48206,
    images: [
      "https://www.afmedios.com/wp-content/uploads/2015/10/feria_zapotlan_2015_08.jpg",
      "https://www.afmedios.com/wp-content/uploads/2013/10/feria_zapotlan_170ct2013.jpg",
      "https://marcatextos.com/wp-content/uploads/2019/10/Zapotl%C3%A1n-el-Grande-Feria.jpg"
    ],
    actividades: ["Conciertos", "Artesanías", "Juegos mecánicos"],
    recomendaciones: "Probar churros.",
    contacto: "+52 341 420 0815"
  },
  {
    name: "Casa del Arte “Dr. Atl”",
    description: "Galería de arte local con talleres artísticos.",
    horario: "Mar–Dom: 10–18",
    latitude: 19.70661, longitude: -103.46226,
    images: [
      "https://sic.cultura.gob.mx/galeria_imagen/5c7671f20ea44ilustrativa_casa_del_arte_01.jpg",
      "https://comsoc.udg.mx/sites/default/files/img_noticias/190213_cusur.jpg",
      "https://www.gaceta.udg.mx/wp-content/uploads/2015/02/822010.jpg"
    ],
    actividades: ["Exposiciones", "Talleres"],
    recomendaciones: "Visitar taquería Riky’s.",
    contacto: "+52 341 412 5880"
  },
  {
    name: "Ruta Gastronómica",
    description: "Recorrido de birria, barbacoa, tostadas y café de olla.",
    horario: "08:00–22:00",
    latitude: 19.703, longitude: -103.463,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/53/5a/da/tostada.jpg?w=900&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0a/b8/39/tacos-de-adobada.jpg?w=500&h=-1&s=1",
      "https://i.ytimg.com/vi/PDWVuq7yjxM/hqdefault.jpg"
    ],
    actividades: ["Degustación", "Recorrido de taquerías"],
    recomendaciones: "Probar pan artesanal.",
    contacto: "+52 341 415 6789"
  },
  {
    name: "Varios Espacios Turísticos",
    description: "Estadio, templo, unidades deportivas y plazas.",
    horario: "06:00–20:00",
    latitude: 19.7035, longitude: -103.4629,
    images: [
      "https://pbs.twimg.com/media/D0DA5Y7WwAIll1a.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_fPCah_fiGeJXk8Scjw2SKmviev3x5kAMQpEFemWYJ3TbdZ4ytWZbE4m4DzROxlPclOjwVIqouWjClt8IgNxBTPYPjp7cyylJWAB5P9Vb-j23BlvfD8MDZ6gIyatpX_gI29Tlfoo1we0m/w640-h454/CDGZM.jpg"
    ],
    actividades: ["Paseos", "Visitas religiosas"],
    recomendaciones: "Recorrer al atardecer.",
    contacto: "+52 341 415 1400"
  }
];

// — Navegación inferior con animación pop —
const navButtons = document.querySelectorAll('.bottom-nav button');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    anime({
      targets: btn,
      scale: [1, 1.2, 1],
      duration: 300
    });
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(btn.id.replace('btn-','')).classList.add('active');
  });
});

// — Renderizado de tarjetas “Sitios” con Swiper fade cada 5 s —
function renderSitios() {
  const cont = document.getElementById('sitios');
  sitios.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${s.name}</h2>
      <div class="swiper">
        <div class="swiper-wrapper">
          ${s.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${s.name}" /></div>`).join('')}
        </div>
      </div>
      <div class="info">
        <p>${s.description}</p>
        <p><strong>Horario:</strong> ${s.horario}</p>
        <p><strong>Actividades:</strong> ${s.actividades.join(', ')}</p>
        <p><strong>Recomendaciones:</strong> ${s.recomendaciones}</p>
        <p><strong>Contacto:</strong> ${s.contacto}</p>
      </div>`;
    cont.appendChild(card);
    new Swiper(card.querySelector('.swiper'), {
      autoplay: { delay: 5000 },
      loop: true,
      effect: 'fade'
    });
  });
}

// — Inicializar Leaflet y marcadores —
function initMap() {
  const map = L.map('map').setView([19.7032, -103.4644], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  sitios.forEach(s => {
    L.marker([s.latitude, s.longitude]).addTo(map).bindPopup(s.name);
  });
}

// — Sección Clima usando OpenWeatherMap —
function mostrarClima() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Ciudad%20Guzman,mx&appid=65ae8e4371267e3a3ceccf9d963383e9&units=metric&lang=es')
    .then(res => res.json())
    .then(data => {
      const c = document.getElementById('weather-card');
      c.innerHTML = `
        <div class="card">
          <h2>Clima en ${data.name}</h2>
          <p>🌡️ Temperatura: ${data.main.temp} °C</p>
          <p>💧 Humedad: ${data.main.humidity}%</p>
          <p>💨 Viento: ${data.wind.speed} m/s</p>
          <p>☁️ ${data.weather[0].description}</p>
        </div>`;
    });
}

// — Al cargar la página —
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-sitios').classList.add('active');
  renderSitios();
  initMap();
  mostrarClima();
});
