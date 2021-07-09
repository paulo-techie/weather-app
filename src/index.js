import _ from 'lodash';

const h1 = document.createElement('h1');
document.getElementById('container').appendChild(h1);
fetch('http://api.openweathermap.org/data/2.5/find?q=Nairobi&appid=2745510d199eb84e68a506d68e71467a', { mode: 'cors' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => error);
