'use strict';
// Sample use of constructor

function PizzaShop(locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
}

PizzaShop.prototype.calcPizzasPerHr = function() {

}

PizzaShop.prototype.makeTableRow = function() {

}

function StoreData(am811, am112, pm25, pm58, pm811, pm112) {
  this.am811 = am811;
  this.am112 = am112;
  this.pm25 = pm25;
  this.pm58 = pm58;
  this.pm811 = pm811;
  this.pm112 = pm112;
}

function TimeSlot(minp, maxp, mind, maxd) {
  this.randomp = randomBetween(minp, maxp);
  this.randond = randomBetween(mind, maxd);
}


function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}





var ballard = new PizzaShop('Ballard', ballardData);
