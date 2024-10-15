import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our water damage restoration experts</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>24/7 Emergency: 1-800-WATER-HELP</p>
              <p>Office: (555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@waterguardrestoration.com</p>
              <p>support@waterguardrestoration.com</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Restoration Ave</p>
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Placeholder for Google Maps integration */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-600 text-lg font-semibold">Google Maps Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">What are your service hours?</h3>
              <p>We offer 24/7 emergency water damage restoration services. Our office hours for non-emergency inquiries are Monday to Friday, 9 AM to 5 PM.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Do you work with insurance companies?</h3>
              <p>Yes, we work directly with all major insurance companies to handle claims and ensure a smooth restoration process for our clients.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">How quickly can you respond to an emergency?</h3>
              <p>Our emergency response teams aim to arrive at your property within 60-90 minutes of your call, depending on your location within our service area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8">Our emergency hotline is available 24/7. Don't wait, call now!</p>
          <a href="tel:1-800-WATER-HELP" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Call 1-800-WATER-HELP
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;