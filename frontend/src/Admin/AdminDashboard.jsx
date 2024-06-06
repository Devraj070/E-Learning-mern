import React, { useState } from 'react';
import UploadProduct from './UploadProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';



function AdminDashboard() {
  const [view, setView] = useState('default');

  const handleAddProduct = () => {
    setView('add');
  };


  const handleUpdateProduct = () => {
    setView('update');
  };

  const handleDeleteProduct = () => {
    setView('delete');
  };

  return (
    <div className="flex h-screen bg-gray-200 mt-16">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col justify-between">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <nav className="mt-6 bg-orange-300 text-black rounded-md">
            <button onClick={handleAddProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md">Add Product</button>

            <button onClick={handleUpdateProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md">Update Any Product</button>
            <button onClick={handleDeleteProduct} className="block py-2 px-4 text-sm hover:bg-white hover:rounded-md">Delete Product</button>
          </nav>
        </div>
        <div className="p-4 text-center">
          <p>Logged in as Admin</p>
          <button className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg text-white">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {view === 'add' && <UploadProduct />}
        {view === 'update' && <UpdateProduct />}
        {view === 'delete' && <DeleteProduct />}



        {/* Conditionally render "Hello Admin!" when main content is blank */}
        {view !== 'add' && view !== 'addFeaturedProduct' && view !== 'update' && view !== 'delete' && (
          <div className="flex justify-center h-full mt-24">
            <h1 className="text-8xl font-bold text-gray-800 ">Hello Admin!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

// function AddProductForm() {
//   return (
//     <form className="bg-white shadow-md rounded-lg p-8">
//       <h2 className="text-xl font-bold mb-4">Add Product</h2>
//       <label className="block mb-4">
//         Product Name:
//         <input type="text" name="name" className="input" />
//       </label>
//       <label className="block mb-4">
//         Price:
//         <input type="number" name="price" className="input" />
//       </label>
//       <button type="submit" className="btn-primary">Submit</button>
//     </form>
//   );
// }

// function UpdateProductForm() {
//   return (
//     <form className="bg-white shadow-md rounded-lg p-8">
//       <h2 className="text-xl font-bold mb-4">Update Product</h2>
//       <label className="block mb-4">
//         Product ID:
//         <input type="text" name="id" className="input" />
//       </label>
//       <label className="block mb-4">
//         New Product Name:
//         <input type="text" name="name" className="input" />
//       </label>
//       <button type="submit" className="btn-primary">Submit</button>
//     </form>
//   );
// }

// function DeleteProductForm() {
//   return (
//     <form className="bg-white shadow-md rounded-lg p-8">
//       <h2 className="text-xl font-bold mb-4">Delete Product</h2>
//       <label className="block mb-4">
//         Product ID:
//         <input type="text" name="id" className="input" />
//       </label>
//       <button type="submit" className="btn-primary">Delete</button>
//     </form>
//   );
// }

export default AdminDashboard;
