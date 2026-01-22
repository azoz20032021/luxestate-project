import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { propertiesData } from '../DATA/properties';
import { MapPin, Bed, Bath, ArrowRight } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  
  // قراءة فلاتر البحث من الرابط
  const locationQuery = searchParams.get('location') || '';
  const typeQuery = searchParams.get('type') || '';

  // عملية التصفية (Filtering Logic)
  const filteredProperties = propertiesData.filter(property => {
    const matchLocation = property.location.includes(locationQuery) || locationQuery === '';
    const matchType = typeQuery === 'نوع العقار' || property.type === typeQuery || typeQuery === '';
    return matchLocation && matchType;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      
      {/* رأس الصفحة */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          نتائج البحث عن: <span className="text-blue-400">{typeQuery || 'الكل'}</span> في <span className="text-blue-400">{locationQuery || 'كل المواقع'}</span>
        </h2>
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2">
          العودة للرئيسية <ArrowRight size={20}/>
        </Link>
      </div>

      {/* شبكة عرض النتائج Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            // -------------------------------------------------------
            // التغيير هنا: حولنا الـ div إلى Link ليصبح قابلاً للضغط
            // -------------------------------------------------------
            <Link 
              to={`/property/${property.id}`} // هذا الرابط يأخذنا لصفحة التفاصيل
              key={property.id} 
              className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition duration-300 shadow-2xl backdrop-blur-sm group cursor-pointer"
            >
              
              {/* صورة العقار */}
              <div className="relative h-64 overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
              </div>

              {/* تفاصيل العقار */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-400 mb-4 text-sm">
                  <MapPin size={16} className="ml-1" />
                  {property.location}
                </div>
                
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div className="flex gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><Bed size={16}/> {property.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={16}/> {property.baths}</span>
                  </div>
                  <p className="text-xl font-bold text-blue-400">{property.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // في حال لم توجد نتائج
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-2xl text-gray-400">عذراً، لا توجد عقارات تطابق بحثك حالياً.</p>
          <p className="text-gray-500 mt-2">جرب البحث عن "الرياض" أو "دبي" أو "العراق"</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;