import React, { useState } from "react";
import applyphoto from '../../assets/applyphoto.png';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // نص الرسالة اللي هتتبعت على واتساب
    const message = `Hello, I want to apply for a course  :)\n
My Name: ${formData.name}\n
Phone: ${formData.phone}\n
Email: ${formData.email}\n
Course: ${formData.course}`;

    // رقم واتسابك (خلي الرقم كامل مع كود الدولة بدون + أو 0)
    const phoneNumber = "201062541086";

    // افتح واتساب برابط الرسالة
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // مسح الفورم بعد الإرسال
    setFormData({ name: "", phone: "", email: "", course: "" });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* الخلفية + Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img src={applyphoto} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-red-900/80 to-[#E8D461]/30"></div>
      </div>

      {/* الفورم */}
      <div className="relative z-10 w-full max-w-md bg-white/70 rounded-4xl shadow-x44 p-5">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Application Form</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1">Full Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-bold text- mb-1">Phone Number</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="+20..." />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address(optional)</label>
            <input type="email" name="email"   value={formData.email} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="example@email.com" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Course you want to enroll</label>
            <select name="course" required value={formData.course} onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600">
              <option value="">Select a course</option>
              <option value="German A1 - Beginner">German A1 - Beginner</option>
              <option value="German A2 - Elementary">German A2 - Elementary</option>
              <option value="German B1 - Intermediate">German B1 - Intermediate</option>
              <option value="German B2 - Upper Intermediate">German B2 - Upper Intermediate</option>
              <option value="Conversation A2">Conversation A2</option>
              <option value="Conversation B1">Conversation B1</option>
              <option value="Exam Prep">Exam Prep (Goethe, TELC, ÖSD)</option>
              <option value="German Customer Service">German Customer Service</option>
              <option value="Microsoft 365 Technical Support">Microsoft 365 Technical Support</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-bold shadow-lg">
            Submit & Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
