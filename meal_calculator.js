// globals
var dinerList = [];
var taxRate = 0.06;
var tipRate = 0.20;

// Diner object constructor


var Diner = function(name) {
  this.name = name;
  this.dishes = [];
};

// Add dish to diner object

Diner.prototype.addDish = function(name, price) {
  this.dishes.push(
    {
      name: name,
      price: price
    }
  );
};

// Create a new diner object

function createDiner(name) {
  var newDiner = new Diner(name);
  dinerList.push(newDiner);
  return newDiner;
};

// Calculate the bill of an individual diner, including tax.

function calculateDinerBill(diner) {
  var dinerBill = 0;
  for (var i = 0; i < diner.dishes.length; i++) {
    dinerBill += diner.dishes[i]["price"];
  }
  return addTax(dinerBill, taxRate);
}

// Total up cost of all diner's meals (tax included previously).

function calculateTotalBill(diners) {
  var total = 0;
  for (var i = 0; i < diners.length; i++) {
    total += calculateDinerBill(diners[i]);
  }
  return total;
};

// Add a fixed tax percentage to a bill

function addTax(bill, taxRate) {
  return bill + (bill * taxRate);
}

// Add a percentage tip to the total bill

function calculateTip(totalBill, tipRate) {
  return totalBill * tipRate
}

/* Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */



// Print out a total bill

function printGrandTotal() {
  var base = calculateTotalBill(dinerList);
  var tip = calculateTip(base, tipRate);
  var total = base + tip;
  console.log("The grand total for the table is $" + total.toFixed(2) + ".");
}

// Print a breakdown of what each diner owes

function printBreakdown() {
  var tip = calculateTip(calculateTotalBill(dinerList), tipRate);
  var tipPerPerson = (tip / dinerList.length);
  var amountOwedMessage = "";

  for (var i=0; i < dinerList.length; i++) {
    var base = calculateDinerBill(dinerList[i]);
    var amountOwed = base + tipPerPerson;
    amountOwedMessage += dinerList[i].name + " owes $" + amountOwed.toFixed(2) + ".\n"; 
  }
  console.log(amountOwedMessage);
}

// TEST
var justin = createDiner("Justin");
var maggie = createDiner("Maggie");
justin.addDish("Pizza", 13.95);
justin.addDish("Beer", 3.95);
maggie.addDish("Burger", 7.95);
maggie.addDish("Wine", 4.95);
// total should be 39.18
// justin should be 22.43
// maggie should be 16.75

printGrandTotal();
printBreakdown();