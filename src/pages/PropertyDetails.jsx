import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { propertiesData } from '../DATA/properties';
const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // البحث عن العقار
  const property = propertiesData.find((p) => p.id === parseInt(id));

  // رقم الهاتف للحجوزات (يمكنك تغييره لرقمك الحقيقي)
  const salesPhoneNumber = "+9647700000000"; 

  if (!property) {
    return <div className="text-white text-center pt-20">عفواً، العقار غير موجود.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      
      {/* زر الرجوع */}
      <div className="container mx-auto px-6 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
          <ArrowRight size={20} /> رجوع للخلف
        </button>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* القسم الأيمن: التفاصيل وزر الاتصال */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">{property.title}</h1>
            <div className="flex items-center text-blue-400 text-lg">
              <MapPin className="ml-2 w-5 h-5" /> {property.location}
            </div>
          </div>
          
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {property.price}
          </div>

          {/* المواصفات */}
          <div className="flex gap-8 border-y border-white/10 py-6">
            <div className="flex items-center gap-3 text-xl">
              <div className="bg-white/10 p-3 rounded-full"><Bed className="text-blue-400" /></div>
              <span>{property.beds} غرف نوم</span>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <div className="bg-white/10 p-3 rounded-full"><Bath className="text-blue-400" /></div>
              <span>{property.baths} حمامات</span>
            </div>
          </div>

          {/* الوصف */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">تفاصيل العقار</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              فرصة لا تعوض للسكن في هذا العقار المتميز. يتميز التصميم بالحداثة واستغلال المساحات، مع تشطيبات فاخرة تناسب ذوقك الرفيع. الموقع قريب من كافة الخدمات الحيوية.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-gray-300">
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> مسبح خاص</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> حديقة ذكية</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> موقف سيارات</span>
              <span className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> نظام أمني</span>
            </div>
          </div>

          {/* زر الاتصال - يفتح الهاتف مباشرة */}
          <a 
            href={`tel:${salesPhoneNumber}`}
            className="block w-full bg-green-600 hover:bg-green-700 py-5 rounded-2xl font-bold text-xl text-center transition transform hover:-translate-y-1 shadow-lg shadow-green-900/50 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Phone size={24} /> 
            اتصل الآن للحجز
          </a>
        </div>

        {/* القسم الأيسر: الصورة فقط (تم تكبيرها لتملأ المساحة) */}
        <div className="sticky top-10">
          <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            {/* طبقة تجميلية فوق الصورة */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-sm">
              ✨ عقار مميز
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDetails;