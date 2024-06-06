import React from 'react';

const Blog = () => {
  // Dummy data for blog posts
  const blogPosts = [
    { id: 1, title: 'The Importance of Project Management', author: 'John Doe', date: 'April 15, 2024', image: 'blog1.jpg' },
    { id: 2, title: 'Top Trends in Web Development', author: 'Jane Smith', date: 'April 20, 2024', image: 'blog2.jpg' },
    { id: 3, title: 'Marketing Strategies for E-Commerce Projects', author: 'Alice Johnson', date: 'April 25, 2024', image: 'blog3.jpg' },
  ];

  return (
    <section className="blog bg-gray-100 py-20 h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-post-image w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600">By {post.author} | {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
