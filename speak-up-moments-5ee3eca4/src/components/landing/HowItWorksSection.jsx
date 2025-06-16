
import React from 'react';
import { Phone, Camera, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'האורחים משאירים הודעה בטלפון',
    description: 'בתוך תא טלפון וינטג׳ מעוצב, ממתין טלפון חוגה ישן ומזמין. האורחים מרימים את השפופרת ומקליטים ברכה אישית – מצחיקה, מרגשת או מצחיקה.',
    icon: <svg width="24" height="24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"></path></svg>,
  },
  {
    number: '2',
    title: 'כל רגע מתועד בוידאו',
    description: 'המערכת שלנו מצלמת את הברכה באיכות גבוהה – גם קול, גם וידאו.',
    icon: <svg width="24" height="24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"></rect><circle cx="12" cy="13.5" r="3.5"></circle><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>,
  },
  {
    number: '3',
    title: 'ואתם מקבלים מזכרת לנצח',
    description: 'אחרי האירוע, אנחנו עורכים את כל ההודעות לסרטון אחד מרגש שיישאר איתכם לתמיד.',
    icon: <svg width="24" height="24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 4v16M17 4v16M2 8h20M2 16h20"></path></svg>,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works-section" className="bg-white py-16 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">איך זה עובד?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          תהליך קליל ומרגש שיהפוך את האורחים שלכם לחלק בלתי נשכח מהזיכרון.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-right">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl font-bold text-gray-200">{step.number}</span>
                <div className="bg-gray-100 p-3 rounded-lg">
                    {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
