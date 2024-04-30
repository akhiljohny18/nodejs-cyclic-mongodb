Product = require("../models/product.model");


//getProducts: Fetches all products from the database.
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// getProduct: Fetches a single product by ID.
const getProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Extract the product ID from the request parameters
        const product = await Product.findById(productId); // Find product by ID

        if (!product) {
            // If product with the given ID is not found, return 404 Not Found status
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product); // Return the product
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle server error
    }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // findByIdAndUpdate returns the original document before the update
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // findByIdAndDelete removes the document matching the ID
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Exports these controller functions.
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}