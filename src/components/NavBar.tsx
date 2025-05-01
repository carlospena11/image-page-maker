
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="w-full">
      {/* Segmentos de cliente */}
      <div className="flex justify-end bg-nuvik-lightgray px-6 py-1 text-sm">
        <Link to="/" className="px-3 hover:text-nuvik-blue transition">RESIDENCIAL</Link>
        <Link to="/" className="px-3 hover:text-nuvik-blue transition">EMPRESAS</Link>
      </div>
      
      {/* Navegación principal */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/65e06ba4-3259-43e6-8d47-f068992c766d.png" 
              alt="Nuvik Logo" 
              className="h-8"
            />
          </Link>
        </div>
        
        {/* Menú principal */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="px-4 py-2 hover:text-nuvik-blue border-b-2 border-nuvik-blue">Inicio</Link>
          <Link to="/planes" className="px-4 py-2 hover:text-nuvik-blue">Planes de internet</Link>
          <Link to="/smart-home" className="px-4 py-2 hover:text-nuvik-blue">Smart home</Link>
          <Link to="/contacto" className="px-4 py-2 hover:text-nuvik-blue">Contacto</Link>
          <Link to="/cuenta" className="ml-4 bg-nuvik-blue hover:bg-opacity-90 text-white px-5 py-2 rounded uppercase text-sm font-medium">
            Mi cuenta
          </Link>
        </div>
        
        {/* Menú móvil (no mostrado por defecto) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
