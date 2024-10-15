import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WaterGuard Restoration</h3>
            <p>Your trusted partner in water damage restoration.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#flood-damage" className="hover:text-blue-300">Flood Damage Repair</Link></li>
              <li><Link to="/services#mold-removal" className="hover:text-blue-300">Mold Removal</Link></li>
              <li><Link to="/services#emergency" className="hover:text-blue-300">Emergency Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-300"><Instagram /></a>
              <a href="#" className="hover:text-blue-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 WaterGuard Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;