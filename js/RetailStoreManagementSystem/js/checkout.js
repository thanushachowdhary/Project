const summary = document.getElementById("orderSummary");

if (summary) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        summary.innerHTML += `<p>${item.name} - ${item.quantity}</p>`;
    });

    const final = total + total * 0.05;
    document.getElementById("finalTotal").innerText = "Total: ₹" + final;

    localStorage.removeItem("cart");
}