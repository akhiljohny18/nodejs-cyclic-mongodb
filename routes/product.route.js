//Defines routes for handling product-related requests.
const express =  require("express");
Product = require("../models/product.model")
const router = express.Router();

//Uses controller functions to handle requests.
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controller/product.controller')

router.get('/', getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.post("/",createProduct);

router.delete("/:id", deleteProduct);

//Exports the router.
module.exports = router;