import { Button } from '../components/ui/button';

export function Header({ currentPage, onNavigate }) {
  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Clients', id: 'clients' },
    { name: 'Shareholders', id: 'shareholders' }
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Mediliance
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id)}
                className="text-sm"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Simple mobile menu toggle - in a real app you'd want a proper mobile menu
                const nav = navigation.find(item => item.id !== currentPage);
                if (nav) onNavigate(nav.id);
              }}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}