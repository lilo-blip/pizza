var total=0;
$(document).ready(function() {
  $(".pizza input").click(function() {
    // var total=0;
    $("input:checked").each(function(index,item) {
      total+=parseFloat(item.value);
    });
    $(".total").text(total);

    // $('.crustc').click(function() {
      
    //   $('.crustc').not(this).prop('checked', false);
    //   alert("You can only select one crust.");
      
    // });

    // $('.sizec').click(function() {
      
    //   $('.sizec').not(this).prop('checked', false);
    //   alert("You can only select one size.")
      
    // });
  });

  $(".delivery").click(function() {
    var delivery = document.getElementById("delivery")
    prompt("Enter your location")
    $("p").show();
    alert("Your order will be delivered to your location ;)")
  });

  $(".pickup").click(function() {
    $("#del").hide();
  });
});



function submitForm() {
  var delivery = $("input#delivery").val();
  var deliveryInteger = parseInt(delivery);
  var totalInteger = parseInt(total);
  var pizzaNumber = $("input#pnumber").val();
  var totalAmount = totalInteger * pizzaNumber;
  if(document.getElementById("delivery").checked){
  var checkout = deliveryInteger + totalAmount;
  alert(checkout + "number of pizzas" + pizzaNumber);
  }
  if(document.getElementById("pickup").checked){
    var checkout = totalAmount;
    alert("Number of pizzas " + pizzaNumber + "," + checkout);
    }
} 
