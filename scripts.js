'use strict';

var firstAndPike = {
  location: '1st and Pike',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerSale: 6.3,
  hours: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour : function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  cookiesSold: function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  },
  hourlyTotal : function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }console.log(hourlyTotal);

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    console.log(hourlyTotal);
    return hourlyTotal;
  },
  publishList : function(){
    var hourlyTotal = this.hourlyTotal();

    var para = document.createElement('p');
    var listName = document.createTextNode(this.location);
    para.appendChild(listName);
    var listStart = document.getElementById('listStart');
    listStart.insertBefore(para, document.getElementById('list1'));

    var i = 0;

    while (i < this.hours.length){
      var timeStamp = document.createElement('li');//create list item
      timeStamp.appendChild(document.createTextNode(this.hours[i] + ': ' + hourlyTotal[i] + ' cookies.' ));//set contents
      document.getElementById('list1').appendChild(timeStamp);
      i++;
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + hourlyTotal[15] + ' cookies.'));
    document.getElementById('list1').appendChild(totalCookies);
  }
};

var seatacAirport = {
  location: 'SeaTac Airport',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookiesPerSale: 1.2,
  hours: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour : function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  cookiesSold: function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  },
  hourlyTotal : function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }console.log(hourlyTotal);

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    return hourlyTotal;
  },
  publishList : function(){
    var hourlyTotal = this.hourlyTotal();

    var para = document.createElement('p');
    var listName = document.createTextNode(this.location);
    para.appendChild(listName);
    var listStart = document.getElementById('listStart');
    listStart.insertBefore(para, document.getElementById('list2'));

    var i = 0;

    while (i < this.hours.length){
      var timeStamp = document.createElement('li');//create list item
      timeStamp.appendChild(document.createTextNode(this.hours[i] + ': ' + hourlyTotal[i] + ' cookies.' ));//set contents
      document.getElementById('list2').appendChild(timeStamp);
      i++;
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + hourlyTotal[15] + ' cookies.'));
    document.getElementById('list2').appendChild(totalCookies);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiesPerSale: 3.7,
  hours: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour : function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  cookiesSold: function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  },
  hourlyTotal : function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }console.log(hourlyTotal);

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    return hourlyTotal;
  },
  publishList : function(){
    var hourlyTotal = this.hourlyTotal();

    var para = document.createElement('p');
    var listName = document.createTextNode(this.location);
    para.appendChild(listName);
    var listStart = document.getElementById('listStart');
    listStart.insertBefore(para, document.getElementById('list3'));

    var i = 0;

    while (i < this.hours.length){
      var timeStamp = document.createElement('li');//create list item
      timeStamp.appendChild(document.createTextNode(this.hours[i] + ': ' + hourlyTotal[i] + ' cookies.' ));//set contents
      document.getElementById('list3').appendChild(timeStamp);
      i++;
    }
    var totalCookies = document.createElement('li');
    totalCookies.appendChild(document.createTextNode('Total: ' + hourlyTotal[15] + ' cookies.'));
    document.getElementById('list3').appendChild(totalCookies);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiesPerSale: 2.3,
  hours: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour : function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  cookiesSold: function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  },
  hourlyTotal : function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }console.log(hourlyTotal);

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    return hourlyTotal;
  },
  publishList : function(){
    var para = document.createElement('p');
    var listName = document.createTextNode(this.location);
    para.appendChild(listName);
    var listStart = document.getElementById('listStart');
    listStart.appendChild(para);
  },
};

var alki = {
  location: 'Alki',
  minCustomers : 2,
  maxCustomers : 16,
  avgCookiesPerSale: 4.6,
  hours: ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour : function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  cookiesSold: function(){
    return Math.floor(this.avgCookiesPerSale * this.customersPerHour());
  },
  hourlyTotal : function(){
    var hourlyTotal = [];
    for (var i = 0; i < 15; i++){
      hourlyTotal.push(this.cookiesSold());
    }console.log(hourlyTotal);

    var totalSum = 0;
    for (var j = 0; j < hourlyTotal.length; j++){
      totalSum += hourlyTotal[j];
    }
    hourlyTotal.push(totalSum);
    return hourlyTotal;
  },
  publishList : function(){
    var para = document.createElement('p');
    var listName = document.createTextNode(this.location);
    para.appendChild(listName);
    var listStart = document.getElementById('listStart');
    listStart.appendChild(para);
  },
};
