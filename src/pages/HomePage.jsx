import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import GallerySection from '../components/landing/GallerySection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import PricingSection from '../components/landing/PricingSection';
import FaqSection from '../components/landing/FaqSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';


export default function HomePage() {
  return (
    <div className="antialiased">
      <HeroSection />
      <HowItWorksSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}