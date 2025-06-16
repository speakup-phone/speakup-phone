import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/381acba55_Screenshot2025-06-10152908.png";

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <p className="tracking-[0.2em] text-sm mb-4">SPEAK UP</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">תא הטלפון החלומי לאירוע שלך</h1>
        <p className="max-w-xl text-base sm:text-lg md:text-xl font-light mb-8">
          אהבה, רגשות וברכות מוקלטות ונשמרים לנצח במזכרת מרגשת
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => scrollToSection('how-it-works-section')}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg"
          >
            למידע נוסף
          </Button>
          <Button
            onClick={() => scrollToSection('pricing-section')}
            className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 rounded-full px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg"
          >
            להזמנת תא הטלפון
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}