document.addEventListener('DOMContentLoaded', function () { 
    // Function to start Game Day 
    function startGameDay() { console.log('Game Day has started! Enjoy the atmosphere and exciting games.'); }
     // Function to check today's special offer 
     function checkSpecialOffer() 
     { const specialOffer = prompt('Enter today\'s special offer:'); 
     console.log(`Today's special offer: ${specialOffer}`); } 
    // Function for Happy Hour 
    function joinHappyHour() { console.log('It\'s Happy Hour! Enjoy discounted drinks and appetizers.'); } 
    // Function to place an order
     function placeOrder() 
     { const orderItem = prompt('Enter the item you want to order:'); 
     const orderQuantity = prompt('Enter the quantity:'); 
     console.log(`Order placed: ${orderQuantity} ${orderItem}`); } 
     // Event listeners for the buttons 
     document.getElementById('startGameBtn').addEventListener('click', startGameDay); 
     document.getElementById('specialOfferBtn').addEventListener('click', checkSpecialOffer); 
     document.getElementById('happyHourBtn').addEventListener('click', joinHappyHour); 
     document.getElementById('orderFoodBtn').addEventListener('click', placeOrder); });
     var slideIndex = 0;
carousel();
/*java script for carouel on home page*/



var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 2000); // Change image every 2 seconds
}
/*java script for collapsible on events page*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}