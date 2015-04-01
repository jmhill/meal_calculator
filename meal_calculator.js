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


// Add a percentage tip to the total bill

/* Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */

// Print out a total bill

// Print a breakdown of what each diner owes

