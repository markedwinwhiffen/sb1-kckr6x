import React from 'react';
import { Phone, Clock, Truck, Shield } from 'lucide-react';

const EmergencyServices: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">24/7 Emergency Water Damage Services</h1>
          <p className="text-xl">Fast Response When You Need It Most</p>
          <a href="tel:1-800-WATER-HELP" className="inline-block mt-8 bg-white text-red-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300">
            Call Now: 1-800-WATER-HELP
          </a>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Emergency Response Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="mx-auto h-16 w-16 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Immediate Contact</h3>
              <p>Call our 24/7 hotline for instant assistance from our emergency team.</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-16 w-16 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Rapid Response</h3>
              <p>Our technicians will be dispatched to your location within 60-90 minutes.</p>
            </div>
            <div className="text-center">
              <Truck className="mx-auto h-16 w-16 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. On-Site Assessment</h3>
              <p>We'll quickly assess the damage and create an immediate action plan.</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto h-16 w-16 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">4. Immediate Mitigation</h3>
              <p>We start water extraction and damage control to prevent further issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services List */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Water Extraction</h3>
              <p>Swift removal of standing water to prevent further damage and mold growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Flood Damage Mitigation</h3>
              <p>Immediate action to minimize the effects of flooding on your property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Sewage Cleanup</h3>
              <p>Safe and thorough cleaning of hazardous sewage spills and backups.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Emergency Board-Up</h3>
              <p>Securing your property against further damage from the elements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WaterGuard for Emergencies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p>Our emergency teams are on standby round the clock, 365 days a year.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Rapid Response Times</h3>
              <p>We aim to be on-site within 60-90 minutes of your call.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Experienced Technicians</h3>
              <p>Our teams are IICRC certified and equipped to handle any water emergency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Water Damage Tips</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="list-disc list-inside space-y-4">
              <li>Turn off the main water supply to stop the source of water if possible.</li>
              <li>Disconnect electrical appliances and move valuable items to a dry area.</li>
              <li>Remove as much water as possible using mops or towels.</li>
              <li>Open windows and doors to allow for air circulation if weather permits.</li>
              <li>Do not use household vacuums to remove water.</li>
              <li>Avoid entering rooms with sagging ceilings.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Wait - Act Now!</h2>
          <p className="text-xl mb-8">Every minute counts in water damage emergencies. Contact us immediately for professional assistance.</p>
          <a href="tel:1-800-WATER-HELP" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Call 1-800-WATER-HELP
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmergencyServices;