const mongoose = require('mongoose');

const coverPhotoSchema = new mongoose.Schema({
    imageUrl: {
         type: String, 
         required: true 
        }
});
module.exports = mongoose.model('Cover-Photo', coverPhotoSchema);
