import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cover from '../Assets/cover.jpg'; // Make sure the path is correct

const HeroSection = () => {
  const backgroundImage = `url(${cover})`;  // Using template literals to insert the image path

  return (
    <div className="app">
      <section
        className=" text-dark text-center mt-16 py-36 h-90 "
        style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', borderBottomRightRadius: '5%' }}      >
        <div className="max-w-4xl mx-auto">
          <div className="hero-content">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Welcome to E-Learning</h1>
            <p className="text-lg md:text-xl mb-12 text-white">Discover new courses with us</p>
            <Link to="/Courses" className="explore-button inline-block px-6 py-3 rounded-md bg-green-500 text-white text-lg md:text-xl transition duration-300 hover:bg-green-600" >
              Explore courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   const [backgroundImage, setBackgroundImage] = useState('');

//   useEffect(() => {
//     const fetchCoverImage = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/api/cover'); // Adjust the API URL as needed
//         const data = await response.json();
//         if (response.ok && data.length > 0) {
//           setBackgroundImage(`url(${data[0].imageUrl})`); // Assuming the image URL is in the first object
//         } else {
//           throw new Error('No image data');
//         }
//       } catch (error) {
//         console.error('Failed to fetch image:', error);
//         // Fallback image or handle the error appropriately
//         setBackgroundImage(''); // Or set a default image
//       }
//     };

//     fetchCoverImage();
//   }, []);

//   return (
//     <div className="app">
//       <section
//         className="text-dark text-center mt-16 py-36 h-90"
//         style={{
//           backgroundImage,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           borderBottomRightRadius: '5%'
//         }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <div className="hero-content">
//             <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">Welcome to E-Learning</h1>
//             <p className="text-lg md:text-xl mb-12 text-white">Discover new courses with us</p>
//             <Link to="/Projects" className="explore-button inline-block px-6 py-3 rounded-md bg-green-500 text-white text-lg md:text-xl transition duration-300 hover:bg-green-600">
//               Explore courses
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

