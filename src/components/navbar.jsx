import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/2.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ">
          <div  className="w-25 h-17 object-contain" >
          <img src= {logo} alt="dwa logo bg:white" />
             </div>
           </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#E8D461] transition font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#E8D461] transition font-medium">
              About
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-[#E8D461] transition font-medium">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#E8D461] transition font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          

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
  )
}

export default Navbar