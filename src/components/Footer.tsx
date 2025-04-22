import React from 'react';
import { Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600">
              <Scissors className="w-5 h-5 text-white" />
            </span>
            <span className="font-serif font-bold text-2xl">WR Beauty</span>
          </div>
          
          <p className="max-w-2xl mx-auto mb-8 italic font-serif text-lg">
            "Você não precisa ter nascido pronta. Você só precisa dar o primeiro passo. O resto, a gente constrói juntas."
            <br />
            <span className="text-primary-300 font-normal">— Wanessa Ribeiro</span>
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a href="#home" className="text-primary-200 hover:text-white transition-colors">Início</a>
            <a href="#about" className="text-primary-200 hover:text-white transition-colors">Sobre</a>
            <a href="#courses" className="text-primary-200 hover:text-white transition-colors">Cursos</a>
            <a href="#results" className="text-primary-200 hover:text-white transition-colors">Resultados</a>
            <a href="#studio" className="text-primary-200 hover:text-white transition-colors">Studio</a>
            <a href="#contact" className="text-primary-200 hover:text-white transition-colors">Contato</a>
          </div>
          
          <div className="text-sm text-primary-300">
            &copy; {new Date().getFullYear()} WR Beauty. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;