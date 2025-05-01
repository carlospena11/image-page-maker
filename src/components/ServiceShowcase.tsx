
import React from 'react';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const ServiceShowcase = () => {
  const services = [
    {
      name: 'Internet Fibra Óptica',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      icon: 'https://cdn-icons-png.flaticon.com/512/1197/1197466.png'
    },
    {
      name: 'TV streaming',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      icon: 'https://cdn-icons-png.flaticon.com/512/2586/2586717.png'
    },
    {
      name: 'Música streaming',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      icon: 'https://cdn-icons-png.flaticon.com/512/3059/3059884.png'
    },
    {
      name: 'Smart Home y CCTV',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      icon: 'https://cdn-icons-png.flaticon.com/512/1165/1165544.png'
    },
    {
      name: 'Gaming & e-sports',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      icon: 'https://cdn-icons-png.flaticon.com/512/686/686589.png'
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-gray-800 text-center mb-12">
          Nuestros servicios funcionan aún mejor juntos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-3 bg-white hover:shadow-lg transition-shadow cursor-pointer overflow-hidden border-none">
              <div className="w-full rounded-lg overflow-hidden mb-4">
                <AspectRatio ratio={1} className="bg-gradient-to-br from-nuvik-blue/10 to-nuvik-gray/10">
                  <div className="w-full h-full relative flex items-center justify-center group">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover opacity-30 absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    />
                    <img 
                      src={service.icon} 
                      alt={`${service.name} icon`}
                      className="w-16 h-16 z-10 filter drop-shadow-lg transition-transform hover:scale-110 duration-300"
                    />
                  </div>
                </AspectRatio>
              </div>
              <p className="text-sm font-medium text-center">{service.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
