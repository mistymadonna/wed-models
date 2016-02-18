'use strict';
// Sample use of constructor

function PizzaShop(locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
}

function tableRowMaker(tableId, inputArray) {
  // make a table row
  var trEl = document.createElement('tr');
  // iterate thru array
  for(var i = 0; i < inputArray.length; i++) {
    var tdEl = document.createElement('td'); //create
    tdEl.textContent = inputArray[i]; // content
    trEl.appendChild(tdEl); // add cell to row
  }

  var tableEl = document.getElementById(tableId)

  tableEl.appendChild(trEl); // add row to table
}

PizzaShop.prototype.makeTableRow = function() {
  tableRowMaker(this.locationName, [
    'Time',
    'Random Pizza/hr',
    'Random Delivery/hr',
  ]);
  tableRowMaker(this.locationName, [
    '8am-11am',
    this.storeData.am811.randomp,
    this.storeData.am811.randomd,
  ]);
  tableRowMaker(this.locationName, [
    '11am-2pm',
    this.storeData.am112.randomp,
    this.storeData.am112.randomd,
  ]);
  tableRowMaker(this.locationName, [
    '2pm-5pm',
    this.storeData.pm25.randomp,
    this.storeData.pm25.randomd,
  ]);
  tableRowMaker(this.locationName, [
    '5pm-8pm',
    this.storeData.pm58.randomp,
    this.storeData.pm58.randomd,
  ]);
  tableRowMaker(this.locationName, [
    '8pm-11pm',
    this.storeData.pm811.randomp,
    this.storeData.pm811.randomd,
  ]);
  tableRowMaker(this.locationName, [
    '11pm-2am',
    this.storeData.pm112.randomp,
    this.storeData.pm112.randomd,
  ]);
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
  this.randomd = randomBetween(mind, maxd);
}

function randomBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var ballardStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(2, 15, 1, 4), new TimeSlot(15, 35, 3, 8), new TimeSlot(12, 31, 5, 12), new TimeSlot(5, 20, 6, 11))
var ballard = new PizzaShop('ballard', ballardStoreData);
ballard.makeTableRow()

var firstHillStoreData = new StoreData(new TimeSlot(1, 3, 1, 7), new TimeSlot(5, 9, 2, 8), new TimeSlot(2, 13, 1, 6), new TimeSlot(18, 32, 3, 9), new TimeSlot(1, 3, 5, 12), new TimeSlot(8, 20, 6, 16))
var firstHill = new PizzaShop('firstHill', firstHillStoreData);
firstHill.makeTableRow()

var theInternationalDistrictStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(5, 15, 0, 4), new TimeSlot(25, 39, 13, 38), new TimeSlot(22, 36, 5, 22), new TimeSlot(5, 21, 16, 31))
var theInternationalDistrict = new PizzaShop('theInternationalDistrict', theInternationalDistrictStoreData);
theInternationalDistrict.makeTableRow()

var southlakeUnionStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(5, 15, 0, 4), new TimeSlot(25, 39, 13, 18), new TimeSlot(22, 36, 5, 22), new TimeSlot(5, 21, 16, 31))
var southlakeUnion = new PizzaShop('southlakeUnion', southlakeUnionStoreData);
southlakeUnion.makeTableRow()

var georgetownStoreData = new StoreData(new TimeSlot(2, 7, 3, 5), new TimeSlot(3, 8, 3, 9), new TimeSlot(1, 5, 1, 4), new TimeSlot(5, 13, 2, 4), new TimeSlot(22, 41, 15, 42), new TimeSlot(15, 20, 6, 21))
var georgetown = new PizzaShop('georgetown', georgetownStoreData);
georgetown.makeTableRow()

var ravennaStoreData = new StoreData(new TimeSlot(0, 4, 0, 4), new TimeSlot(0, 7, 0, 4), new TimeSlot(2, 15, 1, 4), new TimeSlot(6, 9, 5, 18), new TimeSlot(4, 8, 2, 5), new TimeSlot(2, 4, 3, 11))
var ravenna = new PizzaShop('ravenna', ravennaStoreData);
ravenna.makeTableRow()


var Comment  = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearChatList = document.getElementById('clear-chat-list');
var allComments = [];


var renderAllComments = function() {
  chatList.innerHTML = '';
  allComments.forEach(function(pepperoni) {
    chatList.appendChild(pepperoni.render());
  });
};

function doCommentSubmit(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.says.value || !event.target.who.value) {Rimg
    return alert('You gotta put something here, mamma mia!');
  }

  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  if (commenter === 'Ballard') {
    remark = 'I\'m fancy!!!!';
  }

  var newComment = new Comment(commenter, remark);

  console.log('Comment by ' + event.target.who.value + ' at ' + Date());
  event.target.who.value = null;
  event.target.says.value = null;

  allComments.push(newComment);
  renderAllComments();
};


chatForm.addEventListener('submit', doCommentSubmit);

clearChatList.addEventListener('click', function() {
  console.log('Bye, Felicia!');
  chatList.innerHTML = '';
  allComments = [];
});
