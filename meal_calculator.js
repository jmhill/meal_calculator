var dinerList = [];
var taxRate = 0.06;
var tipRate = 0.20;

// Diner object constructor

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
  return newDiner;
};

// Total up cost of all diner's meals

function subtotalOfMeal(diners) {
  var subtotalBillAmount = 0;
  for (var i = 0; i < diners.length; i++) {
    subtotalBillAmount += diners[i].dinerBill;
  }
  return subtotalBillAmount;
};

// Add a fixed tax percentage to the total bill
// TODO: Refactor to attach tax rate directly to individual diner objects, then tax can totaled separately.

function addTax(bill, taxRate) {
  return bill + (bill * taxRate);
}

// Add a percentage tip to the total bill
// TODO: Refactor to simply get tip amount, then tip can either be added to bill or split among number of diners.

function addTip(bill, tipRate) {
  return bill + (bill * tipRate);
}

/* Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */



// Print out a total bill

function printCheck(diners, taxRate, tipRate) {
  var subtotal = subtotalOfMeal(diners);
  var withTax = addTax(subtotal, taxRate);
  var withTip = addTip(withTax, tipRate);
  console.log(withTip.toFixed(2));
}

// Print a breakdown of what each diner owes


// TEST
var justin = createDiner("Justin");
var maggie = createDiner("Maggie");
justin.addDish("Pizza", 13.95);
justin.addDish("Beer", 3.95);
maggie.addDish("Burger", 7.95);
maggie.addDish("Wine", 4.95);
// total should be 39.18

printCheck(dinerList, taxRate, tipRate);