// const express = require('express');
// const router = express.Router();
// const Project = require('../../models/Product'); // Assuming you have a Project model

// // GET a project by ID
// router.get('/projects/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const project = await Project.findById(id);
//         if (!project) {
//             return res.status(404).json({ message: 'Project not found' });
//         }
//         res.json(project);
//     } catch (error) {
//         console.error('Error fetching project:', error);
//         res.status(500).json({ message: 'An error occurred while retrieving the project' });
//     }
// });

// module.exports = router;



/// using double DB models---->



const express = require('express');
const router = express.Router();
const Project = require('../../models/Product'); // Importing the Product model
const FeaturedProduct = require('../../models/FeaturedProducts'); // Importing the FeaturedProduct model

// GET a project by ID
router.get('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Attempt to find the project using the Project model
        const project = await Project.findById(id);

        if (!project) {
            // If the project is not found using the Project model, try to find it using the FeaturedProduct model
            const featuredProduct = await FeaturedProduct.findById(id);

            if (!featuredProduct) {
                // If the project is not found using either model, send a 404 response
                return res.status(404).json({ message: 'Project not found' });
            }

            // If the project is found using the FeaturedProduct model, send it back as JSON
            return res.json(featuredProduct);
        }

        // If the project is found using the Project model, send it back as JSON
        res.json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the project' });
    }
});

module.exports = router;
