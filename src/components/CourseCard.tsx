import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CourseCardProps {
  title: string;
  target: string;
  topics: string[];
  includes: string[];
  imageSrc: string;
  delay: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  target, 
  topics, 
  includes, 
  imageSrc,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full"
    >
      <div 
        className="h-56 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl text-primary-700 mb-2">{title}</h3>
        <div className="mb-4">
          <p className="font-medium text-accent-600">Para quem é:</p>
          <p className="text-accent-700">{target}</p>
        </div>
        
        <div className="mb-4 flex-grow">
          <p className="font-medium text-accent-600 mb-2">Você vai aprender:</p>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
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
            {includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 mr-2 text-secondary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <motion.a
          href="#contact"
          className="btn-primary mt-6 self-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Saber Mais
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CourseCard;