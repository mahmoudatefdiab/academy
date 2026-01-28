import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import mostafaImg from '../../assets/mostafa.jpg';
import mahmoudImg from '../../assets/mahmoudeid.jpeg';
import danaImg from '../../assets/6.jpeg';
import nouranImg from '../../assets/mahmoudeid.jpeg';
import sohilaImg from '../../assets/6.jpeg';
import naghemImg from '../../assets/2.jpg';
import teamimg from '../../assets/8.jpeg';
import aboutBg from '../../assets/peoplelearning.jpeg';
const About = () => {
  // German Flag Color Palette Reference:
  // Black: gray-900
  // Red: red-700 (a deep, professional red)
  // Gold: #E8D461 (existing gold)

  const team = [
    {
      name: "Mostafa Sobhy",
      role: "Academy Director & Founder",
      description: "7+ years in German language education ",
      Image: mostafaImg
    },
    {
      name: "Mahmoud Eid",
      role: "Curriculum Lead",
      description: "Expert in modern language teaching methods",
      Image: mahmoudImg
    },
    {
      name: "Dana",
      role: "Head of Community",
      description: "Native speaker with international experience",
      Image: danaImg
    },
    {
      name: "Nouran",
      role: "Senior Instructor",
      description: "Native speaker with international experience",
      Image: nouranImg
    },
    {
      name: " Sohila Yasser",
      role: "Senior Instructor",
      description: "Native speaker with international experience",
      Image: sohilaImg
    },
    {
      name: " Naghem  Alsawaf",
      role: "Senior Instructor",
      description: "Native speaker with international experience",
      Image: naghemImg
    }
  ]

  // Testimonials data remains but is not used in the JSX provided in the prompt.
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student, USA",
      text: "Die Welle transformed my German learning journey. The instructors are incredibly knowledgeable and supportive!",
      rating: 5
    },
    {
      name: "Marco Rossi",
      role: "Professional, Italy",
      text: "I joined to improve my business German and exceeded my expectations. Highly recommended for professionals.",
      rating: 5
    },
    {
      name: "Emma Chen",
      role: "Student, Singapore",
      text: "The interactive lessons and cultural approach made learning German enjoyable and effective.",
      rating: 5
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section - German Flag Gradient */}
     
    <section className="relative py-24 shadow-xl overflow-hidden">
      
      {/* --- BACKGROUND IMAGE START --- */}
      <div className="absolute inset-0 w-full h-full">
        {/* The Image */}
        <img 
          src={aboutBg} 
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
          About Die Welle Akademie
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Dedicated to excellence in German language education.
          <span className="block text-[#E8D461] mt-2 font-bold text-shadow-sm">Quality. Community. Innovation.</span>
        </p>
      </div>

      {/* Decorative separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E8D461]"></div>
  
   
        

        {/* Decorative separator */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E8D461]"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-100 px-4 py-2 rounded-full mb-4">
                <span className="text-red-700 font-bold uppercase tracking-wider text-sm">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed border-l-4 border-[#E8D461] pl-6">
              At Die Welle Akademie, we believe that learning German should be accessible, engaging, and effective. Our mission is to provide world-class education that empowers students to achieve fluency and confidence in the German language.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed pl-6">
              We combine traditional teaching methods with modern technology, creating an immersive learning environment where every student can thrive.
            </p>
          </div>
          
          {/* Image container themed with German colors */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-red-700 rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            <div className="relative bg-white p-2 rounded-3xl border-4 border-[#E8D461] shadow-2xl z-10 h-[400px] flex items-center justify-center overflow-hidden">
              <img 
                src={teamimg} 
                alt="Die Welle Team" 
                className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 relative relative">
        {/* Diagonal stripe background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent skew-y-3 transform -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
             <div className="w-24 h-1 bg-red-700 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Value Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-300 border-t-4 border-red-700 group">
              <div className="bg-[#E8D461]/20 p-4 rounded-full inline-block mb-6 group-hover:bg-[#E8D461] transition-colors duration-300">
                <CheckCircle className="text-[#E8D461] group-hover:text-white transition-colors duration-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Quality</h3>
              <p className="text-gray-600 leading-relaxed">We maintain the highest standards in curriculum development and instructor training.</p>
            </div>
            
            {/* Value Card 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-300 border-t-4 border-gray-900 group">
              <div className="bg-[#E8D461]/20 p-4 rounded-full inline-block mb-6 group-hover:bg-[#E8D461] transition-colors duration-300">
                <CheckCircle className="text-[#E8D461] group-hover:text-white transition-colors duration-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Community</h3>
              <p className="text-gray-600 leading-relaxed">We foster a supportive environment where students learn together and grow together.</p>
            </div>
            
            {/* Value Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-300 border-t-4 border-red-700 group">
               <div className="bg-[#E8D461]/20 p-4 rounded-full inline-block mb-6 group-hover:bg-[#E8D461] transition-colors duration-300">
                <CheckCircle className="text-[#E8D461] group-hover:text-white transition-colors duration-300" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">We continuously evolve our teaching methods to incorporate the latest language learning research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
             <p className="text-xl text-gray-600 mt-4">The experts behind your success</p>
          </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:border-red-200">
              
              <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden p-1 bg-gradient-to-tr from-gray-900 to-red-700 group-hover:from-[#E8D461] group-hover:to-red-500 transition-all duration-500">
                <img
                  src={member.Image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-700 transition-colors">{member.name}</h3>
              
              <div className="inline-block bg-[#E8D461]/10 px-4 py-1 rounded-full mb-4">
                 <p className="text-red-700 font-bold text-sm tracking-wide">{member.role}</p>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>  
      </section>
 
      {/* CTA Section - German Flag Gradient */}
      <section className="bg-gradient-to-r from-gray-900 via-red-700 to-[#E8D461] py-24 relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-700"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-900"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-md">Join Our Community</h2>
          <p className="text-gold-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">Ready to become part of Die Welle family and start your journey to fluency?</p>
          <Link 
            to="/contact"
            // Premium gold button with black text, hovering to white/red
            className="inline-block px-10 py-4 bg-[#E8D461] text-gray-900 text-lg rounded-full hover:bg-white hover:text-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About