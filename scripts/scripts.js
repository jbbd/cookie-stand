'use strict';

//STORES ARRAY 'STORES' NEW INSTANCES OF STORE
var stores = [];
var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function Store(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  stores.push(this);
}

//CREATES INSTANCES OF STORE
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 2.3);
new Store('Capitol Hill', 23, 65, 6.3);
new Store('Alki', 2, 16, 4.6);
console.log(stores);

//METHODS
(function dothis (){
  Store.prototype.customersPerHour = function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };
  Store.prototype.cookiesSold = function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  };
  Store.prototype.hourlyTotal = function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    return hourlyTotal;
  };
})();
//PRINTS TIMES
function printTimes(){
  var tableHead = document.createElement('tr');
  var tableHeadData;
  var emptyNode = document.createTextNode(' ');
  var emptyNode1 = document.createElement('th');
  emptyNode1.appendChild(emptyNode);
  tableHead.appendChild(emptyNode1);
  for (var i = 0; i < hours.length; i++){//For each hour,
    tableHeadData = document.createElement('th');//create a table header.
    tableHeadData.appendChild(document.createTextNode(hours[i]));//create a text node representing the hour and append it to the table header
    tableHead.appendChild(tableHeadData);//Append the table header to the table row
    console.log(i);
  }
  var totalTD = document.createElement('th');//creates table data cell
  var totalTextNode = document.createTextNode('Daily Location Totals');//creates text node
  totalTD.appendChild(totalTextNode);//append text node to table data
  tableHead.appendChild(totalTD);

  document.getElementById('data').appendChild(tableHead);//append the table row to the table on the HTML file
  console.log('hello');
}
printTimes();

Store.prototype.render = function(){
  var hourlyTotals = this.hourlyTotal();//Stores array of hourly totals
  var hourlyTotalTR = document.createElement('tr');//create table row
  var storeLocationTD = document.createElement('td');//create table data cell
  var storeLocationTextNode = document.createTextNode(this.location);//create text node
  storeLocationTD.appendChild(storeLocationTextNode); //append text node to table data
  hourlyTotalTR.appendChild(storeLocationTD);
  for (var i = 0; i < hourlyTotals.length; i++){
    var hourlyTotalTD = document.createElement('td');//create table data cell
    var hourlyTotalTextNode = document.createTextNode(hourlyTotals[i]);//create text NODES
    hourlyTotalTD.appendChild(hourlyTotalTextNode);//append text node to table data
    hourlyTotalTR.appendChild(hourlyTotalTD);//append table data to table row
  }
  document.getElementById('data').appendChild(hourlyTotalTR);
};

for (var i = 0; i < stores.length; i++){
  stores[i].render();
}
