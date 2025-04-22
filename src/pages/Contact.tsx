import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Instagram, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-20">
      <div className="section bg-primary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-primary-800">Fale Conosco</h1>
            <p className="text-lg">
              Tem dúvidas ou quer saber como começar?
              A equipe da WR Beauty está pronta para te ajudar a dar o primeiro passo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://maps.app.goo.gl/xxxxxxxx" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Endereço</h3>
              <p>Santo Antônio do Jardim – SP</p>
            </motion.a>

            <motion.a
              href="https://wa.me/5519994097090" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">WhatsApp</h3>
              <p>(19) 99409-7090</p>
            </motion.a>

            <motion.a
              href="https://instagram.com/wanessaribeirowr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                <Instagram className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">Instagram</h3>
              <p>@wanessaribeirowr</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;