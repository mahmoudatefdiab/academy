import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Zap } from 'lucide-react';

import ceo1 from '../../assets/8.jpeg';
import ceo2 from '../../assets/7.jpeg';
import ceo3 from '../../assets/6.jpeg';
import ceo4 from '../../assets/5.jpeg';
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

/* ================= COUNTER ================= */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ================= HOME ================= */
const Home = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stats = [
    { n: 1000, s: '+', l: 'Active Learners', t: 'Growing daily' },
    { n: 4.8, s: '/5', l: 'Student Rating', t: 'Highly rated' },
    { n: 15, s: '+', l: 'Instructors', t: 'Native speakers' },
    { n: 5, s: '', l: 'Course Levels', t: 'A1 to C1' },
  ];

  const features = [
    { icon: BookOpen, title: 'Expert-Led Courses', desc: 'Learn from native German speakers' },
    { icon: Users, title: 'Community Learning', desc: 'Join a supportive community worldwide' },
    { icon: Award, title: 'Industry Recognized', desc: 'Earn respected certifications' },
    { icon: Zap, title: 'Flexible Learning', desc: 'Study at your own pace' },
  ];

  return (
    <div className="relative bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center">
        <HeroBgSlider />

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-white">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Master <span className="text-[#E8D461]">German</span> With Confidence
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl border-l-4 border-[#E8D461] pl-6">
              Die Welle Akademie is your gateway to fluent German.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-[#E8D461] transition"
              >
                Get Started
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white rounded-full font-bold hover:text-[#E8D461] hover:border-[#E8D461] transition"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BIG SPACER BEFORE STATS ================= */}
<div className="text-center my-16">
  <p className="text-lg md:text-xl text-gray-700 italic max-w-2xl mx-auto">
    "Learning German with Die Welle Akademie transformed my career and confidence!"
  </p>
</div>

      {/* ================= STATS ================= */}
      <section className="relative py-20 overflow-hidden bg-white">
        <img
          src={home1}
          className="absolute inset-0 w-full h-[150%] object-cover"
          style={{ transform: `translateY(${offsetY * 0.15}px)`, top: '-40%' }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-black text-[#E8D461]">
                <Counter end={s.n} suffix={s.s} />
              </p>
              <p className="text-white font-bold">{s.l}</p>
              <p className="text-gray-400 text-sm">{s.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPACER AFTER STATS ================= */}
      <div className="h-2 bg-gray-50"></div>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-4 py-24 bg-gray-50">
        <h2 className="text-5xl font-black mb-16">
          Why Choose <span className="text-red-700">DWA?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="p-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
                <Icon size={32} className="text-red-700 mb-4" />
                <h3 className="font-bold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= SPACER AFTER FEATURES ================= */}
      <div className="h-24 bg-white"></div>

      {/* ================= CTA ================= */}
      <section className="relative py-28 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${home2})`,
            transform: `translateY(${offsetY * 0.1}px)`,
            top: '-40%',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 space-y-8">
          <h2 className="text-6xl font-black">
            Ready to <span className="text-[#E8D461] italic">Transform</span> Your German?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-[#E8D461]"
          >
            Contact Us <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ================= BOTTOM SPACER ================= */}
      <div className="h-24 bg-white"></div>
    </div>
  );
};

export default Home;
