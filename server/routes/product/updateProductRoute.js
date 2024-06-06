const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const FeaturedProducts = require('../../models/FeaturedProducts');


// Update Product
router.put('/update-product-details', async (req, res) => {
  const { id, name, actualPrice, discountPercentage, discountedPrice, description, imageUrl } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      actualPrice,
      discountPercentage,
      discountedPrice,
      description,
      imageUrl
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/update-featured-product-details', async (req, res) => {
  const { id, name, actualPrice, discountPercentage, discountedPrice, description, imageUrl } = req.body;

  try {
    const updatedProduct = await FeaturedProducts.findByIdAndUpdate(id, {
      name,
      actualPrice,
      discountPercentage,
      discountedPrice,
      description,
      imageUrl
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
