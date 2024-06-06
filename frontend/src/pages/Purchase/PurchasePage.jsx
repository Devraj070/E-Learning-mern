import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Spinner } from '../Loading/spinner.svg'; // Import your spinner SVG file

const PurchasePage = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [product, setProject] = useState(null); // State to store product data
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data from the backend API
    fetch(`http://localhost:3001/api/projects/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Set the retrieved product data to state
        setProject(data);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleBuyNow = () => {
    // Add logic to handle the purchase here
    console.log('Buying product:', product);
    // For demonstration purposes, you can add a confirmation message
    alert(`You have purchased ${product.name}.`);
    navigate(`/purchase/${id}/payment`);
  };

  if (!product) {
    // If product data is not yet available, display a loading message
    return (
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
        <Spinner className="h-20 w-20" />
      </div>
    );
  }

  // Once product data is available, display purchase information
  return (
    <div className="max-w-4xl mx-auto mb-16 pb-20 mt-40">
      <div className='bg-blue-200'>
        <h2 className="text-3xl font-semibold mb-15 pb-8 text-center py-2">Overview of your order</h2>
        <div className="bg-blue-100 border rounded-lg p-6 shadow-md">
          <p className="text-lg mb-4"><strong className="font-bold">ID:</strong> {product._id}</p>
          <p className="text-lg mb-4"><strong className="font-bold">Name:</strong> {product.name}</p>
          <p className="text-lg mb-4"><strong className="font-bold">Description:</strong> {product.description}</p>
          <p className='flex items-baseline space-x-2 py-4'>
            <strong className='font-bold text-lg mb-4'>Price: </strong>
            <span className="text-green-600 font-bold text-xl">₹ {product.discountedPrice}</span>
            <span className="line-through text-gray-500 text-sm"> ₹{product.actualPrice}</span>
            <span className="text-red-500 text-sm">{product.discountPercentage}% off</span>
          </p>
          <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none">
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
