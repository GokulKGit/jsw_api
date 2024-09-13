require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Supplier CRUD
const supplierControl = require("./constant/supplier_constant");

//customer CRUD
const customerControl = require("./constant/customer_constant");

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This ia API for JSW",
  });
});

app.use("/supplier", supplierControl);
app.use("/customer", customerControl);

//Listening Port
app.listen(3000, () => {
  console.log("Server Connected SuccessFully  " + process.env.APP_PORT);
});
