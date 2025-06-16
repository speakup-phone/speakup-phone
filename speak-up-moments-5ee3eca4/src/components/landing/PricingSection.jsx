import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Heart } from 'lucide-react';

const packages = [
  {
    name: 'חבילה בסיסית',
    price: '1,500',
    icon: <Heart className="w-6 h-6 text-blue-500" />,
    borderColor: 'border-blue-400',
    features: [
      'תא טלפון מעוצב ומוכן לפעולה',
      'הקלטות אודיו באיכות גבוהה',
      'צילום וידאו של כל מי שמשאיר ברכה',
      'סרטון מסכם מונטאז\' – כולל כל הברכות, עם פתיח וסיום מעוצבים',
      'קובץ אודיו נפרד עם כל הברכות',
      'קישור דיגיטלי להורדה + כונן און קי מעוצב',
      'שלט אישי עם שם הזוג',
    ],
  },
  {
    name: 'חבילת פרימיום',
    price: '2,000',
    isPopular: true,
    icon: <Star className="w-6 h-6 text-pink-500" />,
    borderColor: 'border-pink-400',
    features: [
      'כל מה שיש בחבילה הבסיסית, פלוס:',
      'הרחבת זמן פעילות תא הטלפון – עד 5 שעות סה"כ',
      'עריכת וידאו מתקדמת – עריכה עשירה יותר עם מעברים יצירתיים, צבעים מותאמים, ועיצוב קצת יותר אישי',
      'מונטאז\' פתיח – שילוב תמונות סטילס או וידאו קצר שלכם בעיצוב אישי',
      'קטעי אודיו נבחרים עם מיתוג, רקעים מרגשים – כמו פודקאסט מהחתונה שלכם!',
    ],
  },
];

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact-section');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function PricingSection() {
  return (
    <section id="pricing-section" className="bg-pink-50 py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">בחרו את החבילה המושלמת עבורכם</h2>
        <p className="text-gray-600 mb-12">חבילות מותאמות שיהפכו את האירוע לבלתי נשכח</p>
        {/* The container below uses flex-col to stack cards on mobile, and lg:flex-row for side-by-side on larger screens */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white p-8 rounded-2xl shadow-lg border-2 text-right w-full max-w-md transition-transform hover:scale-105 ${pkg.borderColor}`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <div className={`p-3 rounded-full ${pkg.isPopular ? 'bg-pink-100' : 'bg-blue-100'}`}>
                    {pkg.icon}
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-bold mb-6">
                ₪{pkg.price}
              </p>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-5 text-base sm:py-6 sm:text-lg"
              >
                להזמנה ופרטים
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}