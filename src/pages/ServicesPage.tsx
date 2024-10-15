import React from 'react';
import { Droplet, Wind, Thermometer, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Water Damage Restoration Solutions</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Droplet className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Water Damage Restoration</h3>
              <p>Swift and effective restoration for all types of water damage.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Wind className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flood Damage Repair</h3>
              <p>Comprehensive solutions for flood-affected properties.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Thermometer className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mold Remediation</h3>
              <p>Expert mold removal and prevention services.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Shield className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p>24/7 rapid response for water-related emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Restoration Process</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">1. Water Damage Restoration</h3>
            <p className="mb-4">Our water damage restoration service is designed to quickly and effectively mitigate the effects of water damage in your property. We use advanced equipment and techniques to remove water, dry affected areas, and prevent secondary damage such as mold growth.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Water extraction and removal</li>
              <li>Structural drying</li>
              <li>Dehumidification</li>
              <li>Sanitization and deodorization</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Get a Free Quote
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">2. Flood Damage Repair</h3>
            <p className="mb-4">Our flood damage repair service addresses the unique challenges posed by flooding events. We work quickly to remove standing water, salvage belongings, and restore your property to its pre-flood condition.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Rapid water extraction</li>
              <li>Structural assessment and repair</li>
              <li>Content cleaning and restoration</li>
              <li>Mold prevention treatments</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Schedule an Inspection
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">3. Mold Remediation</h3>
            <p className="mb-4">Our mold remediation service targets existing mold growth and prevents future occurrences. We use eco-friendly products and advanced techniques to ensure your property is mold-free and safe.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Mold inspection and assessment</li>
              <li>Containment and removal</li>
              <li>HEPA air filtration</li>
              <li>Preventive treatments</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Book Mold Inspection
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">4. Emergency Services</h3>
            <p className="mb-4">Our 24/7 emergency services ensure that help is always available when you need it most. We respond quickly to minimize damage and start the restoration process immediately.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Rapid response teams</li>
              <li>Emergency water extraction</li>
              <li>Temporary power solutions</li>
              <li>Board-up and tarping services</li>
            </ul>
            <Link to="/emergency" className="inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              24/7 Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Water Damage Restoration?</h2>
          <p className="text-xl mb-8">Our experts are ready to help you restore your property quickly and efficiently.</p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;