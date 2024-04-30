const mongoose = require('mongoose');


//Defines the mongoose schema for the product.
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter product name"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        require: false
    },
},
    {
        timestamps: true,
    }
);
//Creates a mongoose model based on the schema.
const product = mongoose.model("products", ProductSchema);

//Exports the product model.
module.exports = product