// import React from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "./App.css";
// import Footer from './components/Footer';
// import All from './ALL';
// import Courses from './pages/All_courses/Courses'; // Import the Products component
// import CoursesDetails from './pages/All_courses/CoursesDetails';
// import PurchasePage from './pages/Purchase/PurchasePage';
// import CartPage from './pages/Cart/CartPage';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import ContactUs from './components/ContactUs';
// import Blog from './components/Blog';
// // import UploadProduct from './Admin/UploadProduct';
// import AdminDashboard from './Admin/AdminDashboard';
// import Payment from './pages/Purchase/Payment';




// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <div className='main-container'>
//           <Routes>
//             <Route path='/' element={<All />} />
//             <Route path='/Courses' element={<Courses />} /> {/* Render Products component for /products route */}
//             <Route path='/Courses/:id' element={<CoursesDetails />} />
//             <Route path="/purchase/:id" element={<PurchasePage />} />
//             <Route path="/Cart" element={<CartPage />} />
//             <Route path="/About-us" element={<AboutUs />} />
//             <Route path="/Services" element={<Services />} />
//             <Route path="/Contact-us" element={<ContactUs />} />
//             <Route path="/Blogs" element={<Blog />} />
//             {/* <Route path='/upload-product' element={<UploadProduct/>}/> */}
//             <Route path='/admin' element={<AdminDashboard />} />
//             <Route path="/purchase/:id/payment" element={<Payment />} />

//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Footer from './components/Footer';
import All from './ALL';
import Courses from './pages/All_courses/Courses'; // Import the Products component
import CoursesDetails from './pages/All_courses/CoursesDetails';
import PurchasePage from './pages/Purchase/PurchasePage';
import CartPage from './pages/Cart/CartPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
// import UploadProduct from './Admin/UploadProduct';
import AdminDashboard from './Admin/AdminDashboard';
import Payment from './pages/Purchase/Payment';
import CourseVideos from './pages/Purchase/CourseVideos';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='main-container'>
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/Courses' element={<Courses />} /> {/* Render Products component for /products route */}
            <Route path='/Courses/:id' element={<CoursesDetails />} />
            <Route path="/purchase/:id" element={<PurchasePage />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/About-us" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact-us" element={<ContactUs />} />
            <Route path="/Blogs" element={<Blog />} />
            {/* <Route path='/upload-product' element={<UploadProduct/>}/> */}
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path="/purchase/:id/payment" element={<Payment />} />
            <Route path='/courses/:id/videos' element={<CourseVideos />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
