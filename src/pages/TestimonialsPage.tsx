import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York City, NY",
      quote: "WaterGuard Restoration saved our home after a major pipe burst. Their quick response and expertise made all the difference. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Michael Chen",
      location: "Jersey City, NJ",
      quote: "Professional, courteous, and efficient. I couldn't ask for better service during such a stressful time. They truly went above and beyond.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Emily Rodriguez",
      location: "Stamford, CT",
      quote: "After a flood damaged our office, WaterGuard Restoration had us back up and running in no time. Their attention to detail is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "David Thompson",
      location: "Long Island, NY",
      quote: "I was impressed by how quickly they responded to our emergency call. Their team was thorough and kept us informed throughout the entire process.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Lisa Patel",
      location: "White Plains, NY",
      quote: "WaterGuard Restoration not only fixed the water damage in our home but also helped us navigate the insurance claim process. True professionals!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl">See What Our Satisfied Clients Have to Say</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Luxury Apartment Complex Flood Recovery</h3>
              <div className="mb-4">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Apartment Complex" className="w-full h-48 object-cover rounded" />
              </div>
              <p className="mb-4">When a major storm caused extensive flooding in a 200-unit luxury apartment complex, WaterGuard Restoration was called in to handle the recovery process. Our team worked tirelessly to extract water, dry out affected areas, and restore damaged units to their original condition.</p>
              <p className="font-semibold">Result: All units restored within 2 weeks, minimizing displacement for residents.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Historic Building Mold Remediation</h3>
              <div className="mb-4">
                <img src="https://images.unsplash.com/photo-1541274575689-7e6834bb7a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Historic Building" className="w-full h-48 object-cover rounded" />
              </div>
              <p className="mb-4">A 150-year-old historic building in downtown New York City discovered extensive mold growth due to long-term water intrusion. Our team developed a customized remediation plan that preserved the building's historic features while effectively eliminating the mold problem.</p>
              <p className="font-semibold">Result: Successfully removed all mold while maintaining the building's historic integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Video Testimonial</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="mt-4 text-center text-gray-600">Hear from our client, John Smith, about his experience with WaterGuard Restoration after a severe basement flood.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Award-Winning Service?</h2>
          <p className="text-xl mb-8">Join our long list of satisfied customers. Contact us today for all your water damage restoration needs.</p>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;