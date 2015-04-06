/* Requirements: Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */


// globals
var taxRate = 0.06;
var tipRate = 0.20;

// Diner object constructor

var Diner = function(name) {
  this.name = name;
  this.dishes = [];
};

// Add a new dish to the diner's list of ordered dishes.

Diner.prototype.addDish = function(name, price) {
  this.dishes.push(
    {
      name: name,
      price: price
    }
  );
};

var cashRegister = {
  dinerList: [],
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
    return totalBill * tipRate
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


// TEST
var justin = cashRegister.createDiner("Justin");
var maggie = cashRegister.createDiner("Maggie");
justin.addDish("Pizza", 13.95);
justin.addDish("Beer", 3.95);
maggie.addDish("Burger", 7.95);
maggie.addDish("Wine", 4.95);

cashRegister.printGrandTotal();
cashRegister.printBreakdown();