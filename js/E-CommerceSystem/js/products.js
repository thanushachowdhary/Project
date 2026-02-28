const productList = document.getElementById("productList");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}" width="100">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.stock ? "In Stock" : "Out of Stock"}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(card);
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}
card.innerHTML = `
    <img src="${product.image}" width="100">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <p>${product.stock ? "In Stock" : "Out of Stock"}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
    <button onclick="addToWishlist(${product.id})">Wishlist</button>
`;
function addToWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist!");
}