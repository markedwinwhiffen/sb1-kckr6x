import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactUs from './pages/ContactUs';
import EmergencyServices from './pages/EmergencyServices';
import FAQPage from './pages/FAQPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;