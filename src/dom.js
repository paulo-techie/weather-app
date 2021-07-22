import loadWeather from './weather-api';

const displayData = (data) => {
  const main = document.getElementById('content');
  const header = document.createElement('header');
  const sectionDiv = document.createElement('div');
  const sectionLocation = document.createElement('section');
  const sectionTemp = document.createElement('section');
  const sectionMain = document.createElement('section');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const selectBtn = document.createElement('button');
  const h3c = document.createElement('h3');
  const h3f = document.createElement('h3');
  const pT = document.createElement('p');
  const cityh4 = document.createElement('h4');
  const countryh4 = document.createElement('h4');

  main.appendChild(header);
  main.appendChild(sectionDiv);

  sectionDiv.appendChild(sectionLocation);
  sectionDiv.appendChild(sectionMain);
  sectionDiv.appendChild(sectionTemp);

  header.appendChild(form);
  sectionLocation.appendChild(cityh4);
  sectionLocation.appendChild(countryh4);
  sectionTemp.appendChild(selectBtn);
  sectionTemp.appendChild(h3c);
  sectionTemp.appendChild(h3f);
  sectionTemp.appendChild(pT);
  sectionMain.appendChild(img);
  sectionMain.appendChild(h2);

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  input.setAttribute('placeholder', 'Enter City');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'cityname');
  input.setAttribute('name', 'cityname');
  h3f.setAttribute('id', 'fahrenheit');
  h3c.setAttribute('id', 'celsius');
  selectBtn.setAttribute('id', 'switch-temp');
  sectionMain.setAttribute('id', 'weatherdesc');

  label.innerText = 'Weather';
  button.innerText = 'Search';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value;
    sectionDiv.style.display = 'none';
    header.style.display = 'none';
    loadWeather(city)
      .then((data) => displayData(data))
      .catch((error) => error);
  });

  const arr = Array.from(data.weather);
  h2.innerText = arr[0].description;
  img.setAttribute('src', `https://openweathermap.org/img/wn/${arr[0].icon}@2x.png`);
  img.setAttribute('alt', arr[0].description);
  cityh4.innerText = data.name;
  countryh4.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
  selectBtn.innerText = 'Fahrenheit';
  h3c.innerHTML = `${Math.round(data.main.temp - 273.15)} °C`; // convert Kelvin to degrees celsius
  h3f.innerHTML = `${Math.round((data.main.temp - 273.15) * (9 / 5) + 32)} °F`; // convert Kelvin to degrees fahrenheit
  pT.innerHTML = '<i class="fas fa-thermometer-full"></i>';
  h3f.style.display = 'none';

  selectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (h3f.style.display === 'none') {
      h3f.style.display = 'block';
      h3c.style.display = 'none';
      selectBtn.innerText = 'Celsius';
    } else {
      h3f.style.display = 'none';
      h3c.style.display = 'block';
      selectBtn.innerText = 'Fahrenheit';
    }
  });
};

export default displayData;
