// const express = require('express');
// const Product = require('../../models/Product');
// const UserCart = require('../../models/UserCart');
// const router = express.Router();

// // DELETE route for deleting a product
// router.delete('/delete-product/:id', async (req, res) => {
//     try {
//         // First, find and delete the product from the products collection
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) {
//             return res.status(404).send('No product found with given ID.');
//         }

//         // If product exists and was deleted, then delete related cart items
//         // Assuming cart items reference product IDs
//         const deletedCartItems = await UserCart.deleteMany({ productId: req.params.id });
        
//         // Send a response indicating the number of cart items also deleted
//         res.status(200).send({
//             message: 'Product deleted successfully.',
//             deletedCartItemsCount: deletedCartItems.deletedCount
//         });
//     } catch (error) {
//         console.error('Delete Product Error:', error);
//         res.status(500).send('Server error during product deletion');
//     }
// });

// module.exports = router;



/// using double DB models---->




const express = require('express');
const Product = require('../../models/Product');
const UserCart = require('../../models/UserCart');
const FeaturedProduct = require('../../models/FeaturedProducts');
const router = express.Router();

// DELETE route for deleting a product
router.delete('/delete-product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // First, try to delete the product from the products collection
        let product = await Product.findByIdAndDelete(id);

        // If not found in products, check in featured products
        if (!product) {
            product = await FeaturedProduct.findByIdAndDelete(id);
            if (!product) {
                // If no product found in either collection, return a 404
                return res.status(404).send('No product found with given ID.');
            }
        }

        // If product existed and was deleted, delete related cart items
        // Assuming cart items reference product IDs
        const deletedCartItems = await UserCart.deleteMany({ productId: id });

        // Send a response indicating successful deletion and the number of cart items deleted
        res.status(200).json({
            message: 'Product deleted successfully.',
            deletedCartItemsCount: deletedCartItems.deletedCount
        });
    } catch (error) {
        console.error('Delete Product Error:', error);
        res.status(500).send('Server error during product deletion');
    }
});

module.exports = router;

