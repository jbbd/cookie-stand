'use strict';

//STORES ARRAY 'STORES' NEW INSTANCES OF STORE
var stores = [];
var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}

//Instances
Store.prototype.getHourlyCookies = function() {
  // iterate over the hours array to do a thing for each hour
  for(var i = 0; i < hours.length; i++) {
    // create a number of cookies for each hour, push to array, and add to daily total
    this.hourlyCookies.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.hourlyCookies;
};
Store.prototype.getCustomersPerHour = function() {
  // returns a random number specific to the instance which called this method
  return getRandomNum(this.minCust, this.maxCust);
};

//CREATES INSTANCES OF STORE
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
console.log(stores);

//GET RANDOM NUMBER
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
//CREATE TABLES
function createTable() {
  var tableEl = document.getElementById('data');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hours, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');

  for(var k = 0; k < stores.length; k++) {
    var bodyRow = createTableRow(stores[k].name, stores[k].hourlyCookies, stores[k].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }

  return tbodyEl;
}

function createTableRow(verticalHeader, dataPoints, verticalFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = verticalHeader;
  trEl.appendChild(tdElOne);

  for(var j = 0; j < dataPoints.length; j++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[j];
    trEl.appendChild(tdElTwo);
  }

  var tdElThree = document.createElement('td');
  tdElThree.textContent = verticalFooter;
  trEl.appendChild(tdElThree);

  return trEl;
}

var sectionEl = document.getElementById('main-form');

//EVENT LISTENER
sectionEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log('Form filled');
  var storeData = {
  };
  storeData.storeName = event.target.storeName.value;
  storeData.minCust = event.target.minCust.value;
  storeData.maxCust = event.target.maxCust.value;
  storeData.avgCookiesPerSale = event.target.avgCookiesPerSale.value;
  var newStore = new Store(storeData.storeName, storeData.minCust, storeData.maxCust, storeData.avgCookiePerCust);
  console.log(newStore);
  createTable();
}
