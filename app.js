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

var ballardStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(2, 15, 1, 4), new TimeSlot(15, 35, 3, 8), new TimeSlot(12, 31, 5, 12), new TimeSlot(5, 20, 6, 11))

var ballard = new PizzaShop('Ballard', ballardStoreData);


var firstHillStoreData = new StoreData(new TimeSlot(1, 3, 1, 7), new TimeSlot(5, 9, 2, 8), new TimeSlot(2, 13, 1, 6), new TimeSlot(18, 32, 3, 9), new TimeSlot(1, 3, 5, 12), new TimeSlot(8, 20, 6, 16))

var firstHill = new PizzaShop('First Hill', firstHillStoreData);


var theInternationalDistrictStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(5, 15, 0, 4), new TimeSlot(25, 39, 13, 38), new TimeSlot(22, 36, 5, 22), new TimeSlot(5, 21, 16, 31))

var theInternationalDistrict = new PizzaShop('The International District', theInternationalDistrictStoreData);


var southlakeUnionStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(5, 15, 0, 4), new TimeSlot(25, 39, 13, 18), new TimeSlot(22, 36, 5, 22), new TimeSlot(5, 21, 16, 31))

var southlakeUnion = new PizzaShop('Southlake Union', southlakeUnionStoreData);


var georgetownStoreData = new StoreData(new TimeSlot(2, 7, 3, 5), new TimeSlot(3, 8, 3, 9), new TimeSlot(1, 5, 1, 4), new TimeSlot(5, 13, 2, 4), new TimeSlot(22, 41, 15, 42), new TimeSlot(15, 20, 6, 21))

var georgetown = new PizzaShop('Georgetown', georgetownStoreData);

var RavennaStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(2, 15, 1, 4), new TimeSlot(6, 9, 5, 18), new TimeSlot(4, 8, 2, 5), new TimeSlot(2, 4, 3, 11))

var ravenna = new PizzaShop('Ravenna', ravennaStoreData);
