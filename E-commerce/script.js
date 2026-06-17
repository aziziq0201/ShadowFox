// ===============================
// CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");

// Update cart count
function updateCartCount() {

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

updateCartCount();


// ===============================
// TOAST NOTIFICATION
// ===============================

function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ===============================
// ADD TO CART
// ===============================

const addButtons =
    document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".product-card");

        const name =
            card.querySelector("h3").innerText;

        const price =
            card.querySelector("p").innerText;

        const existingProduct =
            cart.find(item => item.name === name);

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name,
                price,
                quantity: 1
            });
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        showToast(`${name} added to cart`);
    });
});


// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput =
    document.getElementById("searchInput");

const products =
    document.querySelectorAll(".product-card");

const productCount =
    document.getElementById("productCount");

function updateVisibleCount() {

    let visible = 0;

    products.forEach(product => {

        if (
            product.style.display !== "none"
        ) {
            visible++;
        }
    });

    if (productCount) {
        productCount.textContent = visible;
    }
}

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        products.forEach(product => {

            const name =
                product.querySelector("h3")
                .textContent
                .toLowerCase();

            const category =
                product.dataset.category
                .toLowerCase();

            if (
                name.includes(value) ||
                category.includes(value)
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });

        updateVisibleCount();
    });
}


// ===============================
// CATEGORY FILTER
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        products.forEach(product => {

            const productCategory =
                product.dataset.category;

            if (
                category === "all" ||
                category === productCategory
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";
            }
        });

        updateVisibleCount();
    });
});


// ===============================
// INITIAL PRODUCT COUNT
// ===============================

updateVisibleCount();