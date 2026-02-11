const db = require("./db");

const products = [
  { title: "iPhone 14", category: "electronics", price: 799, rating: 4.5, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Samsung TV", category: "electronics", price: 1200, rating: 4.3, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Bluetooth Headphones", category: "electronics", price: 150, rating: 4.1, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Gaming Laptop", category: "electronics", price: 1500, rating: 4.7, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Smart Watch", category: "electronics", price: 250, rating: 4.2, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },

  { title: "Men's T-Shirt", category: "fashion", price: 25, rating: 4.0, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Women's Jacket", category: "fashion", price: 80, rating: 4.4, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Running Shoes", category: "fashion", price: 120, rating: 4.6, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Jeans", category: "fashion", price: 60, rating: 4.1, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Sunglasses", category: "fashion", price: 45, rating: 3.9, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },

  { title: "Sofa Set", category: "home", price: 900, rating: 4.3, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Dining Table", category: "home", price: 700, rating: 4.2, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Table Lamp", category: "home", price: 40, rating: 4.0, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Wall Clock", category: "home", price: 35, rating: 3.8, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Coffee Maker", category: "home", price: 110, rating: 4.5, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },

  { title: "JavaScript Book", category: "books", price: 30, rating: 4.8, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "React Guide", category: "books", price: 35, rating: 4.7, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Node.js Handbook", category: "books", price: 28, rating: 4.6, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "Clean Code", category: "books", price: 40, rating: 4.9, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" },
  { title: "System Design Basics", category: "books", price: 32, rating: 4.4, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" }
];

db.serialize(() => {
  const stmt = db.prepare(`
    INSERT INTO products (title, category, price, rating, image)
    VALUES (?, ?, ?, ?, ?)
  `);

  products.forEach((product) => {
    stmt.run(product.title, product.category, product.price, product.rating, product.image);
  });

  stmt.finalize();
});

console.log("20 demo products inserted successfully.");
