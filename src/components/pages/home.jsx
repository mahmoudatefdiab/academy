import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Users, Award, Zap, 
  CheckCircle, Gift, Loader2, Ticket, MessageCircle, GraduationCap, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Asset Imports
import ceo1 from '../../assets/8.jpeg';
import ceo2 from '../../assets/7.jpeg';
import ceo3 from '../../assets/6.jpeg';
import ceo4 from '../../assets/10.jpeg'; 

import home1 from '../../assets/homepage1.png';
import home2 from '../../assets/homepage2.png';

/* ================= HERO BACKGROUND SLIDER ================= */
const HeroBgSlider = () => {
  const images = [ceo1, ceo2, ceo3, ceo4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

/* ================= RESPONSIVE FLOATING AD ================= */
const SpecialOfferAd = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: 1, duration: 0.6, type: "spring" }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:bottom-8 md:right-8 z-50 md:w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer border-2 md:border-4 border-[#E8D461] group"
      onClick={onClick}
    >
      {/* Close Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
        className="absolute top-2 right-2 z-20 bg-black/60 text-white p-1.5 rounded-full hover:bg-black transition-colors"
      >
        <X size={16} />
      </button>

      <div className="flex md:block h-24 md:h-auto">
        {/* Image Area - Smaller on mobile */}
        <div className="relative w-1/3 md:w-full md:h-48 overflow-hidden shrink-0">
          <img 
            src={ceo4} 
            alt="German Bundle Offer" 
            className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/80 to-transparent" />
          <div className="hidden md:block absolute bottom-3 left-3 text-white">
            <p className="font-bold text-lg leading-none">A1 + A2 Bundle</p>
            <p className="text-xs text-gray-300">Master the basics</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-3 bg-white">
          <div className="text-left w-full md:w-auto">
            <div className="md:hidden text-xs font-bold text-red-600 mb-0.5">LIMITED OFFER</div>
            <p className="text-gray-900 font-black text-lg md:text-xl leading-tight">15% OFF</p>
            <p className="text-xs text-gray-500">A1+A2 German Bundle</p>
          </div>
          <div className="hidden md:block bg-[#E8D461] p-2 rounded-full text-gray-900 group-hover:rotate-45 transition-transform">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= COUNTER ================= */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start;
    const animate = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ================= MAIN HOME COMPONENT ================= */
const Home = () => {
  const [offsetY, setOffsetY] = useState(0);

  // --- DISCOUNT & WHATSAPP LOGIC ---
  const [discount, setDiscount] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const discountRef = useRef(null);
  
  const phoneNumber = "201062541086"; 

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const savedDiscount = localStorage.getItem('dwa_german_discount');
    if (savedDiscount) {
      setDiscount(JSON.parse(savedDiscount));
    }
  }, []);

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const revealDiscount = () => {
    if (discount || localStorage.getItem('dwa_german_discount') || isProcessing) return;

    setIsProcessing(true);
    
    setTimeout(() => {
      const newDiscount = { code: 'GERMAN15', label: '15% OFF Bundle' };
      setDiscount(newDiscount);
      localStorage.setItem('dwa_german_discount', JSON.stringify(newDiscount));
      setIsProcessing(false);
      triggerConfetti();
    }, 2000);
  };

  const getWhatsAppLink = (code) => {
    const message = `Hello DWA Team, I unlocked the discount code *${code}* on your website. I would like to register for the A1+A2 German Bundle.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const scrollToDiscount = () => {
    discountRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { n: 1000, s: '+', l: 'Active Learners', t: 'Growing daily' },
    { n: 4.8, s: '/5', l: 'Student Rating', t: 'Highly rated' },
    { n: 15, s: '+', l: 'Instructors', t: 'Native speakers' },
    { n: 5, s: '', l: 'Levels', t: 'A1 to C1' },
  ];

  const features = [
    { icon: BookOpen, title: 'Expert-Led Courses', desc: 'Learn directly from native German speakers.' },
    { icon: Users, title: 'Community Learning', desc: 'Join a supportive community worldwide.' },
    { icon: Award, title: 'Industry Recognized', desc: 'Earn respected language certifications.' },
    { icon: Zap, title: 'Flexible Learning', desc: 'Study at your own pace, anywhere.' },
  ];

  return (
    <div className="relative bg-white overflow-hidden font-sans">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100dvh] flex items-center pt-16 pb-12 md:pt-0 md:pb-0">
        <HeroBgSlider />
        
        <SpecialOfferAd onClick={scrollToDiscount} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
              Master <span className="text-[#E8D461]">German</span> With Confidence
            </h1>

            <p className="text-base md:text-xl text-gray-100 max-w-xl mx-auto md:mx-0 md:border-l-4 md:border-[#E8D461] md:pl-6 leading-relaxed">
              Die Welle Akademie is your gateway to fluent German. Expert tutors, flexible schedules.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-[#E8D461] transition shadow-lg text-center"
              >
                Get Started
              </Link>
              <button
                onClick={scrollToDiscount}
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/80 backdrop-blur-sm rounded-full font-bold hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
              >
                <Gift size={20} />
                {discount ? "View Code" : "Get 15% Off"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <div className="text-center px-4 py-16 md:py-20">
        <p className="text-xl md:text-2xl text-gray-800 italic font-medium max-w-3xl mx-auto leading-relaxed">
          "Learning German with Die Welle Akademie transforms not just your language skills, but your career opportunities."
        </p>
      </div>

      {/* ================= STATS SECTION ================= */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <img
          src={home1}
          alt="Background"
          className="absolute inset-0 w-full h-[150%] object-cover opacity-90"
          style={{ transform: `translateY(${offsetY * 0.1}px)`, top: '-20%' }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-black text-[#E8D461] mb-2">
                <Counter end={s.n} suffix={s.s} />
              </p>
              <p className="text-white font-bold text-lg md:text-xl">{s.l}</p>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide">{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPACER ================= */}
      <div className="h-4 bg-gray-50"></div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Why Choose <span className="text-red-700 relative inline-block">
              DWA?
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#E8D461] -z-10 opacity-60"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Excellence in German education tailored for your success.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-8 bg-white shadow-xl rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-700">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= DISCOUNT REVEAL SECTION (MOBILE OPTIMIZED) ================= */}
      <section ref={discountRef} className="py-20 px-4 md:px-6 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-[#E8D461]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative z-10">
          <div className="inline-block bg-red-600 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg mb-6">
            A1 + A2 BUNDLE OFFER
          </div>

          <div className="flex justify-center mb-6">
             <div className="p-4 bg-white/10 rounded-full">
               <GraduationCap size={48} className="text-[#E8D461]" />
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">
            Start Your German Journey
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed">
            {discount 
              ? "Code unlocked! Send it to us on WhatsApp to register."
              : "Tap below to reveal your 15% discount code and register directly via WhatsApp."
            }
          </p>

          <AnimatePresence mode="wait">
            {!discount ? (
              <motion.button
                key="reveal-btn"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={revealDiscount}
                disabled={isProcessing}
                className="w-full md:w-auto group relative px-8 py-5 bg-white text-gray-900 rounded-xl md:rounded-2xl font-bold text-lg shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] active:scale-95 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isProcessing ? <Loader2 className="animate-spin" /> : <Ticket className="text-red-600" />}
                  {isProcessing ? 'Generating...' : 'Reveal My Discount'}
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="code-revealed"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[#E8D461] text-gray-900 p-6 md:p-10 rounded-2xl md:rounded-3xl max-w-md mx-auto shadow-2xl"
              >
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest mb-3 opacity-80">Your Discount Code</p>
                <div className="text-4xl md:text-5xl font-black mb-6 tracking-tighter bg-white/40 rounded-xl py-4 border-2 border-dashed border-gray-900/10">
                  {discount.code}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm font-bold mb-4">
                    <CheckCircle size={18} /> Valid for One-Time Use
                  </div>

                  <a 
                    href={getWhatsAppLink(discount.code)}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg active:scale-95"
                  >
                    <MessageCircle size={24} className="text-[#25D366]" />
                    Send via WhatsApp
                  </a>
                  
                  <p className="text-[10px] md:text-xs font-medium opacity-70">
                    Opens WhatsApp with your code pre-filled.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="relative py-24 md:py-32 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${home2})`,
            transform: `translateY(${offsetY * 0.1}px)`,
            top: '-40%',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 space-y-8 px-4">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Ready to <span className="text-[#E8D461] italic">Transform?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-[#E8D461] transition-colors shadow-xl"
          >
            Contact Us <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ================= BOTTOM SPACER ================= */}
      <div className="h-12 bg-white"></div>
    </div>
  );
};

export default Home;