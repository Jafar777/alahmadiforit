'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useAnimation } from '../context/AnimationContext';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const logoRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { registerAnimation, setHeaderComplete } = useAnimation();
  const { language, toggleLanguage, t } = useLanguage();
  const hasAnimated = useRef(false);

  const animateLogo = () => {
    if (hasAnimated.current || !logoRef.current) return;
    hasAnimated.current = true;

    gsap.fromTo(logoRef.current,
      { y: -200, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: 'back.out(1.2)',
        onComplete: () => setHeaderComplete()
      }
    );
  };

  useEffect(() => {
    registerAnimation(animateLogo);
  }, [registerAnimation]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'services', label: t('nav_services') },
    { id: 'pricing', label: t('nav_pricing') },
    { id: 'contact', label: t('nav_contact') }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-3 flex items-center justify-between">
          <img
            ref={logoRef}
            src="/logo.png"
            alt="Alahmadi Co Logo"
            className="h-17 md:h-22 w-auto drop-shadow-lg cursor-pointer"
            style={{ opacity: 0 }}
            onClick={() => scrollToSection('home')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#2a4270] hover:text-[#2772cd] font-medium capitalize transition duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2772cd] to-[#2a4270] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-[#2772cd] font-medium transition ml-4 px-3 py-1 rounded-full border border-gray-300 hover:border-[#2772cd]"
            >
              {t('lang_toggle')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-[#2772cd] font-medium px-2 py-1 rounded-full border border-gray-300 text-sm"
            >
              {t('lang_toggle')}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col items-center py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[#2772cd] font-medium capitalize py-2 w-full text-center transition"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-16 md:h-20" />
    </>
  );
}