import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Studio', href: '/studio' },
    { name: 'Contato', href: '/contato' },
  ];

  const isHomePage = location.pathname === '/';
  const textColor = (!scrolled && isHomePage) ? 'text-white' : 'text-accent-700';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600">
            <Scissors className="w-5 h-5 text-white" />
          </span>
          <span className="font-serif font-bold text-2xl text-primary-700">WR Beauty</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors duration-300 hover:text-primary-600 ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${textColor}`} />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 font-medium text-accent-700 hover:text-primary-600"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;