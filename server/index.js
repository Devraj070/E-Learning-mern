const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userLoginAndRegister = require('./routes/user/userLoginAndRegister');
const dataHandlingRoutes = require('./routes/dataHandling');
const resetPasswordRoute = require('./routes/user/resetPasswordRoutes');
const { logReqRes } = require('./middleware/index')
const authenticateUser = require('./middleware/authentication');
const uploadProduct = require('./routes/product/uploadProduct');
const uploadFeaturedProduct = require('./routes/product/uploadFeaturedProduct');
const getAllProducts = require('./routes/product/getAllProducts');
const getOneProduct = require('./routes/product/singleProductDetails');
const getFeaturedProducts = require('./routes/product/getFeaturedProducts');
const purchaseProduct = require('./routes/product/purchaseProduct')
const ContactUs = require('./routes/contact/contactUs');
const UserCart = require('./routes/cart/UserCart');
const updateProductRoute = require('./routes/product/updateProductRoute');
const DeleteProduct = require('./routes/product/deleteProduct');
const CoverPhoto = require('./routes/coverPhoto');
const videoRouter = require('./routes/product/getVideo')


// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', resetPasswordRoute);
app.use('/auth', userLoginAndRegister);
app.use('/data', authenticateUser, dataHandlingRoutes);
app.use('/api', uploadProduct);
app.use('/api', uploadFeaturedProduct);
app.use('/api', getAllProducts);
app.use('/api', getOneProduct);
app.use('/api', getFeaturedProducts)
app.use('/api', purchaseProduct);
app.use('/api', ContactUs);
app.use('/api/cart', UserCart);
app.use('/api', updateProductRoute)
app.use('/api', DeleteProduct);
app.use('/api', CoverPhoto);
app.use('/api/courses', videoRouter);






// app.use('/files', fileHandlingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route handling
app.get('/example', (req, res) => {
    console.log("hello");
    res.send("hello");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
