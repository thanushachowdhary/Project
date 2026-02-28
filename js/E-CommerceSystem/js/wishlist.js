const wishlistDiv = document.getElementById("wishlistItems");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

if (wishlist.length === 0) {
    wishlistDiv.innerHTML = "<p>Wishlist is empty</p>";
} else {
    wishlist.forEach(id => {
        const product = products.find(p => p.id === id);

        const div = document.createElement("div");
        div.innerHTML = `
            <p>${product.name} - ₹${product.price}</p>
            <button onclick="moveToCart(${product.id})">Move to Cart</button>
            <button onclick="removeFromWishlist(${product.id})">Remove</button>
        `;
        wishlistDiv.appendChild(div);
    });
}

function moveToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    removeFromWishlist(id);
    alert("Moved to cart!");
    location.reload();
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    location.reload();
}