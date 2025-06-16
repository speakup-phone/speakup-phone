import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

const footerLinks = [
    { name: 'דף הבית', href: '#', scrollTo: 'top' },
    { name: 'אודותינו', href: '#', scrollTo: 'top' },
    { name: 'צור קשר', href: '#', scrollTo: 'contact-section' },
    { name: 'תנאי שימוש', href: '#', modal: 'terms' },
    { name: 'מדיניות פרטיות', href: '#', modal: 'privacy' },
];

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null);

    const handleLinkClick = (link) => {
        if (link.modal) {
            setActiveModal(link.modal);
        } else if (link.scrollTo) {
            if (link.scrollTo === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.querySelector(`#${link.scrollTo}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <>
            <footer className="bg-black text-white">
                <div className="max-w-5xl mx-auto py-12 px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
                        <div>
                            <h3 className="text-xl font-bold">SPEAK UP</h3>
                            <p className="text-gray-400">תא טלפון מעוצב לאירועים וחתונות</p>
                        </div>
                        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {footerLinks.map(link => (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link)}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                        <p>כל הזכויות שמורות ל-SPEAK UP © {new Date().getFullYear()}.</p>
                        <p className="mt-2">האתר פועל בהתאם להוראות הדין בישראל. המידע באתר אינו מהווה ייעוץ משפטי או תחליף לייעוץ מקצועי. השימוש באתר כפוף לתנאי השימוש ומדיניות הפרטיות.</p>
                    </div>
                </div>
            </footer>
            
            <TermsModal 
                isOpen={activeModal === 'terms'}
                onClose={() => setActiveModal(null)}
            />
            <PrivacyModal 
                isOpen={activeModal === 'privacy'}
                onClose={() => setActiveModal(null)}
            />
        </>
    );
}