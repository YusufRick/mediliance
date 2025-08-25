import { useState } from 'react';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { Homepage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { ShareholdersPage } from './pages/ShareholdersPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'clients':
        return <ClientsPage />;
      case 'shareholders':
        return <ShareholdersPage />;
      default:
        return <Homepage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}