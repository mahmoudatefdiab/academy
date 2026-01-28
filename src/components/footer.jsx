import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import logo0 from '../assets/1.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Updated gradient to match theme */}
              <div className=" ">
                <img src={logo0} alt="" />
              </div>
          
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              WIR MACHEN DICH BEREIT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#E8D461] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#E8D461] transition">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-[#E8D461] transition">Our Programs</Link></li>
              <li><Link to="/contact" className="hover:text-[#E8D461] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses Categories */}
          <div>
            <h4 className="font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-[#E8D461] transition">German Language (A1-C1)</Link></li>
              <li><Link to="/courses" className="hover:text-[#E8D461] transition">Conversation Tracks</Link></li>
              <li><Link to="/courses" className="hover:text-[#E8D461] transition">Exam Prep (Goethe/TELC)</Link></li>
              <li><Link to="/courses" className="hover:text-[#E8D461] transition font-bold text-[#E8D461]">Train to Hire Program</Link></li>
              <li><Link to="/courses" className="hover:text-[#E8D461] transition">Technical Support</Link></li>
            </ul>
          </div>

          {/* Contact Info (Updated) */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#E8D461]" />
                <a href="mailto:dwaakadmie@gmail.com" className="hover:text-white transition">
                  dwaakadmie@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#E8D461]" />
                <a href="tel:+201062541086" className="hover:text-white transition">
                  +20 106 254 1086
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#E8D461]" />
                <span>Nasr City, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 Die Welle Akademie. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100092552140997" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full hover:bg-[#1877F2] hover:text-white transition duration-300" 
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 p-2 rounded-full hover:bg-[#E1306C] hover:text-white transition duration-300" 
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 p-2 rounded-full hover:bg-[#0A66C2] hover:text-white transition duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer