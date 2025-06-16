import React, { useState, useRef } from 'react';
import { Lead } from '@/api/entities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        event_date: '',
        message: 'איך נוכל לעזור לכם?'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const formRef = useRef();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        
        try {
            // Save to database
            await Lead.create(formData);
            
            // Send email using EmailJS
            emailjs.sendForm('service_fs7b0ez', 'template_o7bn0ks', formRef.current, {
            publicKey: 'JrCuWvCbacKv_fLrW',
          })
            
            setSubmitMessage('ההודעה נשלחה בהצלחה! ניצור קשר בהקדם.');
            setFormData({ user_name: '', user_phone: '', user_email: '', event_date: '', message: 'איך נוכל לעזור לכם?' });
        } catch (error) {
            setSubmitMessage('אירעה שגיאה. אנא נסו שוב.');
            console.error(error);
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact-section" className="bg-pink-50 py-20 px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-right">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">צרו איתנו קשר</h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        רוצים לשמוע עוד? יש לכם שאלות? מעוניינים לבדוק זמינות לתאריך האירוע שלכם?
                        השאירו פרטים ונחזור אליכם בהקדם.
                    </p>
                    <div className="space-y-4">
                        <a href="tel:053-5428856" className="flex items-center justify-end gap-3 text-lg font-medium hover:text-pink-600 transition-colors">
                            <span>053-5428856</span>
                            <Phone />
                        </a>
                        <a href="mailto:speakup.phone@gmail.com" className="flex items-center justify-end gap-3 text-lg font-medium hover:text-pink-600 transition-colors">
                            <span>speakup.phone@gmail.com</span>
                            <Mail />
                        </a>
                    </div>
                     <div className="flex justify-end gap-4 mt-8">
                        <a 
                            href="https://www.tiktok.com/@speakup_phone" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M33.5 8.5c.5 3.5 3.1 6.1 6.5 6.5v5.1c-2.1.2-4.2-.2-6.2-1.1v13.7c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13c.7 0 1.4.1 2.1.2v5.2c-.7-.2-1.4-.3-2.1-.3-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8V4.5h5.1z" fill="#222"/>
                              </g>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/speakup_phone/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <Instagram className="w-6 h-6"/>
                        </a>
                        <a 
                            href="https://www.facebook.com/people/Speak-Up/61576313061188/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        >
                            <Facebook className="w-6 h-6"/>
                        </a>
                     </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                                <Input id="fullName" name="fullName" value={formData.user_name} onChange={handleChange} placeholder="השם שלך" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון שלך</label>
                                <Input id="phone" name="phone" value={formData.user_phone} onChange={handleChange} placeholder="הטלפון שלך" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                                <Input id="email" name="email" type="email" value={formData.user_email} onChange={handleChange} placeholder="האימייל שלך" required />
                            </div>
                            <div>
                                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">תאריך האירוע (אם ידוע)</label>
                                <Input id="eventDate" name="eventDate" type="date" value={formData.event_date} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-black text-white rounded-full py-6 text-lg hover:bg-gray-800">
                            {isSubmitting ? 'שולח...' : 'שליחה'}
                        </Button>
                        {submitMessage && <p className="mt-4 text-center text-sm">{submitMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}