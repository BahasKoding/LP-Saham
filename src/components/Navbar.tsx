import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollspy } from '../hooks/useScrollspy';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const activeId = useScrollspy(
    navItems.map(item => item.href.substring(1)),
    64
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      hasScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              hasScrolled ? 'text-white' : 'text-white'
            }`}>SAHAM</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeId === item.href.substring(1)
                      ? 'text-yellow-400'
                      : hasScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                hasScrolled 
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}>
                Join Now
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-3 py-2 text-base font-medium ${
                  activeId === item.href.substring(1)
                    ? 'text-yellow-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors mt-4">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};