import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/2.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-25 h-17 object-contain">
              <img src={logo} alt="dwa logo" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-6 py-3">
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="relative text-gray-700 font-medium px-2 py-1 hover:text-[#E8D461] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8D461] after:transition-all hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative text-gray-700 font-medium px-2 py-1 hover:text-[#E8D461] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8D461] after:transition-all hover:after:w-full"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="relative text-gray-700 font-medium px-2 py-1 hover:text-[#E8D461] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8D461] after:transition-all hover:after:w-full"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative text-gray-700 font-medium px-2 py-1 hover:text-[#E8D461] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8D461] after:transition-all hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-[#E8D461] transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-[#E8D461] transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="block py-2 text-gray-700 hover:text-[#E8D461] transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-[#E8D461] transition font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
