console.log("running");

let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
};