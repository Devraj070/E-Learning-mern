require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp',
    // Other environment variables...
};
