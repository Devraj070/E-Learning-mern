const express = require('express');
const mongoose = require('mongoose');
const FeaturedProduct = require('../../models/FeaturedProducts');
const router = express.Router();



// Retrieve all products
router.get('/featured-products', async (req, res) => {
    try {
        const Featuredproducts = await FeaturedProduct.find();
        res.json(Featuredproducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
