import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import './index.css';

import TemplatePreview from './pages/TemplatePreview';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/template-premium" element={<TemplatePreview />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
