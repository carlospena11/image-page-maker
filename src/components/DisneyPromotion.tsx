
import React from 'react';
import { Button } from '@/components/ui/button';

const DisneyPromotion = () => {
  return (
    <section 
      className="w-full bg-cover bg-center py-20 relative"
    >
      {/* Background image with improved quality */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3')", 
          backgroundPosition: '25% center'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-lg">
          <div className="mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png" 
              alt="Disney+ Logo" 
              className="h-16 object-contain mb-4 filter drop-shadow-lg" 
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 shadow-text">
            Disney+ incluido en tu plan de internet
          </h2>
          <p className="text-white text-lg mb-8 opacity-90 shadow-text max-w-md">
            Esta plataforma ofrece una amplia variedad de opciones de entretenimiento, 
            incluyendo películas y series.
          </p>
          <Button 
            variant="default" 
            className="uppercase tracking-wider font-bold bg-white text-click-darkblue hover:bg-gray-100"
          >
            Ver planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DisneyPromotion;
