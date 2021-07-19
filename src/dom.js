import loadCity from './change-city';

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
  const h3 = document.createElement('h3');
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
  sectionTemp.appendChild(h3);
  sectionTemp.appendChild(pT);
  sectionMain.appendChild(img);
  sectionMain.appendChild(h2);

  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);

  form.setAttribute('id', 'input-form');
  input.setAttribute('placeholder', 'Enter City ...');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'cityname');
  input.setAttribute('name', 'cityname');
  sectionMain.setAttribute('id', 'weatherdesc');

  label.innerText = 'Weather';
  button.innerText = 'Search';

  form.addEventListener('submit', e => {
    e.preventDefault();
    const city = input.value;
    sectionDiv.style.display = 'none';
    header.style.display = 'none';
    loadCity(city);
  });

  const arr = Array.from(data.weather);
  h2.innerText = arr[0].description;
  img.setAttribute('src', `http://openweathermap.org/img/wn/${arr[0].icon}@2x.png`);
  img.setAttribute('alt', arr[0].description);
  cityh4.innerText = data.name;
  countryh4.innerHTML = '<i class = "fas fa-map-marker-alt"></i>';
  h3.innerHTML = `${Math.round( data.main.temp - 273.15 )} &#8451;`;// convert Kelvin to degrees celsius
  pT.innerHTML = '<i class = "fas fa-thermometer-full"></i>';
};

export default displayData;