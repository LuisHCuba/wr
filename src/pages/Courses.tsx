import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  target: string;
  topics: string[];
  includes: string[];
  imageSrc: string;
}

const Courses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'loiro-saudavel',
      title: 'Loiro Saudável',
      target: 'Iniciantes ou profissionais que querem dominar o loiro sem danificar os fios.',
      topics: [
        'Técnicas de mechas, luzes, balayage, morena iluminada',
        'Diagnóstico capilar e neutralização de tons',
        'Escolha correta de produtos e oxidantes',
        'Finalização com styling profissional',
        'Montagem de portfólio no Instagram'
      ],
      includes: [
        'Prática com modelo real',
        'Apostilas impressa e digital',
        'Certificado com selo de salão premiado',
        'Mentoria para captar clientes'
      ],
      imageSrc: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'corte-profissional',
      title: 'Corte Profissional',
      target: 'Profissionais que desejam atualizar seus cortes ou iniciantes com foco em técnica.',
      topics: [
        'Corte feminino (reto, em camadas, desfiado, long bob)',
        'Técnica de visagismo para cortes personalizados',
        'Cortes para redes sociais: como criar conteúdo com cada cliente',
        'Dicas de acabamento e finalização para impacto visual'
      ],
      includes: [
        'Treino com modelo',
        'Certificado',
        'Apostilas e orientações para captação de clientes'
      ],
      imageSrc: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'liso-saudavel',
      title: 'Liso Saudável',
      target: 'Quem quer dominar técnicas de alisamento com segurança e ética.',
      topics: [
        'Tipos de alisamento (definitivo, progressiva, orgânico)',
        'Análise capilar pré e pós aplicação',
        'Combinação correta de produtos',
        'Cuidados e reconstrução capilar',
        'Pós-venda e fidelização de clientes'
      ],
      includes: [
        'Mentoria sobre venda de alisamento sem agredir o fio',
        'Aulas práticas',
        'Material didático e certificado'
      ],
      imageSrc: 'https://images.pexels.com/photos/3993303/pexels-photo-3993303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'formacao-completa',
      title: 'Formação Profissional Completa',
      target: 'Quem quer abrir seu próprio salão ou começar uma nova carreira.',
      topics: [
        'Corte, alisamento, coloração, luzes, visagismo',
        'Auto maquiagem e atendimento profissional',
        'Gestão básica de salão',
        'Estratégias para atrair clientes e criar agenda cheia'
      ],
      includes: [
        'Suporte direto com a instrutora',
        'Apostila física e digital',
        'Mentoria para empreender',
        'Certificado com selo "Melhor do Ano"'
      ],
      imageSrc: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section className="pt-20">
      <div className="section bg-gradient-to-b from-white to-primary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-primary-800">Nossos Cursos Profissionais</h1>
            <p className="text-lg">
              Os cursos da WR Beauty foram pensados para você que quer começar do zero ou se aperfeiçoar 
              com técnicas modernas, práticas e lucrativas. Você vai aprender direto com quem faz e vive 
              de beleza todos os dias.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="h-56 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${course.imageSrc})` }}
                />
                
                <div className="p-6">
                  <h2 className="text-2xl text-primary-700 mb-2">{course.title}</h2>
                  <div className="mb-4">
                    <p className="font-medium text-accent-600">Para quem é:</p>
                    <p className="text-accent-700">{course.target}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-accent-600 mb-2">Você vai aprender:</p>
                    <ul className="space-y-2">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-primary-500">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium text-accent-600 mb-2">Inclui:</p>
                    <ul className="space-y-2">
                      {course.includes.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 mr-2 text-secondary-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/cursos/${course.id}`}
                    className="btn-primary mt-6 w-full text-center"
                  >
                    Ver Detalhes do Curso
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;