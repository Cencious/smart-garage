
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

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }

    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

onLoadCartNumbers()
$(document).ready();{

const prod = $(".product-page");


prod.hide();

$(".cart").click(
    function (){
        prod.show();
    }
)
}


// $(document).ready();{

//     const card_wrap = $(".services").find('p');
//     const card1 = $(".card1").find("p");
//     const card2 = $(".card2").find("p");
//     const card3 = $(".card3").find("p");
//     const card4 = $(".card4").find("p");
//     const card5 = $(".card5").find("p");
//     const card6 = $(".card6").find("p");




//     card_wrap.hide();

//     $(".card1").click(
//         function () {
//             if (card1.is(":visible")) {
//                 card1.hide();
//             } else {
//                 card1.show();
//             }
//         }

//     )
//     }