// JavaScript for handling "Add to Cart" button actions

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
    console.log('Current cart contents:', cart);
}

// Event listeners for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.food button').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemName = event.target.previousElementSibling.previousElementSibling.textContent;
            const itemPrice = parseFloat(event.target.previousElementSibling.textContent.replace('$', ''));
            addToCart(itemName, itemPrice);
        });
    });
});

