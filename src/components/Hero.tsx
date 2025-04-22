import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { School, Scissors, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white pt-20"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6">
            Beleza com Propósito: Cursos Profissionais para Mulheres que Querem Mais da Vida
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Transforme sua paixão por beleza em uma carreira de sucesso com os cursos da especialista Wanessa Ribeiro. 
            Aulas práticas, certificado reconhecido e mentoria para você se destacar no mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/agendar"
              className="btn-primary inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Horário
            </Link>
            <Link
              to="/cursos"
              className="btn-secondary inline-flex items-center"
            >
              <School className="w-5 h-5 mr-2" />
              Conhecer os Cursos
            </Link>
            <Link
              to="/studio"
              className="btn-outline border-white text-white hover:bg-white/10 inline-flex items-center"
            >
              <Scissors className="w-5 h-5 mr-2" />
              Conhecer o Studio
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-auto" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 74L59.6 63.4C120.1 52.7 240.7 31.3 360.4 25.3C480.1 19.3 599.9 28.7 719.6 38C839.3 47.3 959.9 56.7 1079.6 52.7C1199.3 48.7 1319.9 31.3 1380.4 22.7L1440 14V0H1380.4C1319.9 0 1199.3 0 1079.6 0C959.9 0 839.3 0 719.6 0C599.9 0 480.1 0 360.4 0C240.7 0 120.1 0 59.6 0H0V74Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;