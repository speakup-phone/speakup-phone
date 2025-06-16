import React from 'react';

const galleryImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b50bd5f1f_image.png";

export default function GallerySection() {
  const thumbImages = Array(4).fill(galleryImage);

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">תא אחד, אינסוף זיכרונות</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          ככה זה כשנותנים לרגעים לדבר – פשוט, אמיתי ובלתי נשכח.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 rounded-2xl overflow-hidden">
            <img src={galleryImage} alt="Gallery main" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {thumbImages.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden">
                <img src={img} alt={`Gallery thumb ${index + 1}`} className="w-full h-full object-cover aspect-square" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}