
import React from 'react';
import NavBar from '../components/NavBar';
import ServiceIcons from '../components/ServiceIcons';
import HeroSection from '../components/HeroSection';
import ServiceShowcase from '../components/ServiceShowcase';
import DisneyPromotion from '../components/DisneyPromotion';
import StreamingOptions from '../components/StreamingOptions';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ServiceIcons />
      <HeroSection />
      <ServiceShowcase />
      <DisneyPromotion />
      <StreamingOptions />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
