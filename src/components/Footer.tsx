
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    
    if (email) {
      toast.success("¡Gracias por suscribirte!", {
        description: "Recibirás nuestras ofertas exclusivas pronto.",
      });
      form.reset();
    } else {
      toast.error("Por favor ingresa tu correo electrónico");
    }
  };

  return (
    <footer className="bg-nuvik-gray text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/2de27e76-27e4-4fc1-a0e6-af57c2e7d298.png" 
                alt="Nuvik Logo" 
                className="h-10 mb-4"
              />
              <p className="text-sm text-gray-300">
                La mejor conexión a internet de fibra óptica con ultra velocidad y la última tecnología
              </p>
            </div>
            
            {/* Iconos de redes sociales */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-nuvik-darkgray p-2 rounded">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-nuvik-darkgray p-2 rounded">
                <Instagram size={16} />
              </a>
              <a href="#" className="bg-nuvik-darkgray p-2 rounded">
                <Twitter size={16} />
              </a>
              <a href="#" className="bg-nuvik-darkgray p-2 rounded">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Enlaces de Compañía */}
          <div>
            <h3 className="text-lg font-medium mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Comienza</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Internet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">TV & Streaming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Smart Home</a></li>
            </ul>
          </div>
          
          {/* Enlaces de Soporte */}
          <div>
            <h3 className="text-lg font-medium mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Ticket de soporte</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          {/* Formulario de suscripción */}
          <div>
            <h3 className="text-lg font-medium mb-4">Enterate de nuestras ofertas exclusivas suscribiéndote a nuestro boletín de noticias.</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="bg-white border-0"
              />
              <Button 
                type="submit" 
                className="w-full bg-nuvik-blue hover:bg-opacity-90 transition-colors"
              >
                SUSCRIBIRSE
              </Button>
            </form>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-nuvik-darkgray my-8"></div>
        
        {/* Pie de página */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2023 Nuvik. Todos los derechos reservados</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Términos del servicio</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Política y privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
