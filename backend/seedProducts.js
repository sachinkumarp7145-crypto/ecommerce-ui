const db = require("./db");

const products = [
  { title: "iPhone 14", category: "electronics", price: 799, rating: 4.5 },
  { title: "Samsung TV", category: "electronics", price: 1200, rating: 4.3 },
  { title: "Bluetooth Headphones", category: "electronics", price: 150, rating: 4.1 },
  { title: "Gaming Laptop", category: "electronics", price: 1500, rating: 4.7 },
  { title: "Smart Watch", category: "electronics", price: 250, rating: 4.2 },

  { title: "Men's T-Shirt", category: "fashion", price: 25, rating: 4.0 },
  { title: "Women's Jacket", category: "fashion", price: 80, rating: 4.4 },
  { title: "Running Shoes", category: "fashion", price: 120, rating: 4.6 },
  { title: "Jeans", category: "fashion", price: 60, rating: 4.1 },
  { title: "Sunglasses", category: "fashion", price: 45, rating: 3.9 },

  { title: "Sofa Set", category: "home", price: 900, rating: 4.3 },
  { title: "Dining Table", category: "home", price: 700, rating: 4.2 },
  { title: "Table Lamp", category: "home", price: 40, rating: 4.0 },
  { title: "Wall Clock", category: "home", price: 35, rating: 3.8 },
  { title: "Coffee Maker", category: "home", price: 110, rating: 4.5 },

  { title: "JavaScript Book", category: "books", price: 30, rating: 4.8 },
  { title: "React Guide", category: "books", price: 35, rating: 4.7 },
  { title: "Node.js Handbook", category: "books", price: 28, rating: 4.6 },
  { title: "Clean Code", category: "books", price: 40, rating: 4.9 },
  { title: "System Design Basics", category: "books", price: 32, rating: 4.4 }
];

db.serialize(() => {
  const stmt = db.prepare(`
    INSERT INTO products (title, category, price, rating)
    VALUES (?, ?, ?, ?)
  `);

  products.forEach((product) => {
    stmt.run(product.title, product.category, product.price, product.rating);
  });

  stmt.finalize();
});

console.log("20 demo products inserted successfully.");
