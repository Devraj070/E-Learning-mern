const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const CoverPhoto = require('../models/CoverPhoto');

router.get('/cover', async (req, res) => {
    try {
        const cover = await CoverPhoto.find();
        res.json(cover);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;