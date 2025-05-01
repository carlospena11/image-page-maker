
import React from 'react';
import NavBar from '../components/NavBar';
import ServiceIcons from '../components/ServiceIcons';
import HeroSection from '../components/HeroSection';
import ServiceShowcase from '../components/ServiceShowcase';
import DisneyPromotion from '../components/DisneyPromotion';
import StreamingOptions from '../components/StreamingOptions';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ServiceIcons />
      <HeroSection />
      <ServiceShowcase />
      <DisneyPromotion />
      <StreamingOptions />
    </div>
  );
};

export default Index;
