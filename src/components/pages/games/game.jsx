import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, MessageCircle, CheckCircle, XCircle, Trophy, BarChart3 } from 'lucide-react';
import { wordBank } from './germanwords.js'; // استدعاء ملف الكلمات

const GermanGame = () => {
  const [gameState, setGameState] = useState('intro'); // intro, levelSelect, playing, result
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('');

  // WhatsApp Number
  const phoneNumber = "201062541086"; 

  // --- دالة اختيار 20 سؤال عشوائي ---
  const startGame = (level) => {
    setSelectedLevel(level);
    
    // فلترة الكلمات حسب المستوى
    let filteredWords = level === 'Mix' 
      ? wordBank 
      : wordBank.filter(item => item.level.includes(level[0])); // A1, A2, B1...

    // خلط الكلمات عشوائياً واختيار 20 فقط
    const shuffled = filteredWords.sort(() => 0.5 - Math.random());
    const selected20 = shuffled.slice(0, 20);

    setGameQuestions(selected20);
    setScore(0);
    setCurrentQ(0);
    setGameState('playing');
  };

  const handleAnswer = (choice) => {
    if (choice === gameQuestions[currentQ].article) {
      setScore(s => s + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentQ < gameQuestions.length - 1) {
        setCurrentQ(prev => prev + 1);
      } else {
        setGameState('result');
      }
    }, 800);
  };

  const getWhatsAppLink = () => {
    const percentage = Math.round((score / gameQuestions.length) * 100);
    let message = "";
    
    if (percentage >= 80) {
      message = `Hello DWA! I played the *${selectedLevel}* challenge and scored ${score}/20 (${percentage}%). I am interested in advanced courses.`;
    } else {
      message = `Hello DWA! I played the *${selectedLevel}* challenge and scored ${score}/20. I need help improving my German. Please send me course details.`;
    }
    
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E8D461]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          
          {/* === 1. INTRO SCREEN === */}
          {gameState === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
            >
              <div className="w-20 h-20 bg-[#E8D461] rounded-full flex items-center justify-center mx-auto mb-6 text-gray-900 shadow-[0_0_20px_rgba(232,212,97,0.4)]">
                <Play size={40} fill="currentColor" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">Der, Die, or Das?</h2>
              <p className="text-gray-300 text-lg mb-8">
                أكبر بنك أسئلة لتحدي أدوات التعريف!<br/>
                اختار مستواك واختبر نفسك في 20 كلمة عشوائية.
              </p>
              <button 
                onClick={() => setGameState('levelSelect')}
                className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg"
              >
                ابدأ التحدي
              </button>
            </motion.div>
          )}

          {/* === 2. LEVEL SELECT SCREEN (NEW) === */}
          {gameState === 'levelSelect' && (
            <motion.div 
              key="levelSelect"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-black mb-8">اختار مستواك</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => startGame('A1')} className="p-6 bg-green-500/20 border border-green-500/50 hover:bg-green-500 hover:text-white rounded-2xl transition-all group">
                  <span className="text-2xl font-bold block mb-1">Beginner (A1)</span>
                  <span className="text-sm opacity-70 group-hover:opacity-100">كلمات الحياة اليومية</span>
                </button>
                <button onClick={() => startGame('A2')} className="p-6 bg-blue-500/20 border border-blue-500/50 hover:bg-blue-500 hover:text-white rounded-2xl transition-all group">
                  <span className="text-2xl font-bold block mb-1">Elementary (A2)</span>
                  <span className="text-sm opacity-70 group-hover:opacity-100">جمل ومواقف أكثر</span>
                </button>
                <button onClick={() => startGame('B1')} className="p-6 bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 hover:text-white rounded-2xl transition-all group">
                  <span className="text-2xl font-bold block mb-1">Intermediate (B1+)</span>
                  <span className="text-sm opacity-70 group-hover:opacity-100">كلمات مجردة ووظيفية</span>
                </button>
                <button onClick={() => startGame('Mix')} className="p-6 bg-red-500/20 border border-red-500/50 hover:bg-red-500 hover:text-white rounded-2xl transition-all group">
                  <span className="text-2xl font-bold block mb-1">🔥 Mix Challenge</span>
                  <span className="text-sm opacity-70 group-hover:opacity-100">كوكتيل لكل المستويات</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* === 3. GAME SCREEN === */}
          {gameState === 'playing' && gameQuestions.length > 0 && (
            <motion.div 
              key="game"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="text-center"
            >
              <div className="flex justify-between items-center mb-4 text-sm font-bold text-gray-400 px-2">
                <span>Level: {selectedLevel}</span>
                <span>Score: {score}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full mb-8 overflow-hidden border border-gray-600">
                <motion.div 
                  className="bg-[#E8D461] h-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQ) / gameQuestions.length) * 100}%` }}
                />
              </div>

              <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[320px] flex flex-col justify-center">
                {/* Feedback Overlay */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 z-20 flex items-center justify-center ${feedback === 'correct' ? 'bg-green-500/95' : 'bg-red-500/95'}`}
                    >
                      {feedback === 'correct' ? <CheckCircle size={80} color="white" /> : <XCircle size={80} color="white" />}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-2">Word {currentQ + 1} of 20</p>
                <h3 className="text-5xl md:text-6xl font-black mb-2">{gameQuestions[currentQ].word}</h3>
                <p className="text-gray-400 text-lg mb-8 font-medium">({gameQuestions[currentQ].translation})</p>

                <div className="grid grid-cols-3 gap-3 md:gap-5">
                  {['Der', 'Die', 'Das'].map((article) => (
                    <button
                      key={article}
                      onClick={() => handleAnswer(article)}
                      className="py-4 md:py-5 bg-gray-100 rounded-2xl font-black text-xl md:text-2xl hover:bg-gray-900 hover:text-white transition-all border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 shadow-md"
                    >
                      {article}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* === 4. RESULT SCREEN === */}
          {gameState === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl"
            >
              <div className="inline-block p-4 bg-gray-800 rounded-full mb-4 ring-4 ring-[#E8D461]/30">
                <Trophy size={48} className="text-[#E8D461]" />
              </div>
              
              <h2 className="text-4xl font-black mb-2">
                {score >= 18 ? "Das ist Wahnsinn! 🤯" : score >= 10 ? "Gut Gemacht! 👍" : "Nicht Aufgeben!"}
              </h2>
              
              <p className="text-2xl text-gray-300 mb-6">
                نتيجتك في {selectedLevel}: <br/>
                <span className="text-[#E8D461] font-black text-5xl">{score}</span> <span className="text-lg">/ 20</span>
              </p>

              <div className="space-y-4">
                <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                  {score >= 15 
                    ? `مستواك في ${selectedLevel} ممتاز جداً! جاهز للتحدي الأكبر؟ تواصل معنا عشان نوديك المستوى اللي بعده.`
                    : `محتاج تركز شوية على كلمات ${selectedLevel}. عندنا كورس مكثف هيظبطلك القواعد دي.`}
                </p>

                <a 
                  href={getWhatsAppLink()}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#20b85c] transition-all shadow-lg shadow-green-900/20 active:scale-95"
                >
                  <MessageCircle size={24} />
                  شارِك نتيجتك معنا
                </a>

                <button 
                  onClick={() => setGameState('levelSelect')}
                  className="flex items-center justify-center gap-2 w-full py-3 text-gray-400 hover:text-white transition-colors font-medium hover:bg-white/5 rounded-xl"
                >
                  <RotateCcw size={18} /> جرب مستوى تاني
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default GermanGame;