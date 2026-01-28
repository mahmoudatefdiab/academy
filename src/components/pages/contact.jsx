import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, MessageSquare } from 'lucide-react';
import calling from '../../assets/calling.png';
  // <-- replace with your real team image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sobhymostafa601@gmail.com",
      link: "mailto:sobhymostafa601@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+201062541086",
      link: "tel:+201062541086"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nasr city, Egypt",
      link: "https://www.bing.com/maps?q=Nasr+City+Cairo"
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "DWA / Akademie",
      link: "https://www.facebook.com/profile.php?id=100092552140997"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "+201062541086",
      link: "https://wa.me/201062541086"
    }
  ];

  return (
    <section className="relative py-24 shadow-xl overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <img src={calling} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-red-900/80 to-[#E8D461]/30"></div>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
  interested? don't hesitate to contact us!      </h1>
       
      </div>

     
     
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Team Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-red-700 rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
             
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-24">
    {contactInfo.map((info, idx) => {
      const Icon = info.icon;
      return (
        <a
          key={idx}
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/25 backdrop-blur-md hover:bg-white/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-gray-900 hover:border-red-700 hover:-translate-y-1"
        >
          {/* Icon Circle */}
          <div className="w-16 h-16 bg-gray-50/25 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E8D461]/50 transition-colors duration-300">
            <Icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={32} />
          </div>

          {/* Title */}
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
            {info.title}
          </h3>

          {/* Content */}
          <p className="text-gray-600 font-medium group-hover:text-gray-900">
            {info.content}
          </p>
        </a>
      );
    })}
  </div>
</section>


      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-gray-900 rounded-2xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8D461] rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-3xl font-bold mb-4 relative z-10">Visit Our Academy</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Come meet us in person at our Nasr City branch. We are open Sunday through Thursday from 9 AM to 5 PM.
          </p>
          <a 
            href="https://www.bing.com/maps?q=Nasr+City+Cairo" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-[#E8D461] text-gray-900 rounded-lg hover:bg-white hover:text-red-700 transition font-bold shadow-lg relative z-10"
          >
            Get Directions
          </a>
        </div>
      </section>

      <div className="h-12"></div>
    </section>
  );
};

export default Contact;
