import React from 'react';
import { X } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">מדיניות פרטיות</h2>
          </div>

          <div className="text-right space-y-4 text-gray-700 leading-relaxed">
            <p className="font-medium">
              הפרטיות שלך חשובה לנו. להלן עקרונות מדיניות הפרטיות של האתר:
            </p>
            
            <div className="space-y-3">
              <p>
                <span className="font-semibold">1.</span> בעת יצירת קשר באמצעות טופס באתר, נאספים פרטים כגון שם, טלפון ודוא"ל לצורך טיפול בפנייה בלבד.
              </p>
              
              <p>
                <span className="font-semibold">2.</span> המידע לא יועבר לצדדים שלישיים אלא אם כן נידרש לכך על פי חוק.
              </p>
              
              <p>
                <span className="font-semibold">3.</span> ייתכן והשימוש באתר כולל קובצי "עוגיות" (Cookies) לצרכי אבטחה, סטטיסטיקה ושיפור חווית המשתמש.
              </p>
              
              <p>
                <span className="font-semibold">4.</span> אתה רשאי לבקש לעיין, לתקן או למחוק את פרטיך האישיים בכל עת באמצעות פנייה אלינו.
              </p>
              
              <p>
                <span className="font-semibold">5.</span> האתר מאובטח באמצעים מקובלים, אך השימוש בו נעשה באחריות המשתמש בלבד.
              </p>
              
              <p>
                <span className="font-semibold">6.</span> המשך שימוש באתר מהווה הסכמה למדיניות זו.
              </p>
              
              <p>
                <span className="font-semibold">7.</span> למידע נוסף – ניתן ליצור קשר עם הנהלת האתר.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}