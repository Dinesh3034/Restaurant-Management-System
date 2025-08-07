const product = [
    {
        id: 0,
        image: 'image/1.png.jpg',
        title: 'Orange juice',
        price: 50,
    },
    {
        id: 1,
        image: 'image/2.png.jpg',
        title: 'Burger',
        price: 160,
    },
    {
        id: 2,
        image: 'image/3.png.jpg',
        title: 'Pizza',
        price: 230,
    },
    {
        id: 3,
        image: 'image/4.png.jpg',
        title: 'Dhosa',
        price: 50,
    }
];


const categories = [...new Set(product.map(item => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        `<button onclick='addtocart(${i++})'>Add to cart</button>`+
        `</div>
        </div>`
    );
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            var {image, title, price} = items;
            total += price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <button class='purchase-btn' id='purchase-${index}' onclick='purchaseItem(${index})'>Purchase</button>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

// Function to handle purchase action
function purchaseItem(index) {
    const purchaseBtn = document.getElementById(`purchase-${index}`);
    purchaseBtn.innerText = "Purchased";
    purchaseBtn.disabled = true; // Disable the button after purchase
}
