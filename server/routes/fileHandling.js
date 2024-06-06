// // const express = require('express');
// // const router = express.Router();
// // const multer = require('multer');
// // const productUploadController = require('../controller/Upload');




// // // Set up multer for file upload
// // const storage = multer.diskStorage({
// //     destination: function(req, file, cb) {
// //         cb(null, 'uploads/');
// //     },
// //     filename: function(req, file, cb) {
// //         cb(null, Date.now() + '-' + file.originalname);
// //     }
// // });
// // const upload = multer({ storage: storage });

// // // Route to handle product insertion
// // router.post('/upload-product-details', upload.single('image'), productUploadController.addProduct);





// // // Routes for file handling
// // router.post('/upload', (req, res) => {
// //     // File upload logic
// // });







// // router.get('/download/:fileId', (req, res) => {
// //     // File download logic
// // });

// // module.exports = router;



// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const productUploadController = require('../controller/Upload');
// const fs = require('fs');
// const path = require('path');

// // Ensure upload directory exists
// const uploadDir = path.join(__dirname, '..', 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set up multer for file upload
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage: storage }).single('image');

// // Route to handle product insertion
// router.post('/upload-product-details', (req, res) => {
//     upload(req, res, function (error) {
//         if (error) {
//             // Handle errors during file upload
//             return res.status(500).json({ message: "Error uploading file.", error: error.message });
//         }
//         // Proceed with controller logic after successful upload
//         productUploadController.addProduct(req, res);
//     });
// });

// // Placeholder for simple file upload without further processing
// router.post('/upload', upload, (req, res) => {
//     res.send('File uploaded successfully');
// });

// Example route for downloading files
router.get('/download/:fileId', (req, res) => {
    const fileId = req.params.fileId;
    const filePath = path.join(uploadDir, fileId);
    res.download(filePath, (err) => {
        if (err) {
            return res.status(500).send({ message: "File not found." });
        }
    });
});

module.exports = router;
