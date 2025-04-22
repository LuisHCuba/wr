import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Results: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transformations = [
    {
      beforeImage: 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      afterImage: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Transformação Loiro',
      description: 'De morena para um loiro iluminado respeitando a saúde dos fios'
    },
    {
      beforeImage: 'https://images.pexels.com/photos/3762894/pexels-photo-3762894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      afterImage: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Corte Moderno',
      description: 'Repaginação completa com corte que valoriza os traços do rosto'
    },
    {
      beforeImage: 'https://images.pexels.com/photos/3762893/pexels-photo-3762893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      afterImage: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Saúde Capilar',
      description: 'Recuperação de cabelos danificados com tratamentos intensivos'
    }
  ];

  const testimonials = [
    {
      quote: "Já fiz vários cursos de cabeleireira, mas nenhum me ensinou tanto quanto o da Wanessa. Ela realmente se preocupa em nos preparar para o mercado real.",
      name: "Marina Souza, aluna do curso Formação Completa"
    },
    {
      quote: "Em apenas um mês após o curso, já consegui meus primeiros clientes para mechas. O investimento se pagou rapidamente!",
      name: "Carla Mendes, especialista em loiros"
    },
    {
      quote: "Além da técnica, aprendi a gerenciar meu próprio salão. Hoje tenho meu espaço e faço meu próprio horário.",
      name: "Patricia Lima, empreendedora e ex-aluna"
    }
  ];

  return (
    <section id="results" className="section bg-gradient-to-b from-primary-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-primary-800">Transformações Profundas — na Beleza e na Vida</h2>
          <p className="text-lg">
            Veja com os próprios olhos como nossos cursos mudaram a trajetória de dezenas de alunas.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card overflow-hidden"
            >
              <div className="relative">
                <div className="relative flex">
                  <div className="w-1/2 overflow-hidden">
                    <img src={transformation.beforeImage} alt="Antes" className="object-cover h-64 w-full" />
                    <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Antes
                    </div>
                  </div>
                  <div className="w-1/2 overflow-hidden">
                    <img src={transformation.afterImage} alt="Depois" className="object-cover h-64 w-full" />
                    <div className="absolute top-2 right-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Depois
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary-700 mb-1">{transformation.title}</h3>
                <p className="text-accent-600">{transformation.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-primary-500"
            >
              <p className="italic mb-4">{testimonial.quote}</p>
              <p className="font-bold text-primary-700">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;