import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Droplet, Crop, Sparkles, Palette } from 'lucide-react';

const Studio: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      title: 'Coloração e loiros personalizados',
      description: 'Técnicas modernas para coloração que valoriza seu tom de pele'
    },
    {
      icon: <Droplet className="w-8 h-8 text-primary-600" />,
      title: 'Alisamento saudável com diagnóstico',
      description: 'Avaliação personalizada para o melhor procedimento para seu tipo de cabelo'
    },
    {
      icon: <Scissors className="w-8 h-8 text-primary-600" />,
      title: 'Cortes modernos e visagismo',
      description: 'Cortes que valorizam seus traços e facilitam a manutenção diária'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary-600" />,
      title: 'Hidratação e reconstrução capilar',
      description: 'Tratamentos intensivos para recuperar fios danificados'
    },
    {
      icon: <Crop className="w-8 h-8 text-primary-600" />,
      title: 'Maquiagem profissional',
      description: 'Produções para eventos especiais que valorizam sua beleza natural'
    }
  ];

  return (
    <section className="pt-20">
      <div className="section bg-gradient-to-b from-white to-primary-50 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-primary-800">Atendimento no Studio</h1>
              <p className="text-lg mb-6">
                Além dos cursos, o Studio WR Beauty atende com foco em personalização e saúde capilar. 
                Aqui, cada cliente é tratada com exclusividade.
              </p>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">{service.title}</h3>
                      <p className="text-accent-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8"
              >
                <a 
                  href="/#booking" 
                  className="btn-primary"
                >
                  Agendar Atendimento
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Studio WR Beauty" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg border-r-4 border-secondary-500">
                  <p className="font-serif text-lg">Ambiente acolhedor e exclusivo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;