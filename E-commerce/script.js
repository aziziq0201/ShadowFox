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


// Cart System with Local Storage

let cartCount = localStorage.getItem("cartCount") || 0;

const cartDisplay = document.getElementById("cart-count");

if (cartDisplay) {
    cartDisplay.textContent = cartCount;
}

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        if (cartDisplay) {
            cartDisplay.textContent = cartCount;
        }

        alert("Item added to cart!");
    });
});