import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/lp/" className="flex items-center">
            <img 
              src="/lp/lovable-uploads/he-logo-transp.png" 
              alt="HE Tecnologia" 
              className="h-10 md:h-12"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="#solutions" className="text-[#0d45a6] hover:text-[#0a3882] font-medium">Soluções</a>
              <a href="#benefits" className="text-[#0d45a6] hover:text-[#0a3882] font-medium">Benefícios</a>
              <a href="#results" className="text-[#0d45a6] hover:text-[#0a3882] font-medium">Resultados</a>
            </div>
            <a 
              href="https://wa.me/5511915002524" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button text-sm px-5 py-2"
            >
              Fale com um Especialista
            </a>
          </div>
          
          <button 
            className="md:hidden text-[#0d45a6]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 pt-2 pb-4 flex flex-col space-y-3">
            <a 
              href="#solutions" 
              className="text-[#0d45a6] py-2 px-4 hover:bg-slate-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </a>
            <a 
              href="#benefits" 
              className="text-[#0d45a6] py-2 px-4 hover:bg-slate-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#results" 
              className="text-[#0d45a6] py-2 px-4 hover:bg-slate-50 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <a 
              href="https://wa.me/5511915002524" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
