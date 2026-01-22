import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة عملية تسجيل الدخول
    setTimeout(() => {
      setIsLoading(false);
      // في المستقبل سنضيف Firebase Auth هنا
      alert('تم تسجيل الدخول بنجاح! (محاكاة)');
      navigate('/');
    }, 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex items-center justify-center p-4">
      {/* خلفية جمالية */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative z-10 w-full max-w-md"
      >
        {/* بطاقة تسجيل الدخول */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* زر العودة */}
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            العودة للرئيسية
          </button>

          {/* العنوان */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">تسجيل الدخول</h1>
            <p className="text-gray-400">أدخل بياناتك للوصول إلى حسابك</p>
          </div>

          {/* نموذج تسجيل الدخول */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* حقل البريد الإلكتروني */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="example@email.com"
                  required
                  dir="ltr"
                />
              </div>
            </div>

            {/* حقل كلمة المرور */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 pr-12 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  required
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* رابط نسيت كلمة المرور */}
            <div className="text-right">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition">
                نسيت كلمة المرور؟
              </a>
            </div>

            {/* زر تسجيل الدخول */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-xl font-medium transition shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري تسجيل الدخول...
                </>
              ) : (
                <>
                  تسجيل الدخول
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* فاصل */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">أو</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* زر إنشاء حساب جديد */}
          <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-6 rounded-xl font-medium transition backdrop-blur-sm">
            إنشاء حساب جديد
          </button>

          {/* روابط إضافية */}
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>بتسجيل الدخول، أنت توافق على <a href="#" className="text-blue-400 hover:text-blue-300">الشروط والأحكام</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;