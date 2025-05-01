
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-nuvik-blue to-nuvik-gray">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Contenido textual */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-white">
          <h1 className="text-4xl lg:text-5xl font-light mb-6">
            Internet fibra óptica para el hogar y el trabajo
          </h1>
          <p className="mb-8 text-lg opacity-90">
            Conéctese a las cosas que importan. Experiencias más seguras, inteligentes y mágicas para ti y todos los que te rodean.
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="md" className="uppercase">
              Internet Residencial &gt;
            </Button>
            <Button variant="outline" size="md" className="uppercase">
              Fibra Empresarial &gt;
            </Button>
          </div>
        </div>
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] bg-nuvik-gray relative">
          <img
            src="/lovable-uploads/fd3b827c-ca90-4d65-8292-9c84812e40b7.png"
            alt="Persona usando internet de alta velocidad"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
