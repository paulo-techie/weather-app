import loadWeather from './weather-api';

function currentWeatherLocation() {
  fetch('https://freegeoip.app/json/', { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => loadWeather(data.city))
    .catch((error) => error);
}

export default currentWeatherLocation;
