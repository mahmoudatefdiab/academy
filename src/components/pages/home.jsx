import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Zap, ChevronLeft, ChevronRight, Globe, CheckCircle } from 'lucide-react';

import ceo1 from '../../assets/8.jpeg';
import ceo2 from '../../assets/7.jpeg';
import ceo3 from '../../assets/6.jpeg';
import ceo4 from '../../assets/5.jpeg';

/* ================= CEO SLIDER ================= */
const CeoSlider = () => {
  const images = [ceo1, ceo2, ceo3, ceo4];
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    images.forEach((img) => {
      const preload = new Image();
      preload.src = img;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl group border-4 border-gray-900"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="relative bg-gray-900 w-full h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="min-w-full flex-shrink-0 h-full flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Instructor ${idx + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>

      <button
        onClick={prevSlide}
        className="nav-button absolute left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-[#E8D461] p-2 rounded-full backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} className="text-white group-hover:text-gray-900" strokeWidth={3} />
      </button>

      <button
        onClick={nextSlide}
        className="nav-button absolute right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-[#E8D461] p-2 rounded-full backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} className="text-white group-hover:text-gray-900" strokeWidth={3} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIndex(idx);
              setIsAutoPlay(false);
            }}
            className={`slider-dot ${idx === index ? 'active bg-[#E8D461] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ================= COUNTER COMPONENT ================= */
const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const targetNumber = parseFloat(end.toString().replace(/[^0-9.]/g, '')) || 0;
  const isDecimal = end.toString().includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = targetNumber * easeOutQuad(percentage);

      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetNumber, duration]);

  const formattedCount = isDecimal 
    ? count.toFixed(1) 
    : Math.floor(count);

  return (
    <span ref={countRef}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

/* ================= HOME ================= */
const Home = () => {
  const [ , setHoveredFeature] = useState(null);

  // Features styled with German Flag Colors (Black, Red, Gold)
  const features = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from native German speakers with years of teaching experience",
      // Black Theme
      borderColor: "border-gray-900",
      iconColor: "text-gray-900",
      hoverBg: "group-hover:bg-gray-900",
      hoverText: "group-hover:text-white"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a supportive community of language learners worldwide",
      // Red Theme
      borderColor: "border-red-700",
      iconColor: "text-red-700",
      hoverBg: "group-hover:bg-red-700",
      hoverText: "group-hover:text-white"
    },
    {
      icon: Award,
      title: "Industry Recognized",
      description: "Earn certifications that employers and institutions respect",
      // Gold Theme
      borderColor: "border-[#E8D461]",
      iconColor: "text-[#d4c04d]", // Slightly darker gold for text visibility
      hoverBg: "group-hover:bg-[#E8D461]",
      hoverText: "group-hover:text-gray-900"
    },
    {
      icon: Zap,
      title: "Flexible Learning",
      description: "Study at your own pace with our flexible course structure",
      // Black/Red Mix
      borderColor: "border-gray-900",
      iconColor: "text-red-700",
      hoverBg: "group-hover:bg-gray-900",
      hoverText: "group-hover:text-white"
    },
  ];

  const stats = [
    { 
      number: "1000", 
      suffix: "+", 
      label: "Active Learners", 
      subtext: "Growing daily" 
    },
    { 
      number: "4.8", 
      suffix: "/5", 
      label: "Student Rating", 
      subtext: "Highly rated" 
    },
    { 
      number: "15", 
      suffix: "+", 
      label: " Instructors", 
      subtext: "Native speakers" 
    },
    { 
      number: "4", 
      label: "Course Levels", 
      subtext: "A1 to C1" 
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden font-sans">
      {/* Decorative Background Elements (German Flag Colors) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D461]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="hero-badge flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full border border-gray-200">
                  <Globe size={18} className="text-red-700" />
                  <span className="text-sm font-bold text-gray-900">
                    Learn German Online
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                  Master <span className="text-red-700 relative">
                    German
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E8D461]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                    </svg>
                  </span> With Confidence
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-medium border-l-4 border-[#E8D461] pl-6">
                  Die Welle Akademie is your gateway to fluent German. Expert instructors. Modern methods. Real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-[#E8D461] hover:text-gray-900 transition-all duration-300 font-bold shadow-lg">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/courses" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full hover:border-red-700 hover:text-red-700 transition-all duration-300 font-bold">
                  Explore Courses
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <CheckCircle size={16} className="text-[#E8D461]" /> Native German speakers
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <CheckCircle size={16} className="text-[#E8D461]" /> Certified instructors
                </div>
              </div>
            </div>

            {/* Right - Slider */}
            <div className="hidden md:block animate-slide-up">
              <CeoSlider />
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden mt-12 animate-slide-up">
            <CeoSlider />
          </div>
        </section>

        {/* ================= STATS SECTION (BLACK - FLAG TOP COLOR) ================= */}
        <section className="relative py-20 bg-gray-900 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
          
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8D461] via-red-700 to-gray-900"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition duration-300"
                >
                  <p className="stats-number flex justify-center items-center text-4xl md:text-5xl font-black text-[#E8D461] mb-2">
                    <Counter 
                      end={stat.number} 
                      suffix={stat.suffix || ''} 
                      duration={3000} 
                    />
                  </p>
                  <p className="font-bold text-white text-lg mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-sm font-medium">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= END OF STATS SECTION ================= */}

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="space-y-4 mb-16 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Why Choose <span className="text-red-700">DWA?</span>
            </h2>
            <div className="h-2 w-24 bg-[#E8D461] rounded-full md:mx-0 mx-auto mt-4"></div>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl pt-4">
              Everything you need to succeed in your German learning journey, built on quality and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`relative p-8 border-t-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group ${feature.borderColor} hover:-translate-y-2`}
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`mb-6 p-4 rounded-full bg-gray-50 w-fit ${feature.hoverBg} transition-colors duration-300`}>
                    <Icon className={`${feature.iconColor} ${feature.hoverText} transition-colors duration-300`} size={32} strokeWidth={2} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-700 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section - German Flag Gradient */}
        <section className="relative py-24 overflow-hidden">
            {/* The Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-red-700 to-[#E8D461]"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 text-white">
            <h2 className="text-5xl md:text-6xl font-black leading-tight drop-shadow-lg">
              Ready to <span className="text-[#E8D461] italic">Transform</span> Your German?
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
              Join thousands of successful students learning German with Die Welle Akademie. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-[#E8D461] hover:text-gray-900 transition-all duration-300 font-bold shadow-xl flex items-center justify-center gap-2"
              >
                <span>Contact Us Today</span>
                <ArrowRight size={20} />
              </Link>

              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-bold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="h-4 bg-gray-900 w-full"></section>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fadeInUp 0.8s ease-out 0.1s both; }
        .animate-slide-up { animation: slideUp 0.8s ease-out 0.2s both; }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .stats-number span {
          display: inline-block;
          min-width: 1ch;
        }
      `}</style>
    </div>
  );
};

export default Home;