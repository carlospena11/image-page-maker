
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
    <div className="w-full bg-click-lightgreen bg-opacity-40 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-7 md:grid-cols-7 gap-2 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-2 hover:bg-white hover:bg-opacity-30 rounded-lg transition cursor-pointer">
              <div className="bg-white rounded-full p-3 mb-2">
                <service.icon className="h-6 w-6 text-click-teal" />
              </div>
              <span className="text-xs sm:text-sm">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcons;
