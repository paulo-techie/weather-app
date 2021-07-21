const API_KEY = '2745510d199eb84e68a506d68e71467a';

const loadWeather = (city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' })
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export default loadWeather;
