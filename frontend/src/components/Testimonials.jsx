import React from 'react';
import costomer1 from '../Assets/testimonials-photos/Devraj.jpg'

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta purus ac quam ultricies, vitae vehicula turpis ultrices.', avatar: costomer1 },
    { id: 2, name: 'Jane Smith', comment: 'Sed vel sem et massa facilisis gravida non et turpis. In laoreet ligula id est vestibulum, vitae pretium urna vestibulum.', avatar: 'avatar2.jpg' },
    { id: 3, name: 'Alice Johnson', comment: 'Donec auctor ligula ut odio cursus, ac tristique orci finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', avatar: 'avatar3.jpg' },
  ];

  return (
    <section className="testimonials bg-gray-400 py-10 text-center">
      <h2 className="text-3xl italic mb-8">Testimonials</h2>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {testimonials.map(testimonial => (
          <div className="testimonial bg-white rounded-lg p-4 max-w-xs" key={testimonial.id}>
            <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="testimonial-comment">{testimonial.comment}</p>
            <p className="testimonial-name font-bold mt-4">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
