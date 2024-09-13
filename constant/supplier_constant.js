const express = require("express");
const connection = require("../config/database");
const route = express.Router();

route.post("/addsupplier", (req, res) => {
  let data = req.body;

  query = `INSERT INTO supplier (supplier_name) VALUES (?)`;

  connection.query(query, [data.supplier_name], (err, result) => {
    if (!err) {
      return res.status(200).json({
        message: "Supplier Added Successfully!!",
      });
    } else {
      res.status(500).json(err);
    }
  });
});

route.get("/getsupplier", (req, res) => {
  query = `SELECT id, supplier_name FROM supplier`;

  connection.query(query, [], (err, result) => {
    if (!err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(err);
    }
  });
});

module.exports = route;
