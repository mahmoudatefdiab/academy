import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircleReplyIcon, Facebook, Instagram } from "lucide-react";
import logo0 from "../assets/1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo0} alt="Die Welle Akademie Logo" />
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

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#E8D461]" />
                <a href="mailto:dwaakadmie@gmail.com" className="hover:text-white transition">
                  dwaakadmie@gmail.com
                </a>
              </li>

              {/* WhatsApp Contact */}
              <li className="flex items-center gap-2">
                <a 
                  href="https://wa.me/201062541086" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  {/* WhatsApp SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="#08c502" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.555 4.088 1.515 5.822L0 24l6.324-1.49C8.053 23.444 10.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.464 17.09c-.257.722-1.488 1.376-2.034 1.467-.516.084-1.16.122-3.063-.548-2.868-1.01-4.705-4.02-4.843-4.188-.138-.168-1.14-1.564-1.14-2.99 0-1.426.73-2.124 1.02-2.414.264-.263.577-.327.771-.327.193 0 .383.003.551.007.178.005.417-.067.65.499.23.564.78 1.953.847 2.097.066.145.108.315.017.51-.09.195-.135.314-.27.49-.137.176-.288.39-.41.524-.137.147-.281.31-.12.597.16.287.708 1.165 1.518 1.887.524.492.954.655 1.365.837.541.24.822.207.952.126.13-.08.418-.151.637-.308.219-.158.471-.21.675-.21.205 0 .404.003.581.007.178.005.527.07.637.338.11.267.739 1.437.843 1.607.103.17.173.29.11.457z"/>
                  </svg>
                  <span>+20-106 254 1086</span>
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#E8D461]" />
                <span>Nasr City , Egypt</span>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
