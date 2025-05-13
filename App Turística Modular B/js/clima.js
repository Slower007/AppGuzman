const API_KEY = '65ae8e4371267e3a3ceccf9d963383e9';
let fetched = false;
export function showWeather(){
  if(fetched) return;
  fetched = true;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ciudad%20Guzman,mx&appid=${API_KEY}&units=metric&lang=es`)
    .then(r=>r.json())
    .then(data=>{
      document.getElementById('weather-container').innerHTML = `
        <div class="card">
          <h2>Clima en ${data.name}</h2>
          <p>🌡️ ${data.main.temp} °C</p>
          <p>💧 ${data.main.humidity}%</p>
          <p>💨 ${data.wind.speed} m/s</p>
          <p>☁️ ${data.weather[0].description}</p>
        </div>`;
    });
}
