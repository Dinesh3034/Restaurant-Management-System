// Cart array to store added items
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    console.log(`${itemName} added to cart. Price: $${itemPrice}`);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear previous items

    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Event listeners for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-item button').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemElement = event.target.parentElement;
            const itemName = itemElement.querySelector('.item-name').textContent;
            const itemPrice = parseFloat(itemElement.querySelector('.item-price').textContent.replace('$', ''));
            addToCart(itemName, itemPrice);
        });
    });
});

// Function to handle checkout
function checkout() {
    alert(`Your total is $${document.getElementById('total-price').textContent.split('$')[1]}`);
    cart = [];
    updateCartDisplay();
}
