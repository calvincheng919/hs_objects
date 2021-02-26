'use strict'
// use strict will throw an error if you do not declare a variable 


let person = {
  name: 'ben',
  age: '48',
  email: 'ben@ben.com',
  height: '5 ft 10 inches',
  friends: ['Gabe', 'Alex', 'Logan'],
  favoriteAnimals: [ 'Dog', 'Fish', 'Cat']
}

// assign the contents of person.name to the textContent property of name html element
document.querySelector('#name').textContent = person.name;

// assign the contents of person.name to the textContent property of age html element
document.getElementById('age').textContent = person.age;
document.querySelector('#email').textContent = person.email;
document.getElementById('height').textContent = person.height;

document.querySelector('#f1').textContent = person.friends[0];
document.querySelector('#f2').textContent = person.friends[1];
document.querySelector('#f3').textContent = person.friends[2];

document.querySelector('#a1').textContent = person.favoriteAnimals[0];
document.querySelector('#a2').textContent = person.favoriteAnimals[1];
document.querySelector('#a3').textContent = person.favoriteAnimals[2];


let weather = {
  temp: 32,
  city: "Bend",
  sun: true,
  rain: false,
}
//you can use either query selector or getelement by id
document.querySelector('#city').textContent = weather.city;
document.getElementById('temp').textContent = weather.temp;
document.querySelector('#sun').textContent = weather.sun;
document.getElementById('rain').textContent = weather.rain;