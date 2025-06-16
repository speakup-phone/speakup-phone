
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">תנאי שימוש</h2>
            <h3 className="text-lg font-semibold text-gray-700">
              ברוכים הבאים לאתר SPEAK UP – תא טלפון מעוצב לאירועים וחתונות.
            </h3>
          </div>

          <div className="text-right space-y-4 text-gray-700 leading-relaxed">
            <p className="font-medium">
              השימוש באתר זה כפוף לתנאים הבאים. אנא קרא בעיון:
            </p>
            
            <div className="space-y-3">
              <p>
                <span className="font-semibold">1.</span> המידע באתר נועד לצרכי מידע כללי בלבד ואינו מהווה ייעוץ מקצועי או התחייבות מצד החברה.
              </p>
              
              <p>
                <span className="font-semibold">2.</span> כל שימוש במידע, קבצים, תמונות או כל תוכן אחר שבאתר הוא באחריות המשתמש בלבד.
              </p>
              
              <p>
                <span className="font-semibold">3.</span> אין להעתיק, לשכפל, להפיץ או לפרסם תוכן מהאתר ללא אישור מפורש ובכתב מ-SPEAK UP.
              </p>
              
              <p>
                <span className="font-semibold">4.</span> החברה שומרת לעצמה את הזכות לעדכן את תנאי השימוש בכל עת וללא התראה מראש.
              </p>
              
              <p>
                <span className="font-semibold">5.</span> כל הזמנה לשירותים תחשב כמחייבת רק לאחר אישור סופי מהחברה ותחייה על הסכם התקשרות אם נדרש.
              </p>
              
              <p>
                <span className="font-semibold">6.</span> בשימוש באתר אתה מצהיר כי קראת, הבנת והסכמת לתנאים אלו.
              </p>
              
              <p>
                <span className="font-semibold">7.</span> לכל שאלה ניתן לפנות אלינו בטופס יצירת הקשר או בוואטסאפ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
