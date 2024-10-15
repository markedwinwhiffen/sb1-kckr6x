import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreaPage: React.FC = () => {
  const serviceAreas = [
    "New York City", "Long Island", "Westchester", "New Jersey", "Connecticut"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-xl">Serving the Tri-State Area with Expert Water Damage Restoration</p>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Where We Serve</h2>
              <p className="mb-6">
                WaterGuard Restoration proudly serves the entire Tri-State area, including New York City, Long Island, Westchester, New Jersey, and Connecticut. Our strategically located teams ensure rapid response times across our service area.
              </p>
              <ul className="space-y-2">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder for an interactive map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-600 text-lg font-semibold">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Local Service Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">New York City</h3>
              <p className="mb-4">Serving all five boroughs with 24/7 emergency response. Our NYC team specializes in high-rise and apartment water damage restoration.</p>
              <p className="font-semibold">Response Time: Within 60 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Long Island</h3>
              <p className="mb-4">From Nassau to Suffolk County, we provide comprehensive water damage services for coastal and inland properties.</p>
              <p className="font-semibold">Response Time: Within 90 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Westchester</h3>
              <p className="mb-4">Our Westchester team is equipped to handle water damage in both historic and modern properties throughout the county.</p>
              <p className="font-semibold">Response Time: Within 60 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">New Jersey</h3>
              <p className="mb-4">Serving Northern and Central New Jersey with expert water damage restoration for residential and commercial properties.</p>
              <p className="font-semibold">Response Time: Within 90 minutes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Connecticut</h3>
              <p className="mb-4">Our Connecticut team covers Fairfield County and beyond, offering swift response to water damage emergencies.</p>
              <p className="font-semibold">Response Time: Within 90 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WaterGuard Restoration?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p>Our teams are familiar with local building codes and regulations across the Tri-State area.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
              <p>With multiple locations, we ensure quick arrival times to minimize water damage.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mxauto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p>Our emergency teams are on standby around the clock, ready to respond to your call.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
              <p>From water extraction to full restoration, we handle every aspect of water damage recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Water Damage Restoration in Your Area?</h2>
          <p className="text-xl mb-8">Our local experts are ready to help you restore your property quickly and efficiently.</p>
          <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Contact Your Local Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreaPage;