
import React from 'react';
import Button from './Button';

const DisneyPromotion = () => {
  return (
    <section 
      className="w-full bg-cover bg-center py-20" 
      style={{ 
        backgroundImage: "url('/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png')", 
        backgroundPosition: "center 70%",
        position: "relative"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 shadow-text">
            Disney+ incluido en tu plan de internet
          </h2>
          <p className="text-white text-lg mb-8 opacity-90 shadow-text max-w-md">
            Esta plataforma ofrece una amplia variedad de opciones de entretenimiento, 
            incluyendo películas y series.
          </p>
          <Button 
            variant="white" 
            size="md" 
            className="uppercase tracking-wider font-bold"
          >
            Ver planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DisneyPromotion;
