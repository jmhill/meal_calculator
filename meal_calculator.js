// Define Diner Array and Diner Objects

var dinerList = [];

var Diner = function(name) {
  this.name = name;
  this.dishes = [];
  this.dinerBill = 0;
};

// Add dish to diner object

Diner.prototype.addDish = function(name, price) {
  this.dishes.push(
    {
      name: name,
      price: price
    }
  );
  this.dinerBill += price;
};

// Create a new diner object

function createDiner(name) {
  var newDiner = new Diner(name);
  dinerList.push(newDiner);
};

// Total up cost of all diner's meals

function totalMeal(diners) {
  var totalBill = 0;
  for (var i = 0; i < diners.length; i++) {
    totalBill += diners[i].dinerBill;
  }
  return totalBill;
};

// Add a fixed tax percentage to the total bill

function addTax(bill, taxRate) {
  return bill + (bill * taxRate);
}

// Add a percentage tip to the total bill

function addTip(bill, tipRate) {
  return bill + (bill * tipRate);
}

/* Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */



// Print out a total bill

function printCheck(diners, taxRate, tipRate) {
  var subtotal = totalMeal(diners);
  var withTax = addTax(subtotal, taxRate);
  var withTip = addTip(withTax, tipRate);
  console.log(withTip);
}

// Print a breakdown of what each diner owes

