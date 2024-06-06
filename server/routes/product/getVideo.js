const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// Route to fetch course videos by ID
router.get('/:id/videos', async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Log the product data
        console.log('Fetched product:', product);

        // Assuming videoUrl is a string, return it in an array
        res.json([{ title: 'Course Video', videoUrl: product.videoUrl }]);
    } catch (error) {
        console.error('Error fetching course videos:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
