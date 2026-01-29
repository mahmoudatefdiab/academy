import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, MessageSquare } from 'lucide-react';
import calling from '../../assets/calling.png';

const Contact = () => {
  const [offset, setOffset] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sobhymostafa601@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sobhymostafa601@gmail.com"
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
      content: "Nasr City, Egypt",
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
    <section className="relative min-h-screen overflow-hidden">

      {/* ===== PARALLAX BACKGROUND ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${calling})`,
          transform: `translateY(${offset}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-red-900/80 to-[#E8D461]/30"></div>
      </div>

      {/* ===== HEADER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
          Interested?
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Don’t hesitate to contact us — we’re always happy to help you start your journey.
        </p>
      </div>

      {/* ===== CONTACT CARDS ===== */}
      {/* ===== CONTACT CARDS (SMALL & SIMPLE) ===== */}
<section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {contactInfo.map((info, idx) => {
      const Icon = info.icon;

      return (
        <a
          key={idx}
          href={info.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white/80 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
        >
          {/* Icon */}
          <div className="p-2 rounded-lg bg-gray-100 text-red-600">
            <Icon size={18} />
          </div>

          {/* Text */}
          <div className="leading-tight">
            <p className="text-xs font-bold text-gray-800 uppercase">
              {info.title}
            </p>
            <span className="text-sm text-gray-600">
              {info.content}
            </span>
          </div>
        </a>
      );
    })}
  </div>
</section>

      {/* ===== MAP SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E8D461]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <h2 className="text-3xl font-bold mb-4 relative z-10">
            Visit Our Academy
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Meet us in Nasr City. We’re open Sunday to Thursday from 9 AM to 5 PM.
          </p>

          <a
            href="https://www.bing.com/maps?q=Nasr+City+Cairo"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-[#E8D461] text-gray-900 rounded-lg font-bold hover:bg-white hover:text-red-700 transition relative z-10"
          >
            Get Directions
          </a>
        </div>
      </section>

      <div className="h-20"></div>
    </section>
  );
};

export default Contact;
