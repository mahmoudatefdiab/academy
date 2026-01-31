import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Clock,
  CheckCircle,
  BookOpen,
  MessageCircle,
  Award,
  Briefcase,
  Monitor,
  Rocket,
  Phone,
  ArrowRight,
  X,
} from 'lucide-react';

import courseimg from '../../assets/courses.png';
import book from '../../assets/books.png';
import calling from '../../assets/calling.png';
import microsoft from '../../assets/microsoft.png';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openSheet, setOpenSheet] = useState(false);
  

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpenSheet(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const courses = [
    {
      id: 'lang-a1',
      category: 'language',
      title: 'German A1 - Beginner',
      description: 'Start your journey here. Learn basic grammar and daily situations.',
      level: 'A1 | CEFR',
      duration: '8 weeks',
      students: '1,200+',
      rating: 4.8,
      highlights: ['Alphabet & Pronunciation', 'Basic Grammar', 'Daily Life Vocab'],
      icon: BookOpen,
      backgroundImage: book,
    },
    {
      id: 'lang-a2',
      category: 'language',
      title: 'German A2 - Elementary',
      description: 'Build upon basics. Understand frequently used expressions.',
      level: 'A2 | CEFR',
      duration: '8 weeks',
      students: '95+',
      rating: 4.9,
      highlights: ['Past Tense Mastery', 'Simple Conversations', 'Work & Family'],
      icon: BookOpen,
            backgroundImage: book,

    },
    {
      id: 'lang-b1',
      category: 'language',
      title: 'German B1 - Intermediate',
      description: 'The threshold to independence. Deal with travel and work.',
      level: 'B1 | CEFR',
      duration: '10 weeks',
      students: '85+',
      rating: 4.9,
      highlights: ['Complex Sentences', 'Expressing Opinions', 'Writing Reports'],
      icon: BookOpen,
            backgroundImage: book,

    },
    {
      id: 'lang-b2',
      category: 'language',
      title: 'German B2 - Upper Int.',
      description: 'Achieve fluency. Understand complex texts and interact spontaneously.',
      level: 'B2 | CEFR',
      duration: '10 weeks',
      students: '72+',
      rating: 4.8,
      highlights: ['Technical Discussions', 'Advanced Grammar', 'Professional Fluency'],
      icon: BookOpen,
            backgroundImage: book,

    },
    {
      id: 'lang-c1',
      category: 'language',
      title: 'German C1 - Advanced',
      description: 'Master the language. Express yourself fluently and spontaneously.',
      level: 'C1 | CEFR',
      duration: '12 weeks',
      students: '15+',
      rating: 4.9,
      highlights: ['Academic Proficiency', 'Nuanced Expression', 'Literature Analysis'],
      icon: BookOpen,
            backgroundImage: book,

    },
    {
      id: 'conv-a2',
      category: 'conversation',
      title: 'Conversation A2',
      description: 'Break the silence. Focus purely on speaking and listening.',
      level: 'A2 Level',
      duration: '4 weeks',
      students: '60+',
      rating: 4.8,
      highlights: ['Pronunciation Fixes', 'Roleplay Scenarios', 'Active Listening'],
      icon: MessageCircle,
            backgroundImage: book,

    },
    {
      id: 'conv-b1',
      category: 'conversation',
      title: 'Conversation B1',
      description: 'Discuss and debate. Move beyond basics into personal experiences.',
      level: 'B1 Level',
      duration: '4 weeks',
      students: '50+',
      rating: 4.8,
      highlights: ['Debate Skills', 'Current Events', 'Spontaneous Speech'],
      icon: MessageCircle,
            backgroundImage: book,

    },
    {
      id: 'conv-b2',
      category: 'conversation',
      title: 'Conversation B2',
      description: 'Professional articulation. Refine your speaking for workplace.',
      level: 'B2 Level',
      duration: '4 weeks',
      students: '14+',
      rating: 4.9,
      highlights: ['Business Contexts', 'Idiomatic Expressions', 'Accent Reduction'],
      icon: MessageCircle,
            backgroundImage: book,

    },
    {
      id: 'exam-prep',
      category: 'exam',
      title: 'Exam Prep (Goethe/TELC)',
      description: 'Targeted preparation for official certification exams.',
      level: 'All Levels',
      duration: '6-8 weeks',
      students: '29+',
      rating: 4.9,
      highlights: ['Mock Exams', 'Time Management', 'Module Drill'],
      icon: Award,
            backgroundImage: book,

    },
    {
      id: 'career-cs',
      category: 'career',
      title: 'German Customer Service',
      description: 'Specialized training for German speaking roles & interview prep.',
      level: 'B1+ Required',
      duration: 'Intensive',
      students: '32+',
      rating: 4.8,
      highlights: ['Interview Coaching', 'CS Soft Skills', 'Job Placement'],
      icon: Rocket,
            backgroundImage: calling,

    },
    {
      id: 'career-tech',
      category: 'career',
      title: 'M365 Technical Support',
      description: 'Master M365 fundamentals to land technical support roles.',
      level: 'B1+ Required',
      duration: 'Intensive',
      students: '20+',
      rating: 4.9,
      highlights: ['M365 Fundamentals', 'Troubleshooting', 'Tech Vocabulary'],
      icon: Monitor,
            backgroundImage: microsoft,

    },
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'language', label: 'Language' },
    { id: 'conversation', label: 'Conversation' },
    { id: 'exam', label: 'Exam Prep' },
    { id: 'career', label: 'Career & Tech' },
  ];

  const filteredCourses =
    selectedCategory === 'all' ? courses : courses.filter((course) => course.category === selectedCategory);

  const handleEnroll = (course) => {
 
    setOpenSheet(true);
  };

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={courseimg}
            alt="Courses background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600/20 to-red-600/10 backdrop-blur-md border border-red-600/40 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="text-red-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                  Level Assessment Coming Soon
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Elevate Your <br className="hidden md:block" />
                <span className="text-[#E8D461] block md:inline">Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
                Master the German language with industry-leading experts. From A1 basics to professional career tracks. Join thousands of successful learners.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8D461] text-gray-900 rounded-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E8D461] focus:ring-offset-2"
              >
                Start Learning Today <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="relative z-20 -mt-12 md:-mt-16 px-4 md:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100/50">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    selectedCategory === cat.id
                      ? 'bg-gray-900 text-[#E8D461] shadow-lg scale-105 focus:ring-[#E8D461]'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
                  }`}
                  aria-pressed={selectedCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Courses' : categories.find((c) => c.id === selectedCategory)?.label}
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Choose from {filteredCourses.length} carefully designed course{filteredCourses.length !== 1 ? 's' : ''} to match your learning goals.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="group relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-red-600/30 focus-within:ring-2 focus-within:ring-red-600"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: `fadeInUp 0.6s ease-out forwards`,
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${course.backgroundImage})` }}
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/40   group-hover:backdrop-blur-xl transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-6 md:p-7">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-4 w-fit">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs md:text-sm font-bold">
                        {course.level}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="mb-6">
                      <div className="inline-flex p-3 bg-red-100 text-red-600 rounded-xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {course.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-300/50">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        <span className="text-xs text-gray-600">({course.students})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock size={16} />
                        <span className="text-sm font-semibold">{course.duration}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 space-y-2">
                      {course.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                      {course.highlights.length > 2 && (
                        <span className="text-xs text-gray-500 ml-6">+{course.highlights.length - 2} more</span>
                      )}
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => handleEnroll(course)}
                        className="w-full py-3 md:py-4 bg-red-600 text-white font-bold rounded-xl md:rounded-2xl hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                      >
                        Enroll Now
                      </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No courses found in this category.</p>
            </div>
          )}
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* ================= CAREER SECTION ================= */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden p-8 md:p-16 lg:p-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8D461]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6">
                <Briefcase className="text-[#E8D461]" size={24} />
                <span className="text-[#E8D461] font-bold text-sm md:text-base tracking-widest uppercase">
                  Career Acceleration
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Work in <span className="text-[#E8D461]">Germany?</span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Join our intensive career tracks designed for professionals. We provide the technical training, language skills, and job placement support needed to land your dream role in a German-speaking company.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#E8D461] text-gray-900 rounded-xl md:rounded-2xl font-black hover:bg-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E8D461] focus:ring-offset-2"
                >
                  <Rocket size={20} />
                  Apply for Career Track
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-gray-700 text-white rounded-xl md:rounded-2xl font-bold hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-gray-700">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#E8D461]">85%</p>
                  <p className="text-gray-400 text-sm md:text-base mt-2">Job Placement Rate</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#E8D461]">12+</p>
                  <p className="text-gray-400 text-sm md:text-base mt-2">Partner Companies</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#E8D461]">450+</p>
                  <p className="text-gray-400 text-sm md:text-base mt-2">Graduates Placed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENROLLMENT MODAL ================= */}
      {openSheet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={() => setOpenSheet(false)} />
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-bold text-center mb-8">Ready to Start?</h3>
            
            <div className="space-y-4">
              <Link to="/apply-form" className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:opacity-90 transition-opacity">
                <MessageCircle size={20}/> Enroll via WhatsApp
              </Link>
              <a href="tel:201062541086" className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors">
                <Phone size={20}/> Direct Call
              </a>
            </div>

            <button onClick={() => setOpenSheet(false)} className="w-full mt-6 text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors">
              Maybe Later
            </button>
          </div>
        </div>
      )} 
    
    </div>
  );
};

// Import Mail icon if not already imported
import { Mail } from 'lucide-react';

export default Courses;