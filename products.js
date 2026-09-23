const products = [
  {
    id: 1,
    name: "Premium Acid Wash Drop Shoulder T-Shirt",
    category: "T-Shirts",
    price: 799,
    oldPrice: 899,
    image: "",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Grey"],
    stock: true,
    description: "Premium quality acid wash drop shoulder T-Shirt. Comfortable, stylish and perfect for everyday wear."
  },
  {
    id: 2,
    name: "Premium Quality Digital Print Shirt",
    category: "Shirts",
    price: 675,
    oldPrice: 750,
    image: "",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    stock: true,
    description: "Premium quality digital print half sleeve shirt with comfortable fabric and stylish design."
  },
  {
    id: 3,
    name: "Premium Fashion Pants",
    category: "Pants",
    price: 1099,
    oldPrice: 1199,
    image: "",
    sizes: ["30", "32", "34", "36"],
    colors: ["Black", "Blue"],
    stock: true,
    description: "Modern fashion pants designed for comfort, style and everyday use."
  },
  {
    id: 4,
    name: "Premium Drop Shoulder T-Shirt",
    category: "T-Shirts",
    price: 699,
    oldPrice: 799,
    image: "",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White"],
    stock: true,
    description: "Premium drop shoulder T-Shirt with a modern oversized fit."
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem("fxCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("fxCart", JSON.stringify(cart));
}

function addToCart(productId, size = "", color = "") {
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const cart = getCart();

  const existing = cart.find(
    item =>
      item.id === productId &&
      item.size === size &&
      item.color === color
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity: 1
    });
  }

  saveCart(cart);

  alert("Product added to cart!");
}

function cartCount() {
  const cart = getCart();

  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

function cartTotal() {
  const cart = getCart();

  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
