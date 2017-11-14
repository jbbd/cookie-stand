'use strict';

var firstAndPike = {
  location: '1st and Pike',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerSale: 6.3,
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

  }
};

var seatacAirport = {
  locaton: 'SeaTac Airport',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookiesPerSale: 1.2,
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

  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiesPerSale: 3.7,
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

  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiesPerSale: 2.3,
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

  }
};

var alki = {
  location: 'Alki',
  minCustomers : 2,
  maxCustomers : 16,
  avgCookiesPerSale: 4.6,
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

  }
};
