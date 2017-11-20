'use strict';

//STORES ARRAY 'STORES' NEW INSTANCES OF STORE
var stores = [];
var grossHourly = [];
var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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
//GET RANDOM NUMBER
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Instances
Store.prototype.getHourlyCookies = function() {
  // iterate over the hours array to do a thing for each hour
  for(var i = 0; i < hours.length; i++) {
    // create a number of cookies for each hour, push to array, and add to daily total
    this.hourlyCookies.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  console.log(this.hourlyCookies);
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
createTable();

// Gets gross hourly total for all stores
var getGrossHour = function(){
  for (var i = 0; i < hours.length; i++){
    var total = 0;
    for (var x = 0; x < stores.length; x++){
      total += stores[x].hourlyCookies[i];
    }grossHourly.push(total);

  }return grossHourly;
};
getGrossHour();


//CREATE TABLES ----- TAKEN FROM SCOTT'S LAB BECAUSE I COULD NOT MAKE IT ANY BETTER
function createTable() {
  var tableEl = document.getElementById('data');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
  tableEl.appendChild(tableFooter());
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

function createTableFooter() {//WORK ON THIS
  var tfooterEl = document.createElement('tfoot');//Create foot
  var trEl = document.createElement('tr');//Create row
  var tdElTotal = document.createElement('td');//create table data
  tdElTotal.textContent = 'Hourly Totals';
  trEl.appendChild(tdElTotal);//Append td to tr
  for(var z = 0; z < grossHourly.length; z++){//As long as i is less than the grossHourly length...
    var tdElTwo = document.createElement('td');//create table data
    tdElTwo.textContent = grossHourly[z]; //create text
    trEl.appendChild(tdElTwo);//append td to tr
  }
  tfooterEl.appendChild(trEl);//append tr to tfoot
  return tfooterEl;
}

function tableFooter(){
  var tdFoot = document.createElement('tfoot');
  var tFootRow = createTableRow('Totals', grossHourly, '');
  tdFoot.appendChild(tFootRow);
  return tdFoot;
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


function onSubmit(event) {
  event.preventDefault();
  console.log('Form filled');
  var storeData = {
  };
  storeData.storeName = event.target.storeName.value;//get store name
  storeData.minCust = parseInt(event.target.minCust.value); //parse number
  storeData.maxCust = parseInt(event.target.maxCust.value); //parse number
  storeData.avgCookiesPerSale = parseInt(event.target.avgCookiesPerSale.value); //parse number
  var newStore = new Store(storeData.storeName, storeData.minCust, storeData.maxCust, storeData.avgCookiesPerSale);
  // Append data to table
  addRow(newStore.name, newStore.hourlyCookies , newStore.dailyTotal);
}

function addRow(name, hourlyTotal, dailyTotal){
  console.log('name', name, 'hourly total', hourlyTotal, 'dailyTotal', dailyTotal);
  var tRow = document.createElement('tr');//create table row
  var tData = document.createElement('td');//create table data
  tData.textContent = name;//create text content of store name name
  tRow.appendChild(tData);//append name location to row

  for (var i = 0; i < hourlyTotal.length; i++){
    var tData2 = document.createElement('td');//create table data
    tData2.textContent = hourlyTotal[i];//create text content of total
    tRow.appendChild(tData2);//append table data to row
  }
  var tData3 = document.createElement('td');
  tData3.textContent = dailyTotal;
  tRow.appendChild(tData3);
  document.getElementById('data').appendChild(tRow);

  return tRow;
}
//EVENT LISTENER
sectionEl.addEventListener('submit', onSubmit);
