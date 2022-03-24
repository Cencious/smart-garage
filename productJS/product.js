
let carts = document.querySelectorAll(".add-cart");

let products = [{
    name: "suspension",
    tag: "car suspension",
    image: "suspension.jpg",
    price: 10000,
    inCart: 0
},

{
    name: "car wash",
    tag: "car-wash",
    image: "car-wash.jpg",
    price: 10000,
    inCart: 0
},

{
    name: "engine",
    tag: "car engine",
    image: "engine.jpeg",
    price: 100000,
    inCart: 0
},

{
    name: "lights",
    tag: "car lights",
    image: "light2.jpeg",
    price: 10000,
    inCart: 0
},

{
    name: "seat",
    tag: "car seat",
    image: "car-seat.jpeg",
    price: 10000,
    inCart: 0
},

{
    name: "door",
    tag: "red door",
    image: "red-door.jpeg",
    price: 10000,
    inCart: 0
},

{
    name: "brakes",
    tag: "pads brakes",
    image: "break-pads.jpeg",
    price: 10000,
    inCart: 0
},

{
    name: "bonnet",
    tag: "car bonnet",
    image: "bonnet.jpeg",
    price: 10000,
    inCart: 0
},


]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
};

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    };
    setItems(product);
};