import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Spinner } from '../Loading/spinner.svg'; // Import your spinner SVG file


const Courses = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch product data from the backend API
    fetch('http://localhost:3001/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Ensure data is an array before setting the state
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Error: Retrieved data is not an array');
        }
      })
      .catch(error => console.error('Error fetching products:', error))
      .finally(() => setLoading(false)); // Set loading to false when fetch completes
  }, []);

  // Display loading indicator while fetching data
  if (loading) {
    return <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <Spinner className="h-20 w-20" />
    </div>;
  }

  return (
    <section className="all-products bg-gray-100 p-8 pt-20 h-screen">
      <h2 className="text-2xl font-bold mb-4">All Available Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product._id} className="product border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
            <img src={product.imageUrl} alt={product.name} className="product-image w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              {/* Link to navigate to the product details page */}
              <Link to={`/Courses/${product._id}`} className="view-button inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
