import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      // console.log('Data sent successfully:', response.data);
      // Optionally, reset the form fields after successful submission
      alert('Your Data sent successfully, we will let you soon...')
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <section className="bg-gray-300 py-20 h-screen">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold mb-2">Phone:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
