import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import ApplicationList from './components/ApplicationList';
import Gallery from './components/Gallery';
import Positions from './components/Positions';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApply = (position) => {
    setSelectedPosition(position);
    setCurrentPage('register');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <About />;
      case 'positions':
        return <Positions onApply={handleApply} />;
      case 'gallery':
        return <Gallery />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'register':
        return <RegistrationForm selectedPosition={selectedPosition} />;
      case 'admin':
        return <ApplicationList />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header setPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
