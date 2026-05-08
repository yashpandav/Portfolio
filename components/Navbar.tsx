import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '~/home', href: '#home' },
    { name: '~/about', href: '#about' },
    { name: '~/experience', href: '#experience' },
    { name: '~/skills', href: '#skills' },
    { name: '~/projects', href: '#projects' },
    { name: '~/recognition', href: '#achievements' },
    { name: '~/contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isScrolled ? 'glass h-16' : 'bg-transparent h-20 border-b border-transparent'} animate-[slideDown_0.6s_ease-out_forwards]`}>
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 bg-zinc-900 border border-zinc-800 rounded group-hover:border-zinc-600 transition-colors duration-300">
            <Terminal className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="font-mono font-semibold text-sm tracking-tight text-zinc-200 group-hover:text-white transition-colors duration-300">
            yash_pandav<span className="animate-cursor-blink text-emerald-500">_</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-mono text-xs text-zinc-400 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white p-2 transition-colors duration-300"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 top-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className="relative group block px-4 py-3 rounded-lg text-sm font-mono text-zinc-400 hover:text-white transition-all duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-4 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;