/* eslint-disable no-multi-spaces */
'use strict';


const HEADER_TABLE = document.getElementById('table-header');
const MAIN_TABLE = document.getElementById('table-body');
const FOOTER_TABLE = document.getElementById('table-footer');

function Store(nameValue, minCust, maxCust, avgCust) {
  this.locationName = nameValue;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avgCookiesPerCustomer = avgCust;
  this.generateCookiesSoldReport();
}
Store.prototype.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

Store.prototype.randomNumberGenerator = function(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.random() * range;
  randomNumber += min;
  return Math.floor(randomNumber);
};
Store.prototype.generateCookiesSoldReport = function () {
  this.cookiesSold = [];
  for (let i = 0; i < this.hours.length; i++) {
    let cookiesSoldThisHour = this.randomNumberGenerator(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer;
    this.cookiesSold.push(parseInt(cookiesSoldThisHour));
  }
};

let locations = [];

locations.push(new Store('Seattle', 23, 65, 6.3));
locations.push(new Store('Tokyo', 3, 24, 1.2));
locations.push(new Store('Dubai', 11, 38, 3.7));
locations.push(new Store('Paris', 20, 38, 2.3));
locations.push(new Store('Lima', 2, 16, 4.6));

let numHours = locations[0].hours.length; // helper variable to make sure we loop; should be 14

// --------------------------------------------------------------------
// This works out our hourly sales across all stores
// --------------------------------------------------------------------
let globalHourlySales = [];
let globalSales = 0;

for (let i = 0; i < numHours; i++){
  let hourlySales = 0;
  for (let store of locations) {
    hourlySales += store.cookiesSold[i];
  }
  globalHourlySales.push(hourlySales);
}


// --------------------------------------------------------------------
// This creates our header for the table
// --------------------------------------------------------------------
let headingRow = document.createElement('tr');
let headingCell = document.createElement('th');
headingCell.innerHTML = 'Location';             // First header
headingRow.appendChild(headingCell);

for (let i = 0; i < numHours; i++) {
  let headingCell = document.createElement('th');
  headingCell.textContent = `${locations[0].hours[i]} Sales`;
  headingRow.appendChild(headingCell);
}

headingCell = document.createElement('th');
headingCell.innerHTML = 'Daily Location Total'; // Last Header
headingRow.appendChild(headingCell);

HEADER_TABLE.appendChild(headingRow);

// --------------------------------------------------------------------
// This loops through all the objects in locations, and builds a row in table-body
// --------------------------------------------------------------------
for (let storeNumber = 0; storeNumber < locations.length; storeNumber++){
  let currentStore = locations[storeNumber];  // helper variable
  let currentStoreSales = 0;                  // tracks our Daily Location Total
  let row = document.createElement('tr');     // initiate a new row
  let cell = document.createElement('td');    // initiate a new cell
  cell.innerHTML += `${currentStore.locationName}`;
  row.appendChild(cell);                      // first cell gets the stores name

  for (let i = 0; i < numHours; i++) {
    cell = document.createElement('td');
    cell.innerHTML += currentStore.cookiesSold[i];
    row.appendChild(cell);
    currentStoreSales += currentStore.cookiesSold[i];
  }

  cell = document.createElement('td');
  cell.innerHTML += currentStoreSales;
  globalSales += currentStoreSales;       // This collects all sales for Daily Sales
  row.appendChild(cell);

  MAIN_TABLE.appendChild(row);
}

// --------------------------------------------------------------------
// This creates our header for the table
// --------------------------------------------------------------------
let footerRow = document.createElement('tr');

// function createCell () {

// }

let footerCell = document.createElement('td');
footerCell.innerHTML = '<strong>Total</strong>';
footerRow.appendChild(footerCell);

for (let i = 0; i < numHours; i++) {
  let footerCell = document.createElement('td');
  footerCell.innerHTML = `<strong>${globalHourlySales[i]}</strong>`;
  footerRow.appendChild(footerCell);
}

footerCell = document.createElement('td');
footerCell.innerHTML = `<strong>${globalSales}</strong>`; // Last Header
footerRow.appendChild(footerCell);

FOOTER_TABLE.appendChild(footerRow);

