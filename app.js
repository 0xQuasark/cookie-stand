/* eslint-disable no-multi-spaces */
'use strict';

const LOCATIONS_SUMMARY = document.getElementById('locations-summary');

function randomNumberGenerator(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.random() * range;
  randomNumber += min;
  return Math.floor(randomNumber);
}

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


