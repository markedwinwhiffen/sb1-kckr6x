import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{backgroundImage: `url('https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`}}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Expert Water Damage Restoration</h1>
          <p className="text-xl mb-8">24/7 Emergency Service - We're Here When You Need Us Most</p>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Get Immediate Help
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
              <p>Our team of IICRC certified technicians ensures top-quality restoration.</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Response</h3>
              <p>We're available round the clock to handle any water damage emergency.</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guaranteed Satisfaction</h3>
              <p>We stand behind our work with a 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Let Water Damage Wait</h2>
          <p className="text-xl mb-8">The longer you wait, the worse it gets. Contact us now for fast, professional service.</p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Schedule a Free Inspection
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">"WaterGuard Restoration saved our home after a major flood. Their quick response and expertise made all the difference."</p>
              <p className="font-semibold">- Sarah J., Homeowner</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">"Professional, courteous, and efficient. I couldn't ask for better service during such a stressful time."</p>
              <p className="font-semibold">- Mike T., Business Owner</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">"Their attention to detail and commitment to quality work is unmatched. Highly recommended!"</p>
              <p className="font-semibold">- Lisa R., Property Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;