import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, CheckCircle, BookOpen, MessageCircle, Award, Briefcase, Monitor, Rocket, Phone, ArrowRight } from 'lucide-react';
import courseimg from '../../assets/courses.png';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openSheet, setOpenSheet] = useState(false);

  const courses = [
    { id: 'lang-a1', category: 'language', title: "German A1 - Beginner", description: "Start your journey here. Learn basic grammar and daily situations.", level: "A1 | CEFR", duration: "8 weeks", highlights: ["Alphabet & Pronunciation", "Basic Grammar", "Daily Life Vocab"], icon: BookOpen },
    { id: 'lang-a2', category: 'language', title: "German A2 - Elementary", description: "Build upon basics. Understand frequently used expressions.", level: "A2 | CEFR", duration: "8 weeks", highlights: ["Past Tense Mastery", "Simple Conversations", "Work & Family"], icon: BookOpen },
    { id: 'lang-b1', category: 'language', title: "German B1 - Intermediate", description: "The threshold to independence. Deal with travel and work.", level: "B1 | CEFR", duration: "10 weeks", highlights: ["Complex Sentences", "Expressing Opinions", "Writing Reports"], icon: BookOpen },
    { id: 'lang-b2', category: 'language', title: "German B2 - Upper Int.", description: "Achieve fluency. Understand complex texts and interact spontaneously.", level: "B2 | CEFR", duration: "10 weeks", highlights: ["Technical Discussions", "Advanced Grammar", "Professional Fluency"], icon: BookOpen },
    { id: 'lang-c1', category: 'language', title: "German C1 - Advanced", description: "Master the language. Express yourself fluently and spontaneously.", level: "C1 | CEFR", duration: "12 weeks", highlights: ["Academic Proficiency", "Nuanced Expression", "Literature Analysis"], icon: BookOpen },
    { id: 'conv-a2', category: 'conversation', title: "Conversation A2", description: "Break the silence. Focus purely on speaking and listening.", level: "A2 Level", duration: "4 weeks", highlights: ["Pronunciation Fixes", "Roleplay Scenarios", "Active Listening"], icon: MessageCircle },
    { id: 'conv-b1', category: 'conversation', title: "Conversation B1", description: "Discuss and debate. Move beyond basics into personal experiences.", level: "B1 Level", duration: "4 weeks", highlights: ["Debate Skills", "Current Events", "Spontaneous Speech"], icon: MessageCircle },
    { id: 'conv-b2', category: 'conversation', title: "Conversation B2", description: "Professional articulation. Refine your speaking for workplace.", level: "B2 Level", duration: "4 weeks", highlights: ["Business Contexts", "Idiomatic Expressions", "Accent Reduction"], icon: MessageCircle },
    { id: 'exam-prep', category: 'exam', title: "Exam Prep (Goethe/TELC)", description: "Targeted preparation for official certification exams.", level: "All Levels", duration: "6-8 weeks", highlights: ["Mock Exams", "Time Management", "Module Drill"], icon: Award },
    { id: 'career-cs', category: 'career', title: "German Customer Service", description: "Specialized training for German speaking roles & interview prep.", level: "B1+ Required", duration: "Intensive", highlights: ["Interview Coaching", "CS Soft Skills", "Job Placement"], icon: Rocket },
    { id: 'career-tech', category: 'career', title: "M365 Technical Support", description: "Master M365 fundamentals to land technical support roles.", level: "B1+ Required", duration: "Intensive", highlights: ["M365 Fundamentals", "Troubleshooting", "Tech Vocabulary"], icon: Monitor },
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'language', label: 'Language' },
    { id: 'conversation', label: 'Conversation' },
    { id: 'exam', label: 'Exam Prep' },
    { id: 'career', label: 'Career & Tech' },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="bg-[#fcfcfc] font-sans min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={courseimg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
          <div className="inline-block px-4 py-1.5 mb-6 bg-red-600/20 backdrop-blur-md border border-red-600/30 rounded-full">
             <span className="text-red-500 text-sm font-bold tracking-widest  ">coming soon! Test your Level</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Elevate Your <br/> <span className="text-[#E8D461]">Future.</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            Master the German language with industry-leading experts. 
            From A1 basics to professional career tracks.
          </p>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-500 ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-[#E8D461] shadow-lg scale-105'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- COURSES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
       {/* Tiny Courses Grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {filteredCourses.map((course) => {
    const Icon = course.icon;

    return (
      <div
        key={course.id}
        className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg text-red-600">
            <Icon size={18} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-tight">
              {course.title}
            </h4>
            <span className="text-xs text-gray-400">
              {course.duration}
            </span>
          </div>
        </div>

        {/* Right */}
        <button
          onClick={() => setOpenSheet(true)}
          className="text-xs font-bold text-red-600 hover:text-black transition"
        >
          Enroll →
        </button>
      </div>
    );
  })}
</div>

      </section>

      {/* --- CAREER CTA --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8D461]/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to work in Germany?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Join our intensive career tracks. We provide the technical training and language skills needed to land your dream job.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#E8D461] text-gray-900 px-10 py-5 rounded-2xl font-black hover:bg-white transition-all transform hover:scale-105 shadow-xl">
              APPLY FOR CAREER TRACK <Rocket size={20}/>
            </Link>
          </div>
        </div>
      </section>

      {/* --- ENROLLMENT POPUP --- */}
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

export default Courses;