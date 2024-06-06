const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    actualPrice: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

// Create Product model
const FeaturedProduct = mongoose.model('Featured-Product', productSchema);

module.exports = FeaturedProduct;
