const express = require("express");
const connection = require("../config/database");
const route = express.Router();

route.post("/addcustomer", (req, res) => {
  let data = req.body;

  query = `INSERT INTO customer (customer_name, respective_supplier) VALUES (?, ?)`;

  connection.query(
    query,
    [data.customer_name, data.respective_supplier],
    (err, result) => {
      if (!err) {
        return res.status(200).json({
          message: "Customer Added Successfully!!",
        });
      } else {
        res.status(500).json(err);
      }
    }
  );
});

route.get("/getcustomer/:id", (req, res) => {
  let data = req.params.id;
  query = `SELECT id, customer_name, respective_supplier FROM customer WHERE respective_supplier = ?`;

  connection.query(query, [data], (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(err);
    }
  });
});

module.exports = route;
