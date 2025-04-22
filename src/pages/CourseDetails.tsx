import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const courseData = {
    'loiro-saudavel': {
      title: 'Loiro Saudável',
      description: 'Curso completo para dominar as técnicas de mechas e coloração, mantendo a saúde dos fios.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '40 horas',
      level: 'Iniciante a Intermediário',
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
      nextClasses: ['15/04/2024', '22/04/2024', '29/04/2024'],
      price: 'R$ 1.997,00',
      installments: '12x de R$ 189,90'
    }
  };

  const course = courseData[id as keyof typeof courseData];

  if (!course) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl mb-4">Curso não encontrado</h1>
        <Link to="/cursos" className="text-primary-600 hover:text-primary-700">
          Voltar para lista de cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="container py-12">
        <Link 
          to="/cursos"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para cursos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl mb-4">{course.title}</h1>
              <p className="text-xl text-accent-600 mb-8">{course.description}</p>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl mb-4">Sobre o Curso</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium text-accent-600">Duração</h3>
                    <p className="text-lg">{course.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-accent-600">Nível</h3>
                    <p className="text-lg">{course.level}</p>
                  </div>
                </div>
                <h3 className="font-medium text-accent-600 mb-2">Para quem é este curso:</h3>
                <p className="text-lg mb-6">{course.target}</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl mb-4">O que você vai aprender</h2>
                <ul className="space-y-3">
                  {course.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary-500">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl mb-4">O curso inclui</h2>
                <ul className="space-y-3">
                  {course.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-secondary-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl mb-4">Próximas Turmas</h2>
              <ul className="space-y-3 mb-6">
                {course.nextClasses.map((date, index) => (
                  <li key={index} className="flex items-center justify-between p-3 border rounded">
                    <span>{date}</span>
                    <span className="text-sm text-primary-600">Vagas disponíveis</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {course.price}
                </div>
                <div className="text-accent-600">
                  ou {course.installments}
                </div>
              </div>

              <Link
                to="/contato"
                className="btn-primary w-full text-center"
              >
                Quero me matricular
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;