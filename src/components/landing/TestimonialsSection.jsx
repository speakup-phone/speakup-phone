
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    name: 'אור וטל',
    date: '07.05.2025',
    rating: 5,
    text: 'החלטה מדהימה שקיבלנו! האורחים פשוט נהנו מהרעיון, ולנו יש עכשיו מזכרת מרגשת עם כל הברכות. הסרטון שקיבלנו בדיוק קלע את האווירה של החתונה. ממליצים בחום!',
  },
  {
    name: 'דנה וינון',
    date: '13.04.2025',
    rating: 5,
    text: 'חוויה יוצאת דופן! כל המשפחה והחברים התלהבו, והווידאו שקיבלנו היה מרגש ומצחיק. שירות מקצועי ואדיב.',
  },
  {
    name: 'נועה ועדי',
    date: '30.07.2025',
    rating: 4,
    text: 'רעיון מקורי ומרגש, קיבלנו סרטון מהמם. תודה על הכל!',
  },
  {
    name: 'רוני ותומר',
    date: '11.06.2025',
    rating: 5,
    text: 'הפתעה מושלמת לאורחים! ממליצים לכל זוג שרוצה משהו אחר ומיוחד.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">מה אומרים עלינו?</h2>
        <p className="text-gray-600 mb-12">אל תאמינו לנו – תקשיבו להם</p>
        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{currentTestimonial.text}"
              </blockquote>
              <footer className="font-semibold">{currentTestimonial.name}</footer>
              <p className="text-sm text-gray-500">{currentTestimonial.date}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -right-4 sm:right-0 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -left-4 sm:left-0 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
