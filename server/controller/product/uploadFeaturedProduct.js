const FeaturedProduct = require('../../models/FeaturedProducts');

const uploadFeaturedProduct = async (req, res) => {
    try {
        // Extract product details from the request body
        const { name, actualPrice, discountPercentage, discountedPrice, description, imageUrl } = req.body;

        // Create a new product object
        const featuredproduct = new FeaturedProduct({
            name,
            actualPrice,
            discountPercentage,
            discountedPrice,
            description,
            imageUrl
        });

        // Save the product to the database
        await featuredproduct.save();

        // Send a success response to the client
        res.status(200).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        // Handle any errors
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Failed to add product' });
    }
};

module.exports = {
    uploadFeaturedProduct
};
