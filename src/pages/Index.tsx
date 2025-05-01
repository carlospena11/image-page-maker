
import React from 'react';
import NavBar from '../components/NavBar';
import ServiceIcons from '../components/ServiceIcons';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ServiceIcons />
      <HeroSection />
      
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-3xl font-medium text-gray-800 mb-8">
          Nuestros servicios funcionan aún mejor juntos
        </h2>
        
        {/* Aquí podrían ir más secciones y contenido */}
      </section>
    </div>
  );
};

export default Index;
