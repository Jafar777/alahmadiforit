'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Word() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: 'back.out(0.5)' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef} className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-shrink-0">
              <div ref={imageRef} className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-[#650bc2]/20 shadow-lg">
                <img src="/ceo.png" alt="Qosay Hashim Alahmadi - CEO" className="w-full h-full object-cover" />
              </div>
            </div>
            <div ref={textRef} className="flex-1 text-center md:text-right">
              <div className="relative">
                <svg className="absolute -top-6 -right-6 w-12 h-12 text-[#650bc2]/20 hidden md:block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                  {t('ceo_quote')}
                </p>
                <div className="border-t-2 border-[#650bc2]/20 pt-4">
                  <h3 className="text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #650bc2, #a81ed6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {t('ceo_name')}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{t('ceo_title')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}