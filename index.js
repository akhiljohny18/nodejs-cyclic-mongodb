const express = require('express')
const app = express();
const Product = require('./models/product.model')
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route");
const path = require('path'); // Import path module

app.use(express.json());

app.use(express.static('public'));
// Define route to render update product page
app.get('/update-product', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'update-product.html')); // Assuming update-product.html is in the public folder
});

//routes
app.use("/api/products",productRoute);


mongoose.connect('mongodb+srv://akhiljohny:akhiljohny@backenddb.mfi5sxt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected!');
        app.listen(3001, () => {
            console.group("server running on 3000")
        })
    })
    .catch(() => {
        console.log("connection failed !");
    })



