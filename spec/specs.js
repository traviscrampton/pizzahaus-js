describe('Pizza', function(){
  it("creates a new pizza with the given specifications", function(){
    var testPizza = new Pizza("Small", "2");
    expect(testPizza.pizzaSize).to.eq("Small");
    expect(testPizza.pizzaQuantity).to.eq("2");
    expect(testPizza.toppings).to.eql([]);
  });
});

describe('nonMeat', function() {
  it("creates new non-meat option", function(){
    var testNonMeat = new nonMeat("Pineapple");
    expect(testNonMeat.veg).to.eq("Pineapple");
  });
});

describe('meat', function() {
  it("creates new non-meat option", function(){
    var testMeat = new Meat("Pepperoni");
    expect(testMeat.beef).to.eq("Pepperoni")
  });
});
