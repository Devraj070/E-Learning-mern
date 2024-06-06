import React, { useState } from 'react';
import axios from 'axios';

function UpdateProductForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [actualPrice, setActualPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState(''); // New state for video URL

    const discountedPrice = (parseFloat(actualPrice) * (100 - parseFloat(discountPercentage)) / 100).toFixed(2);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        if (image) {
            formData.append('file', image);
            formData.append('upload_preset', 'Project-images');

            try {
                const response = await axios.post('https://api.cloudinary.com/v1_1/dc7vztzup/image/upload', formData);
                if (response.status === 200) {
                    setImageUrl(response.data.secure_url);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Failed to upload image');
                return;
            }
        }

        const productData = {
            id: id,
            name: name,
            actualPrice: actualPrice,
            discountPercentage: discountPercentage,
            discountedPrice: discountedPrice,
            description: description,
            imageUrl: imageUrl || undefined,
            videoUrl: videoUrl // Include video URL in the product data
        };

        try {
            const productResponse = await axios.put('http://localhost:3001/api/update-product-details', productData);
            if (productResponse.status === 200) {
                alert('Product updated successfully!');
            } else {
                alert('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-4 bg-white p-8 border border-gray-200 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Update Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product ID:
                        <input type="text" value={id} onChange={e => setId(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        New Product Name:
                        <input type="text" value={name} onChange={e => setName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Actual Price:
                        <input type="number" value={actualPrice} onChange={e => setActualPrice(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Percentage:
                        <input type="number" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Discounted Price:
                        <input type="text" value={discountedPrice} readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                        <textarea value={description} onChange={e => setDescription(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image (Leave blank to keep current image):
                        <input type="file" onChange={e => setImage(e.target.files[0])}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Video URL:
                        <input type="text" value={videoUrl} onChange={e => setVideoUrl(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default UpdateProductForm;
