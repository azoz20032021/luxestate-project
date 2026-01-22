import React, { useState } from 'react'; // أضفنا useState
import { motion } from 'framer-motion';
import { Search, MapPin, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ModelViewer from '../components/3d/ModelViewer';

const LandingPage = () => {
  const navigate = useNavigate();

  // --- 1. حالة تخزين بيانات البحث ---
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  // --- 2. دالة تنفيذ البحث ---
  const handleSearch = () => {
    // التوجيه إلى صفحة النتائج مع تمرير القيم في الرابط
    navigate(`/search?location=${location}&type=${type}`);
  };

  // إعدادات الحركة (Animations)
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden relative">
      
      {/* خلفية جمالية */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">LUXESTATE</h1>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 transition cursor-pointer"
        >
          تسجيل الدخول
        </button>
      </nav>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-6 pt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* القسم النصي وشريط البحث */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              اكتشف منزل <br />
              <span className="text-blue-400">المستقبل</span> اليوم.
            </h2>
            <p className="text-gray-300 text-lg max-w-md">
              منصة عقارية فاخرة تتيح لك معاينة منزلك القادم بتقنية ثلاثية الأبعاد قبل زيارته.
            </p>

            {/* شريط البحث بنظام Glassmorphism */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* حقل الموقع */}
               {/* حقل الموقع - تم تحويله لقائمة منسدلة */}
<div className="flex-1 flex items-center bg-gray-800/50 rounded-xl px-4 py-3">
  <MapPin className="w-5 h-5 text-gray-400 ml-2" />
  <select 
    className="bg-transparent outline-none w-full text-white cursor-pointer text-right" 
    dir="rtl"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  >
    <option className="text-black" value="">كل المواقع</option>
    <option className="text-black" value="العراق">العراق</option>
    <option className="text-black" value="تركيا">تركيا</option>
    <option className="text-black" value="السعودية">السعودية</option>
    <option className="text-black" value="الإمارات">الإمارات</option>
  </select>
</div>

                {/* قائمة اختيار النوع */}
                <div className="flex-1 flex items-center bg-gray-800/50 rounded-xl px-4 py-3">
                  <Home className="w-5 h-5 text-gray-400 ml-2" />
                  <select 
                    className="bg-transparent outline-none w-full text-white cursor-pointer text-right" 
                    dir="rtl"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option className="text-black" value="">نوع العقار (الكل)</option>
                    <option className="text-black" value="فيلا">فيلا</option>
                    <option className="text-black" value="شقة">شقة</option>
                    <option className="text-black" value="شقة فاخرة">شقة فاخرة</option>
                  </select>
                </div>

                {/* زر البحث */}
                <button 
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  بحث
                </button>
              </div>
            </div>
          </motion.div>

          {/* قسم العرض ثلاثي الأبعاد */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 z-20 bg-black/40 px-4 py-1 rounded-full text-xs font-mono border border-white/10">
                3D LIVE VIEW
              </div>
              <ModelViewer />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold">فيلا مودرن هايتس</h3>
                <p className="text-gray-400">$2,500,000</p>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default LandingPage;