import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-14">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-left">
          <h3 className="text-2xl font-bold">E-Learning</h3>
          <p className="text-sm">A platform to gain new knowledges and skills .</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li className="inline-block mr-4"><Link to="/" className="text-white">Home</Link></li>
            <li className="inline-block mr-4"><Link to="/About-us" className="text-white">About</Link></li>
            <li className="inline-block mr-4"><Link to="/Services" className="text-white">Services</Link></li>
            <li className="inline-block mr-4"><Link to="/Blogs" className="text-white">Blog</Link></li>
            <li className="inline-block mr-4"><Link to="/Contact-us" className="text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm">&copy; 2024 E-Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
