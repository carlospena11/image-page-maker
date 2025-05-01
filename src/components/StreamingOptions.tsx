
import React from 'react';
import { SkipBack, Play, Pause, SkipForward, Shuffle } from 'lucide-react';
import Button from './Button';
import { AspectRatio } from './ui/aspect-ratio';
import { Card } from './ui/card';

const StreamingOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-nuvik-blue font-medium mb-6">
            EL STREAMING QUE QUIERAS
          </h2>
          <p className="text-gray-700 text-lg">
            En NUVIK, ofrecemos una amplia variedad de opciones de 
            entretenimiento en streaming para que puedas disfrutar en la 
            comodidad de tu hogar.
          </p>
        </div>

        {/* Streaming Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-10">
          {/* Disney+ Card */}
          <Card className="flex flex-col overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1604149370800-62baef2908c3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Disney+ streaming service" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </AspectRatio>
            </div>
            <div className="px-4 pb-5">
              <h3 className="text-xl font-medium mb-3">Las mejores películas, documentales y series.</h3>
              <p className="text-gray-600 text-sm mb-4">
                Los títulos más recientes y aclamados de Disney, Pixar, Marvel, Star Wars y 
                National Geographic, así como a programas originales exclusivos
              </p>
              <div className="flex mt-4 space-x-4 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png" alt="Disney logo" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pixar_logo.svg/2560px-Pixar_logo.svg.png" alt="Pixar logo" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2560px-MarvelLogo.svg.png" alt="Marvel logo" className="h-6 object-contain" />
              </div>
            </div>
          </Card>

          {/* Music Streaming Card */}
          <Card className="flex flex-col overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-gradient-to-r from-nuvik-blue/40 to-nuvik-gray/40">
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-nuvik-blue/20 to-nuvik-gray/20">
                  <img src="https://cdn-icons-png.flaticon.com/512/3844/3844724.png" alt="Music icon" className="w-20 h-20 mb-6 filter drop-shadow-xl" />
                  <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-full shadow-lg">
                    <SkipBack className="w-6 h-6 text-white hover:text-nuvik-blue cursor-pointer transition-colors" />
                    <div className="bg-white rounded-full p-3 shadow-md hover:bg-nuvik-blue/90 transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-nuvik-gray" />
                    </div>
                    <Pause className="w-6 h-6 text-white hover:text-nuvik-blue cursor-pointer transition-colors" />
                    <SkipForward className="w-6 h-6 text-white hover:text-nuvik-blue cursor-pointer transition-colors" />
                    <Shuffle className="w-6 h-6 text-white hover:text-nuvik-blue cursor-pointer transition-colors" />
                  </div>
                </div>
              </AspectRatio>
            </div>
            <div className="px-4 pb-5">
              <h3 className="text-xl font-medium mb-3">Música ilimitada, sin anuncios y en todos tus dispositivos</h3>
              <p className="text-gray-600 text-sm mb-4">
                Añadí Spotify premium a tu plan, disfruta YouTube music al elegir YouTube 
                premium o contratá Apple Music por un costo adicional en tu plan mensual.
              </p>
              <div className="flex mt-4 space-x-3 items-center">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Spotify logo" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube logo" className="h-5 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple_Music_logo.svg/2560px-Apple_Music_logo.svg.png" alt="Apple Music logo" className="h-5 object-contain" />
              </div>
            </div>
          </Card>

          {/* Sports Streaming Card */}
          <Card className="flex flex-col overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1579710758949-3ab56a3e6a33?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Sports streaming" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </AspectRatio>
            </div>
            <div className="px-4 pb-5">
              <h3 className="text-xl font-medium mb-3">Deportes en vivo y tus ligas preferidas en tu suscripción.</h3>
              <p className="text-gray-600 text-sm mb-4">
                Con Nuvik tienes acceso a la UEFA Champions League, UEFA Europa League, 
                Premier League, Ligue 1, Serie A, NBA, ATP Tour y más.
              </p>
              <div className="flex mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_logo.svg/2560px-ESPN_logo.svg.png" alt="ESPN logo" className="h-5 object-contain" />
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Button 
            variant="primary" 
            size="lg" 
            className="uppercase tracking-wider font-bold"
          >
            Ver todos los planes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StreamingOptions;
