
import React from 'react';
import Button from './Button';

const ServiceShowcase = () => {
  const services = [
    {
      name: 'Internet Fibra Óptica',
      image: '/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png',
      imagePosition: '0% 20%',
      width: '20%'
    },
    {
      name: 'Tv streaming',
      image: '/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png',
      imagePosition: '25% 20%',
      width: '20%'
    },
    {
      name: 'Música streaming',
      image: '/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png',
      imagePosition: '50% 20%',
      width: '20%'
    },
    {
      name: 'Smart Home y CCTV',
      image: '/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png',
      imagePosition: '75% 20%',
      width: '20%'
    },
    {
      name: 'Gaming & e-sports',
      image: '/lovable-uploads/41d8a8a7-65b0-4521-896e-0d1688ff975a.png',
      imagePosition: '100% 20%',
      width: '20%'
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">
        Nuestros servicios funcionan aún mejor juntos
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center max-w-[200px]">
            <div className="bg-gray-50 rounded-lg p-4 mb-4 w-36 h-36 flex items-center justify-center">
              <div 
                className="w-full h-full bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundPosition: service.imagePosition
                }}
              />
            </div>
            <p className="text-sm font-medium text-center">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceShowcase;
