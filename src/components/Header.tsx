import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Droplet className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold">WaterGuard Restoration</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Phone className="h-5 w-5 mr-2" />
          <span className="font-semibold">24/7 Emergency: 1-800-WATER-HELP</span>
        </div>
      </div>
    </header>
  );
};

export default Header;