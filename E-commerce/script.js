// Product Search

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        let value = searchInput.value.toLowerCase();

        products.forEach(product => {
            let name = product.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}


// Cart System

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartDisplay = document.getElementById("cart-count");

if (cartDisplay) {
    cartDisplay.textContent = cart.length;
}

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const productCard = button.parentElement;

        const name = productCard.querySelector("h3").innerText;
        const price = productCard.querySelector("p").innerText;

        const product = {
            name,
            price
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        if (cartDisplay) {
            cartDisplay.textContent = cart.length;
        }

        alert(name + " added to cart!");
    });
});