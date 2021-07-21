import displayData from './dom';
import currentWeatherLocation from './geo-api';
import loadWeather from './weather-api';

currentWeatherLocation()
  .then((city) => loadWeather(city))
  .then((data) => displayData(data))
  .catch((error) => console.log(error));

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const header = document.querySelector('header');
// const sectionDiv = document.querySelector('div');

