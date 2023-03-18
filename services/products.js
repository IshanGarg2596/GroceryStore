const express = require("express");
const router = express.Router();


// @route  GET api/products/
// @desc   Get all products
// @access  Public
router.get("/", async(req, res) =>{
    res.send("get all products");
});

// @route  GET api/products/category/:type
// @desc   Get products by category
// @access  Public
router.get("/category/:type", async(req, res) =>{
    res.send("get products by category");
});

// @route  GET api/products/:id
// @desc   get products by id
// @access Public
router.get("/:id", async(req, res) =>{
    res.send("get products by id");
});

// @route  POST api/products/
// @desc   Add a product
// @access Private
router.post("/", async(req, res) =>{
    res.send("add a product");
});

// @route  DELETE api/products/:id
// @desc   Delete product by id from database
// @access Private
router.delete("/:id", async(req, res) =>{
    res.send("delete products by id");
});


module.exports = router;