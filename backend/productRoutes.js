const express = require("express");
const router = express.Router();
const db = require("./db");

/*
Query Params Supported:

?page=1
&limit=8
&category=electronics
&minPrice=100
&maxPrice=1000
&minRating=4
&sort=price_asc | price_desc | rating_desc | latest
*/

router.get("/", (req, res) => {
  let {
    page = 1,
    limit = 8,
    category,
    minPrice,
    maxPrice,
    minRating,
    sort
  } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);
  const offset = (page - 1) * limit;

  let query = "SELECT * FROM products WHERE 1=1";
  let countQuery = "SELECT COUNT(*) as total FROM products WHERE 1=1";
  let params = [];

  // Filtering
  if (category) {
    query += " AND category = ?";
    countQuery += " AND category = ?";
    params.push(category);
  }

  if (minPrice) {
    query += " AND price >= ?";
    countQuery += " AND price >= ?";
    params.push(minPrice);
  }

  if (maxPrice) {
    query += " AND price <= ?";
    countQuery += " AND price <= ?";
    params.push(maxPrice);
  }

  if (minRating) {
    query += " AND rating >= ?";
    countQuery += " AND rating >= ?";
    params.push(minRating);
  }

  // Sorting
  if (sort === "price_asc") query += " ORDER BY price ASC";
  else if (sort === "price_desc") query += " ORDER BY price DESC";
  else if (sort === "rating_desc") query += " ORDER BY rating DESC";
  else if (sort === "latest") query += " ORDER BY createdAt DESC";

  query += " LIMIT ? OFFSET ?";
  const finalParams = [...params, limit, offset];

  // Get total count for pagination
  db.get(countQuery, params, (err, countResult) => {
    if (err) return res.status(500).json({ error: err.message });

    db.all(query, finalParams, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        data: rows,
        pagination: {
          total: countResult.total,
          page,
          limit,
          totalPages: Math.ceil(countResult.total / limit)
        }
      });
    });
  });
});

module.exports = router;
