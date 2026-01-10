import React from 'react';
import { Phone, Download } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={`w-full bg-transparent pt-4 pb-0 px-8 ${className} `}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-4xl font-bold lowercase tracking-wider">
            acm
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Contact Us Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            <span>Contact Us</span>
            <Phone className="w-4 h-4" />
          </button>

          {/* Download Brochure Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white/90 hover:bg-white text-teal-600 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            <span>Download Brochure</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;