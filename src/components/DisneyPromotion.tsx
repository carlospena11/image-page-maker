
import React from 'react';
import Button from './Button';

const DisneyPromotion = () => {
  return (
    <section className="w-full bg-cover bg-center py-16" style={{ backgroundImage: "url('/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png')", backgroundPosition: "center 70%" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-lg">
          <h2 className="text-4xl font-medium text-white mb-4">Disney+ incluido en tu plan de internet</h2>
          <p className="text-white mb-8">Esta plataforma ofrece una amplia variedad de opciones de entretenimiento, incluyendo películas y series.</p>
          <Button 
            variant="white" 
            size="md" 
            className="uppercase tracking-wider"
          >
            Ver planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DisneyPromotion;
