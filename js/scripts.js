function Pizza(pizzaSize, pizzaQuantity){
  this.pizzaSize = pizzaSize;
  this.pizzaQuantity = pizzaQuantity;
  this.toppings = [];
}
function nonMeat(veg){
  this.veg = veg;
}


function Meat(beef){
  this.beef = beef;
}
nonMeatArray = [];
meatArray = [];



$(document).ready(function(){
  $("#add-nonMeat").click(function() {
    $("#new-nonMeats").append(
      '<div class="new-nonMeat">' + '<label for="nonMeat">Non-Meat Topping</label>' + '<select id="nonMeat" class="form-control nonMeat">' + '<option disabled selected>Pick A Non-Meat</option>' + '<option value="Basil">Basil</option>' + '<option value="Bell Pepper">Bell Pepper</option>' + '<option value="Extra Cheese">Extra Cheese</option>' + '<option value="Garlic">Garlic</option>' + '<option value="Jalapeno">Jalapeno</option>' + '<option value="Musrhoom">Musrhoom</option>' + '<option value="Olive">Olive</option>' + '<option value="Onion">Onion</option>' + '<option value="Pineapple">Pineapple</option>' + '<option value="Fresh Tomato">Fresh Tomato</option>' + '<option value="Sundried Tomato">Sundried Tomato</option>' + '</select>' +
      '</div>' + '</div>'
    );
  });

  $("#add-meat").click(function() {
    $("#new-meats").append(
      '<div class="new-meat">' + '<label for="meat">Meat Topping</label>' + '<select id="meat" class="form-control meat">' + '<option disabled selected>Pick A Meat</option>' + '<option value="Anchovy">Anchovy</option>' + '<option value="Bacon">Bacon</option>' + '<option value="Canadian Bacon">Canadian Bacon</option>' + '<option value="Chicken">Chicken</option>' + '<option value="Ham">Ham</option>' + '<option value="Linguiça">Linguiça</option>' + '<option value="Meatball">Meatball</option>' + '<option value="Pepperoni">Pepperoni</option>' + '<option value="Salami">Salami</option>' + '<option value="Sausage">Sausage</option>' + '</select>' +
      '</div>' + '</div>'
    );
  });

    $("form#quantity-size").submit(function(event) {
      event.preventDefault();


      var selectedSize = $("select#pizzaSize option:selected").val();
      var selectedQuantity = parseInt($("select#quantity option:selected").val());

      var newPizza = new Pizza(selectedSize, selectedQuantity);

      $(".new-nonMeat").each(function() {
        var selectedNonMeat = $(this).find("select.nonMeat option:selected").val();
        if(selectedNonMeat === "Pick A Non-Meat") {
          ""
        } else {
        var newVeg = new nonMeat(selectedNonMeat);
        newPizza.toppings.push(newVeg);
        nonMeatArray.push(selectedNonMeat);
        }
      });

      $(".new-meat").each(function(){
        var selectedMeat = $(this).find("select.meat option:selected").val();
        if (selectedMeat === "Pick A Meat"){
          ""
        } else {
        var newBeef = new Meat(selectedMeat);
        newPizza.toppings.push(newBeef);
        meatArray.push(selectedMeat)
        }
      });

      var pizzaPrice = 8;

      if (newPizza.pizzaSize === "Medium") {
        pizzaPrice += 4;
      } else if (newPizza.pizzaSize === "Large"){
        pizzaPrice += 6;
      } else {
        pizzaPrice;
      }

      //Pizza With Meat Price

      if (newPizza.pizzaSize === "Small"){
        pizzaPrice += (meatArray.length*2);
      }

      else if (newPizza.pizzaSize === "Medium") {
        pizzaPrice += (meatArray.length*3)
      }

      else if (newPizza.pizzaSize === "Large") {
        pizzaPrice += (meatArray.length*4)
      } else {
        alert("How Did You Do That?!")
      }

      //Pizza With Non-Meat Price

      if (newPizza.pizzaSize === "Small"){
        pizzaPrice += (nonMeatArray.length);
      }

      else if (newPizza.pizzaSize === "Medium") {
        pizzaPrice += (nonMeatArray.length*2)
      }

      else if (newPizza.pizzaSize === "Large") {
        pizzaPrice += (nonMeatArray.length*3)
      } else {
        alert("How Did You Do That?!")
      }

      if (newPizza.pizzaQuantity > 1) {
        pizzaPrice *= newPizza.pizzaQuantity;
      } else {
        pizzaPrice;
      }

      alert("your total purchase costs" + " " + pizzaPrice + " dollars")












      if (newPizza.pizzaQuantity > 1) {
        $("ul#pizzas").append("<li><span class='pizza'>" + newPizza.pizzaQuantity + " " + newPizza.pizzaSize + " Pizzas" + "</span></li>")
    } else {
        $("ul#pizzas").append("<li><span class='pizza'>" + newPizza.pizzaQuantity + " " + newPizza.pizzaSize + " " + meatArray.join(", ") + ", " + nonMeatArray.join(", ") + " Pizza" + "</span></li>")
    };

  });



});
