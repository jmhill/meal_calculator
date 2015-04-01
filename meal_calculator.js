// Create a new diner object
var dinerList = [];

var Diner = function(name) {
  this.name = name;
  this.dishes = [];
  this.dinerBill = 0;
};

function createDiner(name) {
  var newDiner = new Diner(name);
  dinerList.push(newDiner);
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

// Total up cost of all diner's meals

// Add a fixed tax percentage to the total bill

// Add a percentage tip to the total bill

/* Split the bill fairly among the diners
 * Each diner pays their own tax
 * Each diner pays an equal share of the tip
 */

// Print out a total bill

// Print a breakdown of what each diner owes

