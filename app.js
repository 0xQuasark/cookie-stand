/* eslint-disable no-multi-spaces */
'use strict';

const HEADER_TABLE = document.getElementById('table-header');
const MAIN_TABLE = document.getElementById('table-body');
const FOOTER_TABLE = document.getElementById('table-footer');
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(nameValue, minCust, maxCust, avgCust) {
  this.locationName = nameValue;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avgCookiesPerCustomer = avgCust;
  this.generateCookiesSoldReport();     // creates a this.cookiesSold property
}
Store.prototype.hours = storeHours;

Store.prototype.randomNumberGenerator = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Thanks for this one GPT!
};

Store.prototype.generateCookiesSoldReport = function () {
  this.cookiesSold = [];
  for (let i = 0; i < this.hours.length; i++) {
    let cookiesSoldThisHour = this.randomNumberGenerator(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer;
    this.cookiesSold.push(parseInt(cookiesSoldThisHour));
  }
};

let locations = [
  new Store('Seattle', 23, 65, 6.3),
  new Store('Tokyo', 3, 24, 1.2),
  new Store('Dubai', 11, 38, 3.7),
  new Store('Paris', 20, 38, 2.3),
  new Store('Lima', 2, 16, 4.6)
];


// --------------------------------------------------------------------
// This works out our hourly sales across all stores
// --------------------------------------------------------------------
const globalHourlySales = [];
let globalSales = 0;

for (let i = 0; i < storeHours.length; i++) {
  // We iterate over all the applicable hours
  let hourlySales = 0;
  for (let store of locations) {
    hourlySales += store.cookiesSold[i];  // we're now adding sales from all the stores during the same hours
  }
  globalHourlySales.push(hourlySales);    // now we capture the number of sales for this hour
}


// --------------------------------------------------------------------
// This is a useful function to create custom TD entries
// if no value is given to element, it assumes it's a <TD> tag
// --------------------------------------------------------------------
function newCell(newData, element = 'td') {
  const newCell = document.createElement(element);
  newCell.innerHTML = newData;
  return newCell;
}

// --------------------------------------------------------------------
// This creates our header for the table
// --------------------------------------------------------------------
let headingRow = document.createElement('tr');

headingRow.appendChild(newCell('Location', 'th'));

// for (let i = 0; i < this.hours.length; i++) {
for (let i = 0; i < storeHours.length; i++) {
  headingRow.appendChild(newCell(`${locations[0].hours[i]} sales`, 'th'));
}

headingRow.appendChild(newCell('Daily Location Total', 'th'));

HEADER_TABLE.appendChild(headingRow);


// --------------------------------------------------------------------
// This loops through all the objects in locations, and builds a row in table-body
// --------------------------------------------------------------------
for (let storeNumber = 0; storeNumber < locations.length; storeNumber++) {
  let currentStore = locations[storeNumber];  // helper variable
  let currentStoreSales = 0;                  // tracks our Daily Location Total
  let row = document.createElement('tr');     // initiate a new row

  row.appendChild(newCell(`${currentStore.locationName}`)); // first cell gets the stores name

  for (let i = 0; i < currentStore.hours.length; i++) {
    row.appendChild(newCell(currentStore.cookiesSold[i]));
    currentStoreSales += currentStore.cookiesSold[i];         // Daily Location Total increases
  }
  globalSales += currentStoreSales;       // This collects all sales for Daily Sales

  row.appendChild(newCell(currentStoreSales));

  MAIN_TABLE.appendChild(row);
}


// --------------------------------------------------------------------
// This creates our footer for the table
// --------------------------------------------------------------------
let footerRow = document.createElement('tr');
footerRow.appendChild(newCell('<strong>Total</strong>'));

for (let i = 0; i < storeHours.length; i++) {
  footerRow.appendChild(newCell(`<strong>${globalHourlySales[i]}</strong>`));
}

footerRow.appendChild(newCell(`<strong>${globalSales}</strong>`));

FOOTER_TABLE.appendChild(footerRow);

