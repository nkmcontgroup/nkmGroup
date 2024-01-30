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

function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display === "block" && logo.style.dipslay === "none") {
      menu.style.display = "none";
      logo.style.display = "block";

  } else {
      menu.style.display = "block";
      logo.style.display = "none";
  }
}

let cartItems = [];

function addToCart(button) {
    const item = button.parentNode;
    const itemName = item.dataset.name;
    const itemPrice = parseFloat(item.dataset.price);

    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function viewCart() {
    const cartDiv = document.getElementById('cart');
    const menuSection = document.getElementById('menu');

    if (cartDiv.style.display === 'none') {
        cartDiv.style.display = 'block';
        menuSection.style.display = 'none';
    } else {
        cartDiv.style.display = 'none';
        menuSection.style.display = 'block';
    }
}

function checkout() {
    // Implement checkout logic (e.g., payment gateway integration) here
    alert('Order placed successfully!');
    cartItems = [];
    updateCart();
}
