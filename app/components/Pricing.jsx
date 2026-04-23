'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  const phoneNumber = '966546866105'; // same as in footer/contact
  const message = language === 'ar'
    ? 'في حال اردت برمجة تطبيقات جوال او مكتبية او مواقع الكترونية تواصل معنا للحصول على عرض سعر'
    : 'If you want to develop mobile, desktop, or web applications, contact us to get a quote.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.4, ease: 'back.out(0.5)', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6"
            style={{ background: 'linear-gradient(135deg, #283593, #559fd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t('pricing_title')}
        </h2>
        <div ref={contentRef} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {language === 'ar'
              ? 'في حال اردت برمجة تطبيقات جوال او مكتبية او مواقع الكترونية تواصل معنا للحصول على عرض سعر'
              : 'If you want to develop mobile, desktop, or web applications, contact us to get a quote.'}
          </p>
        </div>
        <a
          ref={buttonRef}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl px-8 py-4 text-lg md:text-xl font-semibold text-white transition hover:scale-105 hover:cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #102039 0%, #253c66 50%, #415175 100%)',
          }}
        >
          {t('offerprice')}
        </a>
      </div>
    </section>
  );
}