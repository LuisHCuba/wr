import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;