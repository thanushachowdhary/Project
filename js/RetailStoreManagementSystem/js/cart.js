function addToCart(id) {
    const product = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// cart page display
const cartItemsDiv = document.getElementById("cartItems");

if (cartItemsDiv) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        cartItemsDiv.innerHTML += `
            <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
        `;
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById("subtotal").innerText = "Subtotal: ₹" + subtotal;
    document.getElementById("tax").innerText = "Tax (5%): ₹" + tax;
    document.getElementById("total").innerText = "Total: ₹" + total;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (product.stock <= 0) {
    alert("Product Out of Stock!");
    return;
  }

  const weightSelect = document.querySelector(
    `select[onchange="updatePrice(${id}, this.value)"]`
  );

  const selectedWeight = weightSelect.value;
  const price = calculatePrice(product.basePrice, selectedWeight);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id: product.id,
    name: product.name,
    weight: selectedWeight,
    price: price,
    quantity: 1
  });

  product.stock--;
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}