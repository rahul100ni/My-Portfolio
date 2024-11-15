import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';

const Nav = ({ activeSection }: { activeSection: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-violet-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <motion.a
            href="#"
            className="relative group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/20 blur-lg rounded-full group-hover:bg-violet-500/30 transition-colors duration-300" />
              <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-violet-400 absolute" />
                <span className="text-xs font-mono text-violet-400 relative z-20">&gt;_</span>
              </div>
            </div>
            <span className="font-mono text-lg bg-gradient-to-r from-violet-400 to-purple-500 text-transparent bg-clip-text group-hover:from-violet-300 group-hover:to-purple-400 transition-all duration-300">
              sudo
            </span>
          </motion.a>

          {/* Rest of the nav component remains the same */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-violet-400'
                    : 'text-gray-300 hover:text-violet-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-violet-500/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-violet-500/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {isOpen ? (
              <X className="w-5 h-5 text-violet-400" />
            ) : (
              <Menu className="w-5 h-5 text-violet-400" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-violet-500/10 backdrop-blur-md bg-black/90"
          >
            <div className="container mx-auto px-4 py-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex items-center gap-2 py-3 ${
                    activeSection === link.href.slice(1)
                      ? 'text-violet-400'
                      : 'text-gray-300'
                  }`}
                >
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-violet-400 translate-x-0'
                      : 'text-gray-400 -translate-x-2 group-hover:translate-x-0'
                  }`} />
                  <span className="transition-colors duration-300 group-hover:text-violet-400">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;