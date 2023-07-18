/* eslint-disable no-multi-spaces */
'use strict';

const LOCATIONS_SUMMARY = document.getElementById('locations-summary');

function randomNumberGenerator(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.random() * range;
  randomNumber += min;
  return Math.floor(randomNumber);
}

// LOCATION: SEATTLE
let seattle = {
  locationName: 'Seattle',
  minCustomers: 23,
  maxCustomers:	65,
  avgCookiesPerCustomer:  6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  generateReport: function() {
    for (let hour of this.hours) {
      // adds a key:value object for me to reference later
      this.cookiesSoldReport[hour] = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    }
  }
};

seattle.cookiesSoldReport = {}; // creates an object of our daily report
seattle.generateReport();       // fills the daily report up

let newLocationElement = document.createElement('li');
let p1 = document.createElement('p');
let p2 = document.createElement('p');

p1.innerHTML += `${seattle.locationName} details:`;
for (let hour of seattle.hours) {
  let newString = `${hour}: ${seattle.cookiesSoldReport[hour]} cookies<br>`;
  p2.innerHTML += newString;
}

newLocationElement.appendChild(p1);
newLocationElement.appendChild(p2);

LOCATIONS_SUMMARY.appendChild(newLocationElement);

// ----------------------------------------------------------
// End of Seattle
// ----------------------------------------------------------


// ----------------------------------------------------------
// LOCATION: tokyo
// ----------------------------------------------------------
let tokyo = {
  locationName: 'Tokyo',
  minCustomers: 3,
  maxCustomers:	24,
  avgCookiesPerCustomer:  1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  generateReport: function() {
    for (let hour of this.hours) {
      // adds a key:value object for me to reference later
      this.cookiesSoldReport[hour] = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    }
  }
};

tokyo.cookiesSoldReport = {}; // creates an object of our daily report
tokyo.generateReport();       // fills the daily report up

newLocationElement = document.createElement('li');
p1 = document.createElement('p');
p2 = document.createElement('p');

p1.innerHTML += `${tokyo.locationName} details:`;
for (let hour of tokyo.hours) {
  let newString = `${hour}: ${tokyo.cookiesSoldReport[hour]} cookies<br>`;
  p2.innerHTML += newString;
}

newLocationElement.appendChild(p1);
newLocationElement.appendChild(p2);

LOCATIONS_SUMMARY.appendChild(newLocationElement);

// ----------------------------------------------------------
// End of tokyo
// ----------------------------------------------------------


// ----------------------------------------------------------
// LOCATION: dubai
// ----------------------------------------------------------
let dubai = {
  locationName: 'Dubai',
  minCustomers: 11,
  maxCustomers:	38,
  avgCookiesPerCustomer:  3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  generateReport: function() {
    for (let hour of this.hours) {
      // adds a key:value object for me to reference later
      this.cookiesSoldReport[hour] = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    }
  }
};

dubai.cookiesSoldReport = {}; // creates an object of our daily report
dubai.generateReport();       // fills the daily report up

newLocationElement = document.createElement('li');
p1 = document.createElement('p');
p2 = document.createElement('p');

p1.innerHTML += `${dubai.locationName} details:`;
for (let hour of dubai.hours) {
  let newString = `${hour}: ${dubai.cookiesSoldReport[hour]} cookies<br>`;
  p2.innerHTML += newString;
}

newLocationElement.appendChild(p1);
newLocationElement.appendChild(p2);

LOCATIONS_SUMMARY.appendChild(newLocationElement);

// ----------------------------------------------------------
// End of dubai
// ----------------------------------------------------------


// ----------------------------------------------------------
// LOCATION: paris
// ----------------------------------------------------------
let paris = {
  locationName: 'Paris',
  minCustomers: 20,
  maxCustomers:	38,
  avgCookiesPerCustomer:  2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  generateReport: function() {
    for (let hour of this.hours) {
      // adds a key:value object for me to reference later
      this.cookiesSoldReport[hour] = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    }
  }
};

paris.cookiesSoldReport = {}; // creates an object of our daily report
paris.generateReport();       // fills the daily report up

newLocationElement = document.createElement('li');
p1 = document.createElement('p');
p2 = document.createElement('p');

p1.innerHTML += `${paris.locationName} details:`;
for (let hour of paris.hours) {
  let newString = `${hour}: ${paris.cookiesSoldReport[hour]} cookies<br>`;
  p2.innerHTML += newString;
}

newLocationElement.appendChild(p1);
newLocationElement.appendChild(p2);

LOCATIONS_SUMMARY.appendChild(newLocationElement);

// ----------------------------------------------------------
// End of paris
// ----------------------------------------------------------


// ----------------------------------------------------------
// LOCATION: lima
// ----------------------------------------------------------
let lima = {
  locationName: 'Lima',
  minCustomers: 2,
  maxCustomers:	16,
  avgCookiesPerCustomer:  4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  generateReport: function() {
    for (let hour of this.hours) {
      // adds a key:value object for me to reference later
      this.cookiesSoldReport[hour] = randomNumberGenerator(this.minCustomers, this.maxCustomers);
    }
  }
};

lima.cookiesSoldReport = {}; // creates an object of our daily report
lima.generateReport();       // fills the daily report up

newLocationElement = document.createElement('li');
p1 = document.createElement('p');
p2 = document.createElement('p');

p1.innerHTML += `${lima.locationName} details:`;
for (let hour of lima.hours) {
  let newString = `${hour}: ${lima.cookiesSoldReport[hour]} cookies<br>`;
  p2.innerHTML += newString;
}

newLocationElement.appendChild(p1);
newLocationElement.appendChild(p2);

LOCATIONS_SUMMARY.appendChild(newLocationElement);

// ----------------------------------------------------------
// End of lima
// ----------------------------------------------------------

