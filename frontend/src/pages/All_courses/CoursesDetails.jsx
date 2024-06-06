
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import LoginModal from '../User/LoginModal';
// import { ReactComponent as Spinner } from '../Loading/spinner.svg'; // Import your spinner SVG file
// import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

// const CoursesDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userId, setUserId] = useState(null); // State to store userId

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`http://localhost:3001/api/products/${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//         setError('Failed to fetch product');
//         setProduct(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   useEffect(() => {
//     const loggedInStatus = sessionStorage.getItem('isLoggedIn');
//     const storedUserId = sessionStorage.getItem('userId'); // Get userId from sessionStorage
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//       setUserId(storedUserId); // Set userId if logged in
//     }
//   }, []);

//   const toggleLoginModal = () => {
//     setLoginModalOpen(!isLoginModalOpen);
//   };

//   const handleAddToCartClick = async () => {
//     if (isLoggedIn) {
//       try {
//         if (!userId) {
//           throw new Error('User ID is missing');
//         }

//         const response = await fetch('http://localhost:3001/api/cart/add-project-to-cart', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             productId: product._id, // Use the actual product ID
//             userId: userId, // Use the actual user ID
//           }),
//         });

//         if (response.ok) {
//           toast.success('Product added to cart!');
//         } else {
//           throw new Error('Failed to add product to cart');
//         }
//       } catch (error) {
//         console.error('Error adding product to cart:', error);
//         toast.error('Failed to add product to cart');
//       }
//     } else {
//       toggleLoginModal();
//     }
//   };

//   if (error) {
//     return (
//       <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-center text-2xl font-bold text-gray-800">Error Loading Product</h2>
//         <p className="text-center text-gray-600">Error: {error}</p>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <div className="min-h-screen bg-gray-200 flex justify-center items-center">
//       <Spinner className="h-20 w-20" />
//     </div>;
//   }

//   if (!product) {
//     return (
//       <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-center text-2xl font-bold text-gray-800">Product Not Found</h2>
//         <p className="text-center text-gray-600">The product with ID {id} does not exist.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-24">
//       <Toaster /> {/* Add Toaster component for react-hot-toast */}
//       <h2 className="text-2xl font-bold mb-4 p-2 text-center">{product.name}</h2>
//       <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
//         <img src={product.imageUrl} alt={`Image of ${product.name}`} className="w-full md:w-[40vw] mx-auto pt-4" />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{product.name}</div>
//           <p className="text-gray-700 text-base">{product.description}</p>
//         </div>
//         <div className="px-6 py-4 flex justify-between items-center">
//           <div className="flex items-baseline space-x-2">
//             <span className="text-green-600 font-bold text-xl">₹ {product.discountedPrice}</span>
//             <span className="line-through text-gray-500 text-sm">₹{product.actualPrice}</span>
//             <span className="text-red-500 text-sm">{product.discountPercentage}% off</span>
//           </div>
//           <div>
//             <Link to={`/purchase/${product._id}`} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-2 transition duration-300 ease-in-out flex-1">
//               Enroll now
//             </Link>
//             <button onClick={handleAddToCartClick} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out flex-1">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} setIsLoggedIn={(value) => {
//         sessionStorage.setItem('isLoggedIn', value);
//         setIsLoggedIn(value);
//         setUserId(null); // Reset userId when logging out
//       }} />
//     </div>
//   );
// };

// export default CoursesDetails;
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import LoginModal from '../User/LoginModal';
import { ReactComponent as Spinner } from '../Loading/spinner.svg'; // Import your spinner SVG file
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

const CoursesDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // State to store userId
  const navigate = useNavigate(); // Use useHistory for redirection

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:3001/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product');
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const storedUserId = sessionStorage.getItem('userId'); // Get userId from sessionStorage
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUserId(storedUserId); // Set userId if logged in
    }
  }, []);

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleActionClick = async (action) => {
    if (isLoggedIn) {
      try {
        if (!userId) {
          throw new Error('User ID is missing');
        }

        if (action === 'addToCart') {
          const response = await fetch('http://localhost:3001/api/cart/add-project-to-cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productId: product._id, // Use the actual product ID
              userId: userId, // Use the actual user ID
            }),
          });

          if (response.ok) {
            toast.success('Product added to cart!');
          } else {
            throw new Error('Failed to add product to cart');
          }
        } else if (action === 'enrollNow') {
          navigate(`/purchase/${product._id}`);
        }
      } catch (error) {
        console.error(`Error during ${action}:`, error);
        toast.error(`Failed to ${action === 'addToCart' ? 'add product to cart' : 'enroll'}`);
      }
    } else {
      toggleLoginModal();
    }
  };

  const handleAddToCartClick = () => handleActionClick('addToCart');
  const handleEnrollNowClick = () => handleActionClick('enrollNow');

  if (error) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Error Loading Product</h2>
        <p className="text-center text-gray-600">Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
        <Spinner className="h-20 w-20" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-center text-gray-600">The product with ID {id} does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-24">
      <Toaster /> {/* Add Toaster component for react-hot-toast */}
      <h2 className="text-2xl font-bold mb-4 p-2 text-center">{product.name}</h2>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={product.imageUrl} alt={`Image of ${product.name}`} className="w-full md:w-[40vw] mx-auto pt-4" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-baseline space-x-2">
            <span className="text-green-600 font-bold text-xl">₹ {product.discountedPrice}</span>
            <span className="line-through text-gray-500 text-sm">₹{product.actualPrice}</span>
            <span className="text-red-500 text-sm">{product.discountPercentage}% off</span>
          </div>
          <div>
            <button onClick={handleEnrollNowClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mr-2 transition duration-300 ease-in-out flex-1">
              Enroll now
            </button>
            <button onClick={handleAddToCartClick} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out flex-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} setIsLoggedIn={(value) => {
        sessionStorage.setItem('isLoggedIn', value);
        setIsLoggedIn(value);
        setUserId(null); // Reset userId when logging out
      }} />
    </div>
  );
};

export default CoursesDetails;
