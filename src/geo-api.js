const currentWeatherLocation = () => fetch('https://freegeoip.app/json/', { mode: 'cors' })
  .then((response) => response.json())
  .then((data) => data.city)
  .catch((error) => error);

export default currentWeatherLocation;
