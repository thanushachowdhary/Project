
const cartItemsDiv = document.getElementById("cartItems");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Cart is empty</p>";
} else {
    cart.forEach((id, index) => {
        const product = products.find(p => p.id === id);
        total += product.price;

        const div = document.createElement("div");
        div.innerHTML = `
            <p>${product.name} - ₹${product.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(div);
    });

    const totalDiv = document.createElement("h3");
    totalDiv.innerText = "Total: ₹" + total;
    cartItemsDiv.appendChild(totalDiv);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}