
import React from 'react';
import { Wifi, Tv, Music, Gamepad, Home, Layers } from 'lucide-react';

const ServiceIcons = () => {
  const services = [
    { name: 'Internet', icon: Wifi },
    { name: 'Streaming', icon: Tv },
    { name: 'Música', icon: Music },
    { name: 'TV en vivo', icon: Tv },
    { name: 'Gaming', icon: Gamepad },
    { name: 'Smart home', icon: Home },
    { name: 'Bundles', icon: Layers }
  ];

  return (
    <div className="w-full bg-nuvik-green py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 md:grid-cols-7 gap-4 text-center px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-2 rounded-lg transition cursor-pointer hover:bg-white hover:bg-opacity-40"
            >
              <div className="bg-white rounded-full p-3 mb-2 shadow-md">
                <service.icon className="h-5 w-5 text-nuvik-blue" />
              </div>
              <span className="text-xs font-medium mt-1 text-nuvik-darkgray">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcons;
