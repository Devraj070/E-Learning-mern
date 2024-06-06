const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    actualPrice: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    videoUrl: { type: String, required: false } // Add videoUrl field

});

// Create Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
