import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, BookOpen, MessageSquare, Rocket } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      text: 'Instrutora com quase 10 anos de experiência',
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600" />,
      text: 'Salão eleito "Melhor do Ano" em 2023 e 2024',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      text: 'Método 100% prático e focado no mercado real',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
      text: 'Mentoria em administração de salão incluso',
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary-600" />,
      text: 'Formação rápida para você sair ganhando dinheiro',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center text-primary-800 mb-12"
          >
            Por Que Escolher a WR Beauty?
          </motion.h2>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="feature-item bg-white p-4 rounded-lg shadow-sm"
              >
                {feature.icon}
                <p className="text-lg font-medium m-0">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white p-6 md:p-8 rounded-2xl shadow-md max-w-3xl mx-auto border-l-4 border-primary-500"
        >
          <p className="text-lg italic mb-4">
            "O curso da Wanessa mudou minha vida. Em três meses já tinha minhas primeiras clientes e hoje vivo do que amo."
          </p>
          <p className="font-semibold">— Amanda Costa, ex-aluna e hoje empreendedora</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;