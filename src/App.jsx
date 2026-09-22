import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import BackToTop from './components/BackToTop.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Gallery from './pages/Gallery.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Enquiry from './pages/Enquiry.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <ScrollToTop />
      {/* <TopBar /> */}
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
