import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve user ID from session storage
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    // Fetch cart items when user ID changes
    const fetchCartItems = async () => {
      try {
        if (!userId) {
          throw new Error('User ID not found');
        }
        const response = await fetch(`http://localhost:3001/api/cart/get-project-to-cart/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        console.log('Fetched cart items:', data); // Log the fetched data
        setCartItems(data);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., show an error message to the user
      }
    };

    fetchCartItems();
  }, [userId]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20 mb-10 bg-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>
      {/* Display cart items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {cartItems.map(item => (
          <div key={item._id} className="border rounded-md p-4">
            {/* Fetch and display product details */}
            <ProductDetail productId={item.productId} />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Checkout</button>
      </div>
    </div>
  );
}

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        console.log('Fetched product:', data); // Log the fetched product
        setProduct(data);
      } catch (error) {
        console.error(error);
        // Handle error here
      }
    };

    fetchProduct();
  }, [productId]);

  const handleRemoveFromCart = async () => {
    try {
      // Implement your logic to remove the item from the cart
      // For example, send a DELETE request to your backend API
      const response = await fetch(`http://localhost:3001/api/cart/remove-from-cart/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      // Remove the item from the UI by setting the product state to null
      setProduct(null);
    } catch (error) {
      console.error(error);
      // Handle error here
    }
    window.location.reload();

  };

  return product ? (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="flex justify-between items-center">
        <img src={product.imageUrl} alt={`Image of ${product.name}`} className="md:w-[12vw] pt-4" />
        <span className="font-bold text-xl mb-2">{product.name}</span>
        <span className="text-green-600 font-bold text-xl mr-0">₹ {product.discountedPrice}</span>
      </div>
      <div className="line-through text-gray-500 text-sl flex justify-end">₹{product.actualPrice}</div>
      <span className="text-red-500 text-sl flex justify-end">{product.discountPercentage}% off</span>
      <button onClick={handleRemoveFromCart} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Remove</button>
    </div>
  ) : (
    <p>Loading product details...</p>
  );
}


export default CartPage;
