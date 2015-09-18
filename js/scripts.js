function Pizza(pizzaSize, pizzaQuantity){
  this.pizzaSize = pizzaSize;
  this.pizzaQuantity = pizzaQuantity;
  this.toppings = [];
}

function Topping(meat, nonMeat){
  this.meat = meat;
  this.nonMeat = nonMeat;
}

$(function() {
  $("form#quantity-size").submit(function(event) {
    event.preventDefault();

    var selectedSize = $("select#pizzaSize option:selected").val();
    var selectedQuantity = parseInt($("select#quantity option:selected").val();)
  })
})
