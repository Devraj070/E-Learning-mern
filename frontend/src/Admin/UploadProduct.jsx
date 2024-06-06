// import React, { useState } from 'react';
// import axios from 'axios';

// function UploadProduct() {
//     const [name, setName] = useState('');
//     const [actualPrice, setActualPrice] = useState('');
//     const [discountPercentage, setDiscountPercentage] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);


//     // Calculate discounted price based on actual price and discount percentage
//     const discountedPrice = (parseFloat(actualPrice) * (100 - parseFloat(discountPercentage)) / 100).toFixed(2);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log("Submitting form...");

//         const formData = new FormData();
//         formData.append('file', image);
//         formData.append('upload_preset', 'Project-images');
//         formData.append('name', name); 
//         formData.append('actualPrice', actualPrice);
//         formData.append('discountPercentage', discountPercentage);
//         formData.append('discountedPrice', discountedPrice);
//         formData.append('description', description);

//         try {
//             const response = await axios.post('https://api.cloudinary.com/v1_1/dc7vztzup/image/upload', formData);
//             console.log("Image uploaded:", response.data);

//             if (response.status === 200) {
//                 const imageUrl = response.data.secure_url;
//                 const productData = {
//                     name: name,
//                     actualPrice: actualPrice,
//                     discountPercentage: discountPercentage,
//                     discountedPrice: discountedPrice,
//                     description: description,
//                     imageUrl: imageUrl
//                 };

//                 const productResponse = await axios.post('http://localhost:3001/api/upload-product-details', productData);
//                 console.log("Product response:", productResponse.data);

//                 if (productResponse.status === 200) {
//                     alert('Product added successfully!');
//                     // Clear all fields after successful submission
//                     setName('');
//                     setActualPrice('');
//                     setDiscountPercentage('');
//                     setDescription('');
//                     setImage(null);
//                 } else {
//                     alert('Failed to add product');
//                 }
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Error adding product');
//         }
//     };


//     const handleNameChange = (event) => setName(event.target.value);
//     const handleActualPriceChange = (event) => setActualPrice(event.target.value);
//     const handleDiscountPercentageChange = (event) => setDiscountPercentage(event.target.value);
//     const handleDescriptionChange = (event) => setDescription(event.target.value);
//     const handleImageChange = (event) => setImage(event.target.files[0]);

//     return (
//         <div className="max-w-4xl mx-auto my-4 bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
//             <h2 className="text-xl font-bold mb-4 text-gray-800">Add Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Name:
//                         <input type="text" value={name} onChange={handleNameChange}
//                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//                     </label>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Actual Price:
//                         <input type="number" value={actualPrice} onChange={handleActualPriceChange}
//                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//                     </label>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Discount Percentage:
//                         <input type="number" value={discountPercentage} onChange={handleDiscountPercentageChange}
//                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//                     </label>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Discounted Price:
//                         <input type="text" value={discountedPrice} readOnly
//                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//                     </label>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Description:
//                         <textarea value={description} onChange={handleDescriptionChange}
//                                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//                     </label>
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                         Image (Leave blank to keep current image):
//                         <input type="file" onChange={handleImageChange}
//                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*"/>
//                     </label>
//                 </div>
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                     Add Product
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default UploadProduct;
import React, { useState } from 'react';
import axios from 'axios';

function UploadProduct() {
    const [name, setName] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [videoUrl, setVideoUrl] = useState(''); // New state for the video URL

    // Calculate discounted price based on actual price and discount percentage
    const discountedPrice = parseFloat(actualPrice) * (100 - parseFloat(discountPercentage)) / 100;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting form...");

        const formData = new FormData();
        if (image) {
            formData.append('file', image);
            formData.append('upload_preset', 'Project-images');
            // Upload image to Cloudinary
            try {
                const imageUploadResponse = await axios.post('https://api.cloudinary.com/v1_1/dc7vztzup/image/upload', formData);
                console.log("Image uploaded:", imageUploadResponse.data);
                if (imageUploadResponse.status === 200) {
                    handleProductUpload(imageUploadResponse.data.secure_url);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Error uploading image');
            }
        } else {
            handleProductUpload(''); // No image, pass empty URL
        }
    };

    // Handle product upload to the server
    const handleProductUpload = async (imageUrl) => {
        const productData = {
            name,
            actualPrice,
            discountPercentage,
            discountedPrice,
            description,
            imageUrl,
            videoUrl
        };
        try {
            const productResponse = await axios.post('http://localhost:3001/api/upload-product-details', productData);
            console.log("Product response:", productResponse.data);
            if (productResponse.status === 200) {
                alert('Product added successfully!');
                resetForm();
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product');
        }
    };

    // Reset all form fields
    const resetForm = () => {
        setName('');
        setActualPrice('');
        setDiscountPercentage('');
        setDescription('');
        setImage(null);
        setVideoUrl('');
    };

    return (
        <div className="max-w-4xl mx-auto my-4 bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Actual Price:
                        <input type="number" value={actualPrice} onChange={(e) => setActualPrice(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Percentage:
                        <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discounted Price:
                        <input type="text" value={discountedPrice.toFixed(2)} readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image (Leave blank to keep current image):
                        <input type="file" onChange={(e) => setImage(e.target.files[0])}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Video URL:
                        <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default UploadProduct;
