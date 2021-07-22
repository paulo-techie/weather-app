import displayData from './dom';
import currentWeatherLocation from './geo-api';
import loadWeather from './weather-api';

currentWeatherLocation()
  .then((city) => loadWeather(city))
  .then((data) => displayData(data))
  .catch((error) => error);
