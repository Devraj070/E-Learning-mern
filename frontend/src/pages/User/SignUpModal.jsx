import React, { useState } from 'react';
import axios from 'axios';

const SignUpModal = ({ isOpen, onClose }) => {
  // State to store form input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to the backend with form data
      const response = await axios.post('http://localhost:3001/auth/register', formData); // Update the URL
      
      // Handle successful registration
      console.log(response.data); // Log success message
      onClose(); // Close the modal
      alert(response.data.message);
      
      
    } catch (error) {
      // Handle registration error
      if (error.response && error.response.data) {
        console.error('Error registering user:', error.response.data);
      } else {
        alert('Error registering user. Please try again later.');

        console.error('Error registering user:', error.message);
      }
      // Optionally, display an error message to the user
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <span className="close-icon" onClick={onClose}>&times;</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
