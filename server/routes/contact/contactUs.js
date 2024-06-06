const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

// Route to handle form submission
router.post('/contact', async (req, res) => {
  try {
    // Create a new contact instance using the submitted data
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    });
    // Save the contact data to MongoDB
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
