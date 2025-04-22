import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Results from './pages/Results';
import Studio from './pages/Studio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:id" element={<CourseDetails />} />
          <Route path="/resultados" element={<Results />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;