describe('Pizza', function(){
  it("creates a new pizza with the given specifications", function(){
    var testPizza = new Pizza("Small", "2");
    expect(testPizza.pizzaSize).to.eq("Small");
    expect(testPizza.pizzaQuantity).to.eq("2");
    expect(testPizza.toppings).to.eql([]);
  });
});

describe('Topping', function() {
  it("creates new toppings on a pizza", function(){
    var testTopping = new Topping("Pepperoni", "Pineapple");
    expect(testTopping.meat).to.eq("Pepperoni");
    expect(testTopping.nonMeat).to.eq("Pineapple");
  });
});
