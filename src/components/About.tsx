import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-primary-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wanessa Ribeiro" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-secondary-500">
                <p className="font-serif italic text-lg">10 anos de experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-primary-800">Quem é a profissional por trás do WR Beauty?</h2>
            <p className="text-lg">
              Sou a Wanessa Ribeiro, apaixonada por beleza, formada em visagismo e com quase uma década de atuação 
              prática no mercado de salão. Acredito que a beleza é uma ferramenta poderosa de autoestima, 
              empoderamento e transformação profissional — especialmente para mulheres que desejam mais independência 
              financeira e realização pessoal.
            </p>
            <p className="text-lg">
              Fundadora do Studio WR Beauty, minha missão vai além dos cabelos: quero ensinar, inspirar e abrir 
              caminhos para quem sonha em crescer no universo da beleza.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-primary-500">
                <h3 className="text-xl mb-2 text-primary-700">Missão</h3>
                <p className="text-sm">Formar profissionais capacitadas e seguras, prontas para gerar renda e transformar vidas.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-primary-500">
                <h3 className="text-xl mb-2 text-primary-700">Visão</h3>
                <p className="text-sm">Ser referência regional em formação profissional na área da beleza.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border-t-4 border-primary-500">
                <h3 className="text-xl mb-2 text-primary-700">Valores</h3>
                <p className="text-sm">Respeito | Comprometimento | Empreendedorismo Feminino | Ética Profissional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;