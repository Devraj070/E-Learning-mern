import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import LoginModal from '../pages/User/LoginModal'; // Import the LoginModal component

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]); // State to store cart items.
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State to control modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Load login status from sessionStorage on component mount
  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality here
    console.log('Search query:', searchQuery);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleLogout = () => {
    // Perform logout functionality here
    window.location.reload();
    sessionStorage.removeItem('isLoggedIn'); // Remove login status from sessionStorage
    // setIsLoggedIn(false);

    setTimeout(() => {
      setIsLoggedIn(false);// Delay for 1 second (adjust as needed)
    }, 1000);
  };

  const handleCartClick = () => {
    // Redirect to the cart
    window.location.href = '/Cart';
    console.log('Redirecting to cart');
  };

  const logoSlide = {
    initial: { x: "-100%", opacity: 0 }, whileInView: { x: 0, opacity: 1 }
  };

  const cartSlide = {
    initial: { y: "-100%", opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { delay: 0.3 }
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-blue-500 fixed top-0 w-full z-50">
      <div className="flex items-center">
        <Link to="/">
          <motion.div {...logoSlide} className="text-3xl font-bold text-black font-galada mr-2">E-Learning .</motion.div>
          <motion.div {...logoSlide} className='italic'>Discover new skills</motion.div>
        </Link>
      </div>
      <div className="">
        <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-200 rounded-md w-96 ">
          <input
            type="text"
            placeholder="Search Courses..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="py-2 pl-3 pr-3 bg-transparent focus:outline-none focus:bg-white focus:border-blue-500 rounded-l-md"
            style={{ width: "calc(100% - 0px)" }}
          />
          <button type="submit" className="bg-blue-600 text-white py-3 px-4 rounded-r-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <Link to="/Contact-us" className="text-white mr-4 hover:text-gray-200">Contact Us</Link>
        <Link to="/about-us" className="text-white mr-4 hover:text-gray-200">About Us</Link>
        <Link to="/services" className="text-white mr-4 hover:text-gray-200">Services</Link>
        <Link to="/blogs" className="text-white mr-4 hover:text-gray-200">Blogs</Link>
        {isLoggedIn && (
          <motion.div {...cartSlide} className="text-black " onClick={handleCartClick}>
            <FaShoppingCart className="text-3xl mr-6 " />
          </motion.div>
        )}
        {isLoggedIn ? (
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={toggleLoginModal}>Login</button>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} setIsLoggedIn={(value) => {
        sessionStorage.setItem('isLoggedIn', value ? 'true' : 'false');
        setIsLoggedIn(value);
      }} /> {/* Render the LoginModal */}
    </nav>
  );
};

export default Navbar;
