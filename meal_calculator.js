// globals
// TODO: Get rid of these globals
var taxRate = 0.06; // This should actually be initialized with the Point of Sale
var tipRate = 0.20; // The tip rate should be accepted as a parameter of the check payment process

// Diner object constructor

function Diner (name) {
  this.name = name;
  this.dishes = [];
  // TODO: table assignment
};

/* Menu object
list of available dishes
*/
function Menu (menuItems) {
  this.menuItems = menuItems ? menuItems : [];
};

Menu.prototype.addItem = function(name, price) {
  this.menuItems.push(
    {
      name: name,
      price: price
    }
  );
  return this;
};

/* Table object
id: 
total: int
diner name: []
waiter: obj
*/

function Table (idNumber, waiter) {
  this.idNumber = idNumber;
  this.total = 0;
  this.diners = [];
  this.waiter = waiter;
};

Table.prototype.addDiner = function (dinerName) {
  this.diners.push(dinerName);
};

/* Waiter object
name:
tables: []
tip:
*/

function Waiter (name) {
  this.name = name;
  this.tables = [];
  this.tip = 0;
};

// TODO: waiter will initialize all of the different table/check objects that we need.
Waiter.prototype.initialize = function () {

};

// This will be the new version of the "Cash register"
// It will be initialized with the:
// menu
// waiters
// table/check counter
// 
function PointOfSale () {};

/* This all needs to be redone:
  The only things that need to be in cash register/pos are
  A list of waiters
  a list of tables
  a menu
*/
/*
var cashRegister = {
  // Add a new diner to the list of people dining.
  createDiner: function (name) {
    var newDiner = new Diner(name);
    cashRegister.dinerList.push(newDiner);
    return newDiner;
  },
  // Calculate the bill of an individual diner, *including tax.*
  calculateDinerBill: function (diner) {
    var dinerBill = 0;
    for (var i = 0; i < diner.dishes.length; i++) {
      dinerBill += diner.dishes[i]["price"];
    }
    return cashRegister.addTax(dinerBill, taxRate);
  },
  // Total up cost of all diner's meals (tax included previously).
  calculateTotalBill: function (diners) {
    var total = 0;
    for (var i = 0; i < diners.length; i++) {
      total += cashRegister.calculateDinerBill(diners[i]);
    }
    return total;
  },
  // Add a fixed tax percentage to a bill
  addTax: function (bill, taxRate) {
    return bill + (bill * taxRate);
  },
  // Add a percentage tip to the total bill
  calculateTip: function (totalBill, tipRate) {
    return totalBill * tipRate;
  },
  // Print out the total bill for the table.
  printGrandTotal: function () {
    var dinerList = cashRegister.dinerList;
    var base = cashRegister.calculateTotalBill(dinerList);
    var tip = cashRegister.calculateTip(base, tipRate);
    var total = base + tip;
    console.log("The grand total for the table is $" + total.toFixed(2) + ".");
  },
  // Print a breakdown of what each diner owes.
  printBreakdown: function () {
    var dinerList = cashRegister.dinerList;
    var tip = cashRegister.calculateTip(cashRegister.calculateTotalBill(dinerList), tipRate);
    var tipPerPerson = (tip / dinerList.length);
    var amountOwedMessage = "";
      for (var i=0; i < dinerList.length; i++) {
        var base = cashRegister.calculateDinerBill(dinerList[i]);
        var amountOwed = base + tipPerPerson;
        amountOwedMessage += dinerList[i].name + " owes $" + amountOwed.toFixed(2) + ".\n"; 
      }
    console.log(amountOwedMessage);
  } 
}
*/


// TODO: Redo testing after code rewrite
/*
var justin = cashRegister.createDiner("Justin");
var maggie = cashRegister.createDiner("Maggie");
justin.addDish("Pizza", 13.95);
justin.addDish("Beer", 3.95);
maggie.addDish("Burger", 7.95);
maggie.addDish("Wine", 4.95);

cashRegister.printGrandTotal();
cashRegister.printBreakdown();
*/
exports.menu = Menu;