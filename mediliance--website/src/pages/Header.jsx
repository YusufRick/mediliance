import { useState } from 'react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Clients', id: 'clients' },
    { name: 'Shareholders', id: 'shareholders' }
  ];

  const spring = { type: 'spring', stiffness: 500, damping: 40, mass: 0.6 };

  return (
    <header className="bg-background/80 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center h-16"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.35 } }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-primary relative"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            Mediliance
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="relative flex gap-2 p-1 rounded-md">
              {navigation.map((item) => {
                const active = currentPage === item.id;
                return (
                  <motion.div
                    key={item.id}
                    className="relative"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={spring}
                  >
                    {/* The animated pill background (shared layout) */}
                    {active && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-md"
                        style={{ zIndex: 0 }}
                        transition={spring}
                        // Tailwind class for subtle pill (uses your theme)
                        // You can swap to bg-primary/10 for stronger contrast
                        // or add ring classes for a bordered look.
                        // Example: "bg-primary/10 ring-1 ring-primary/20"
                        // Keeping it subtle by default:
                        initial={false}
                        animate={{ backgroundColor: 'rgba(0,0,0,0.06)' }}
                      />
                    )}

                    <Button
                      variant={active ? 'default' : 'ghost'}
                      onClick={() => onNavigate(item.id)}
                      className={`relative text-sm transition-colors z-10 ${active ? 'shadow-sm' : ''}`}
                    >
                      {item.name}
                    </Button>

                    {/* Optional animated underline for extra flair */}
                    <div className="absolute left-2 right-2 -bottom-1 h-[2px]">
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            layoutId="navUnderline"
                            className="h-[2px] w-full rounded-full bg-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={spring}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen((o) => !o)}
            >
              Menu
            </Button>
          </div>
        </motion.div>

        {/* Mobile Sheet */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1, transition: { duration: 0.25 } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-2 grid gap-1">
                {navigation.map((item) => {
                  const active = currentPage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        setMobileOpen(false);
                        onNavigate(item.id);
                      }}
                      className={`text-left px-3 py-2 rounded-md ${active ? 'bg-primary/10 text-primary' : 'hover:bg-accent'}`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={spring}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
