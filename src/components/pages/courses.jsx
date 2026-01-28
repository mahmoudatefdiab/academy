import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, CheckCircle, BookOpen, MessageCircle, Award, Briefcase, Monitor, Rocket } from 'lucide-react'
import courseimg from '../../assets/courses.png';
import ApplyForm from "./ApplyForm.jsx";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
const [openSheet, setOpenSheet] = useState(false)

  const courses = [
    // --- German Language Courses (CEFR) ---
    {
      id: 'lang-a1',
      category: 'language',
      title: "German A1 - Beginner",
      description: "Start your journey here. Learn the alphabet, basic grammar, and how to introduce yourself and handle simple daily situations.",
      level: "A1 | CEFR",
      duration: "8 weeks",
      students: 2400,
      rating: 4.8,
      highlights: ["Alphabet & Pronunciation", "Basic Grammar Structure", "Daily Life Vocabulary"],
      icon: BookOpen
    },
    {
      id: 'lang-a2',
      category: 'language',
      title: "German A2 - Elementary",
      description: "Build upon your basics. Understand frequently used expressions related to areas of most immediate relevance.",
      level: "A2 | CEFR",
      duration: "8 weeks",
      students: 1900,
      rating: 4.7,
      highlights: ["Past Tense Mastery", "Simple Conversations", "Work & Family Topics"],
      icon: BookOpen
    },
    {
      id: 'lang-b1',
      category: 'language',
      title: "German B1 - Intermediate",
      description: "The threshold to independence. Deal with most situations likely to arise whilst travelling in an area where the language is spoken.",
      level: "B1 | CEFR",
      duration: "10 weeks",
      students: 1600,
      rating: 4.8,
      highlights: ["Complex Sentences", "Expressing Opinions", "Writing Reports"],
      icon: BookOpen
    },
    {
      id: 'lang-b2',
      category: 'language',
      title: "German B2 - Upper Intermediate",
      description: "Achieve fluency. Understand the main ideas of complex text and interact with a degree of fluency and spontaneity.",
      level: "B2 | CEFR",
      duration: "10 weeks",
      students: 1200,
      rating: 4.9,
      highlights: ["Technical Discussions", "Advanced Grammar", "Professional Fluency"],
      icon: BookOpen
    },
    {
      id: 'lang-c1',
      category: 'language',
      title: "German C1 - Advanced",
      description: "Master the language. Express yourself fluently and spontaneously without much obvious searching for expressions.",
      level: "C1 | CEFR",
      duration: "12 weeks",
      students: 850,
      rating: 4.9,
      highlights: ["Academic Proficiency", "Nuanced Expression", "Literature Analysis"],
      icon: BookOpen
    },

    // --- Conversation Courses ---
    {
      id: 'conv-a2',
      category: 'conversation',
      title: "Conversation A2",
      description: "Break the silence. Focus purely on speaking and listening skills to get comfortable with basic interactions.",
      level: "A2 Level",
      duration: "4 weeks",
      students: 500,
      rating: 4.8,
      highlights: ["Pronunciation Fixes", "Roleplay Scenarios", "Active Listening"],
      icon: MessageCircle
    },
    {
      id: 'conv-b1',
      category: 'conversation',
      title: "Conversation B1",
      description: "Discuss and debate. Move beyond basics into discussing topics, news, and personal experiences.",
      level: "B1 Level",
      duration: "4 weeks",
      students: 650,
      rating: 4.8,
      highlights: ["Debate Skills", "Current Events", "Spontaneous Speech"],
      icon: MessageCircle
    },
    {
      id: 'conv-b2',
      category: 'conversation',
      title: "Conversation B2",
      description: "Professional articulation. Refine your speaking for workplace environments and complex social situations.",
      level: "B2 Level",
      duration: "4 weeks",
      students: 400,
      rating: 4.9,
      highlights: ["Business Contexts", "Idiomatic Expressions", "Accent Reduction"],
      icon: MessageCircle
    },
    {
      id: 'conv-c1',
      category: 'conversation',
      title: "Conversation C1",
      description: "Near-native fluency. Engage in high-level intellectual discussions and presentations.",
      level: "C1 Level",
      duration: "4 weeks",
      students: 300,
      rating: 5.0,
      highlights: ["Rhetorical Skills", "Academic Discourse", "Cultural Depth"],
      icon: MessageCircle
    },

    // --- Exam Prep ---
    {
      id: 'exam-prep',
      category: 'exam',
      title: "Exam Prep (Goethe, TELC, ÖSD)",
      description: "Targeted preparation for official certification exams. Strategies, mock tests, and intensive practice.",
      level: "All Levels",
      duration: "6-8 weeks",
      students: 1100,
      rating: 4.9,
      highlights: ["Real Mock Exams", "Time Management", "Speaking Module Drill"],
      icon: Award
    },

    // --- Career & Technical ---
    {
      id: 'career-cs',
      category: 'career',
      title: "German Customer Service (Train to Hire)",
      description: "Your gateway to a career. Specialized training for German speaking roles in customer service, including interview prep.",
      level: "B1+ Required",
      duration: "Intensive",
      students: 2100,
      rating: 4.9,
      highlights: ["Interview Coaching", "CS Soft Skills", "Job Placement Support"],
      icon: Rocket
    },
    {
      id: 'career-tech',
      category: 'career',
      title: "Microsoft 365 Technical Support",
      description: "Combine language with technical skills. Master M365 fundamentals to land technical support roles.",
      level: "B1+ Required",
      duration: "Intensive",
      students: 900,
      rating: 4.8,
      highlights: ["M365 Fundamentals", "Troubleshooting", "Tech Vocabulary"],
      icon: Monitor
    }
  ]

  // Filter Logic
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  // Helper for category buttons
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'language', label: 'German courses' },
    { id: 'conversation', label: 'Conversation' },
    { id: 'exam', label: 'Exam Prep' },
    { id: 'career', label: 'Career & Tech' },
  ]

  return (
    <div className="bg-white font-sans">
      {/* Hero - German Gradient */}
       <section className="relative py-24 shadow-xl overflow-hidden">
           
           {/* --- BACKGROUND IMAGE START --- */}
           <div className="absolute inset-0 w-full h-full">
             {/* The Image */}
             <img 
               src={courseimg} 
               alt="Background" 
               className="w-full h-full object-cover"
             />
             
             {/* The Overlay (Crucial for text readability) */}
             {/* This creates a dark fade from Left (Black) to Right (Transparent Gold) */}
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-red-900/80 to-[#E8D461]/30"></div>
              </div>
             {/* --- BACKGROUND IMAGE END --- */}
              {/* Decorative pattern (Optional - keeps the texture from before) */}
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0"></div>
     
               {/* Content (Your existing text code) */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
             <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
our courses!             </h1>
             <p className="text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              All you need in one place.
               <span className="block text-[#E8D461] mt-2 font-bold text-shadow-sm">Quality. Community. Innovation.</span>
             </p>
           </div>
     
           {/* Decorative separator at bottom */}
           <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E8D461]"></div>
       
        
             
     
             {/* Decorative separator */}
             <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E8D461]"></div>
           </section>
     
           {/* Mission Section */}
            
     

      {/* Filter Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
                selectedCategory === cat.id
                  ? 'bg-red-700 text-white ring-2 ring-red-700 ring-offset-2'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#E8D461] hover:text-[#E8D461]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => {
            const IconComponent = course.icon
            return (
              <div key={course.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col relative">
                
                {/* Card Header - Mini German Flag Gradient */}
                <div className="h-2 bg-gradient-to-r from-gray-900 via-red-700 to-[#E8D461]"></div>
                
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gray-900 rounded-xl text-[#E8D461] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={32} />
                    </div>
              {/*      <span className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 rounded-full font-bold text-xs flex items-center gap-1">
 <Clock size={12} className="text-red-700"/> {course.duration}                    </span>*/} 
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow border-l-2 border-[#E8D461] pl-4">
                    {course.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="bg-gray-50 p-5 rounded-xl mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-xs uppercase tracking-wider">Course Highlights</h4>
                    <ul className="space-y-2.5">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-red-700 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Info */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-5">
                    <div className="text-sm font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {course.level}
                    </div>
                   
                  </div>

                  {/* Action Button */}
                   <button
  onClick={() => setOpenSheet(true)}
  className="w-fit mx-auto px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-lg"
>
  Enroll Now
</button>

                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Career Track CTA - Dark Theme */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        {/* Decorative Gold Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8D461]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Briefcase size={48} className="mx-auto text-[#E8D461] mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white mb-6">Looking for a Job in German?</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Our <strong className="text-red-500">Train to Hire</strong> and <strong className="text-red-500">Technical Support</strong> tracks are designed to get you hired. 
            We don't just teach you the language; we prepare you for the interview and the job market.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-[#E8D461] text-gray-900 rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300 font-bold shadow-xl flex items-center gap-2 transform hover:-translate-y-1"
            >
              Apply for Career Track <Rocket size={18}/>
            </Link>
          </div>
        </div>
      </section>
     {openSheet && (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setOpenSheet(false)}
    />

    {/* Popup */}
    <div className="relative w-full sm:w-[380px] bg-white/90 rounded-t-2xl sm:rounded-4xl p-6 shadow-4xl animate-slideUp">
      <h3 className="text-lg font-bold text-center mb-5">
        Choose how to enroll
      </h3>

      <Link
  to="/apply-form"
  className="block w-full py-3 mb-3 bg-green-600 text-white rounded-xl text-center font-bold"
>
  Enroll via WhatsApp
</Link>


     <Link
  to="tel:201062541086"
  className="block w-full py-3 bg-gray-900 text-white rounded-xl text-center font-bold"
>
  Call us
</Link>


      <button
        onClick={() => setOpenSheet(false)}
        className="block mx-auto mt-4 text-sm text-gray-500 hover:text-gray-700"
      >
        Close
      </button>
    </div>
  </div>
)}


    </div>
  )
}

export default Courses