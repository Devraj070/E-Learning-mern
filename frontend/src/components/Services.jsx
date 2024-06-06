import React from 'react';

const Services = () => {
  return (
    <section className="services bg-gray-100 py-20 h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="service bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-700">We offer professional web development services tailored to your needs.</p>
          </div>
          <div className="service bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            <p className="text-gray-700">Our team of designers can create stunning graphics and visuals for your projects.</p>
          </div>
          <div className="service bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-700">Boost your online presence with our effective digital marketing strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
