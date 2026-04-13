'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useAnimation } from '../context/AnimationContext';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const heroRef = useRef(null);
  const { headerAnimationDone } = useAnimation();
  const { t } = useLanguage();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (headerAnimationDone && !hasAnimated.current && heroRef.current) {
      hasAnimated.current = true;
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, [headerAnimationDone]);

  return (
    <div 
      ref={heroRef} 
      className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen w-full px-6 md:px-16 lg:px-24 gap-8 md:gap-12 py-12"
    >
      <div className="w-full md:w-1/2 text-center md:text-left" style={{ opacity: 0 }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#283593] mb-4">
          {t('hero_title')}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#f87e11] mb-8">
          {t('hero_subtitle')}
        </p>
        <button
          className="rounded-2xl px-8 py-4 text-lg md:text-xl font-semibold text-white transition hover:scale-105 hover:cursor-pointer"
          style={{
            fontFamily: 'system-ui, "Segoe UI", Tahoma, sans-serif',
            background: 'linear-gradient(90deg, #660bc2 0%, #d257a7 50%, #d257a7 100%)',
          }}
        >
          {t('hero_btn')}
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center" style={{ opacity: 0 }}>
        <img
          src="/herobg.png"
          alt="Hero illustration"
          className="w-3/4 sm:w-2/3 md:w-full max-w-2xl h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}