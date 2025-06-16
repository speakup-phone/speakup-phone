import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
    {
        question: "כמה זמן מראש צריך להזמין את שירות תא הטלפון?",
        answer: "מומלץ להזמין את השירות לפחות חודשיים מראש כדי להבטיח זמינות בתאריך שלכם."
    },
    {
        question: "כמה זמן לוקח לקבל את הסרטון המוכן?",
        answer: "הסרטון עובר עריכה מקצועית ומוכן עד 21 ימי עסקים לאחר האירוע."
    },
    {
        question: "האם תא הטלפון דורש חיבור לחשמל?",
        answer: "כן, נדרש שקע חשמל סטנדרטי בקרבת מקום להצבת התא."
    },
    {
        question: "כמה מקום נדרש עבור התא?",
        answer: "התא דורש שטח של כ-2x2 מטרים, עדיף במקום מרכזי ונגיש לאורחים."
    },
    {
        question: "האם מגיע צוות מטעמכם לאירוע?",
        answer: "בהחלט! צוות מקצועי מלווה את התא והאורחים לאורך כל מהלך האירוע."
    }
];

const FaqItem = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-right focus:outline-none"
        >
            <span className="text-lg font-semibold">{faq.question}</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200">
                {isOpen ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
            </div>
        </button>
        <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <p className="mt-4 text-gray-600 bg-gray-100 p-4 rounded-lg">{faq.answer}</p>
            </motion.div>
        )}
        </AnimatePresence>
    </div>
);

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">שאלות נפוצות</h2>
                    <p className="text-gray-600">כל מה שרציתם לדעת על שירות תא הטלפון המעוצב לחתונה</p>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}