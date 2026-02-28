const products = [
{
  id: 1,
  name: "Apple",
  basePrice: 120,
  category: "Fruits",
  image: "assets/images/Apple.jpeg",
  stock: 20,
  weights: ["500g", "1kg"]
},
{
  id: 2,
  name: "Banana",
  basePrice: 60,
  category: "Fruits",
  image: "assets/images/Banana.jpeg",
  stock: 15,
  weights: ["500g", "1kg"]
},
{
  id: 3,
  name: "Carrot",
  basePrice: 80,
  category: "Vegetables",
  image: "assets/images/Carrot.jpeg",
  stock: 10,
  weights: ["500g", "1kg"]
},
{
  id: 4,
  name: "Mango",
  basePrice: 150,
  category: "Fruits",
  image: "assets/images/Mango.jpeg",
  stock: 0,
  weights: ["500g", "1kg"]
},
{
  id: 5,
  name: "Rice",
  basePrice: 60,
  category: "Grains",
  image: "assets/images/Rice.jpeg",
  stock: 30,
  weights: ["500g", "1kg"]
}
];
const productList = document.getElementById("productList");

function calculatePrice(basePrice, weight) {
  if (weight === "500g") return basePrice / 2;
  if (weight === "1kg") return basePrice;
}

function displayProducts(list) {
  if (!productList) return;

  productList.innerHTML = "";

  list.forEach(product => {
    const isOutOfStock = product.stock <= 0;

    productList.innerHTML += `
      <div class="product-card ${isOutOfStock ? "out-stock" : ""}">
        
        <img src="${product.image}" class="product-img">
        
        <h4>${product.name}</h4>
        <p>Stock: ${product.stock > 0 ? product.stock : "Out of Stock"}</p>

        <select onchange="updatePrice(${product.id}, this.value)">
          ${product.weights.map(w => `<option value="${w}">${w}</option>`).join("")}
        </select>

        <p id="price-${product.id}">
          ₹${product.basePrice / 2}
        </p>

        <button 
          onclick="addToCart(${product.id})"
          ${isOutOfStock ? "disabled" : ""}
        >
          ${isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

      </div>
    `;
  });
}

function updatePrice(id, weight) {
  const product = products.find(p => p.id === id);
  const newPrice = calculatePrice(product.basePrice, weight);
  document.getElementById(`price-${id}`).innerText = "₹" + newPrice;
}

displayProducts(products);