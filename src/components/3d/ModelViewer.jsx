import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

// هذا المكون الجديد لتحميل البيت
const HouseModel = () => {
  // استدعاء الملف من مجلد public
  // تأكد أن اسم الملف مطابق تماماً لما وضعته في المجلد
  const { scene } = useGLTF('/models/house.glb');

  return <primitive object={scene} scale={0.32} />; // scale للتحكم بحجم البيت
};

const ModelViewer = () => {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [4, 5, 10], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Stage يضيف إضاءة وظلال جاهزة ليكون الشكل احترافياً فوراً */}
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <HouseModel />
          </Stage>
        </Suspense>
        
        {/* أدوات التحكم: الدوران والتقريب */}
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={1.5} // سرعة دوران البيت
          enableZoom={true} 
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;