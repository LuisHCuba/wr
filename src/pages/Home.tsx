import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { School, Instagram, MessageSquare } from 'lucide-react';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center text-white pt-20"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/hero.png)',
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
            <h1 className="mb-6 text-gold drop-shadow-lg">
              Beleza com Propósito: Cursos Profissionais para Mulheres que Querem Mais da Vida
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transforme sua paixão por beleza em uma carreira de sucesso com os cursos da especialista Wanessa Ribeiro. 
              Aulas práticas, certificado reconhecido e mentoria para você se destacar no mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/cursos"
                className="bg-primary-500 hover:bg-primary-600 text-white inline-flex items-center px-6 py-3 rounded-full shadow-lg"
              >
                <School className="w-5 h-5 mr-2" />
                Conhecer os Cursos
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

      <Features />

      <section className="py-16 bg-secondary-50">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-primary-700 mb-4">Nossa Especialista</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Wanessa Ribeiro é referência em técnicas de beleza modernas e inovadoras
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="/wanessaribeirowr_1727519643_3466750543031333992_2128568703.jpg" 
                alt="Wanessa Ribeiro" 
                className="w-full h-auto object-cover" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary-600">Experiência e Dedicação</h3>
              <p className="text-gray-700 mb-6">
                Com mais de 10 anos de experiência no mercado da beleza, Wanessa Ribeiro traz métodos exclusivos e técnicas avançadas
                para seus cursos profissionalizantes. Cada detalhe é cuidadosamente pensado para garantir o aprendizado completo.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/wanessaribeirowr_1727519333_3467005912366256005_2128568703.jpg" 
                  alt="Trabalho de Wanessa Ribeiro" 
                  className="rounded-lg shadow-md" 
                />
                <img 
                  src="/wanessaribeirowr_1727519400_3466747184903779313_2128568703.jpg" 
                  alt="Trabalho de Wanessa Ribeiro" 
                  className="rounded-lg shadow-md" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-primary-700">Comece Sua Jornada Hoje</h2>
            <p className="text-lg mb-8 text-gray-700">
              Descubra como nossos cursos podem transformar sua paixão por beleza em uma carreira de sucesso.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/cursos" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full shadow-md w-full md:w-auto">
                Ver Todos os Cursos
              </Link>
              <a 
                href="https://instagram.com/studiowanessaribeiro?igshid=oelo213oophi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-rose text-secondary-500 hover:bg-secondary-50 px-6 py-3 rounded-full shadow-md inline-flex items-center justify-center w-full md:w-auto"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Siga no Instagram
              </a>
              <a 
                href="https://wa.me/5519994097090" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full shadow-md inline-flex items-center justify-center w-full md:w-auto"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;