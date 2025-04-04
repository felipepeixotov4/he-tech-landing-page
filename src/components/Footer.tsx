
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8fafc] py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="/lovable-uploads/64668533-f42a-434e-9015-09dc3bfa018b.png" 
          alt="HE Tecnologia" 
          className="h-16 mx-auto mb-6"
        />
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://wa.me/5511915002524" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Fale Conosco
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} HE Tecnologia. Todos os direitos reservados.</p>
        <p className="text-gray-400 text-xs mt-2">Designed By V4 Company</p>
      </div>
    </footer>
  );
};

export default Footer;
