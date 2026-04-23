'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const serviceKeys = [
  { 
    titleKey: 'service_1_title',
    shortKey: 'service_1_short',
    fullKey: 'service_1_full',
    video: '/desktopapps.mp4'
  },
  { 
    titleKey: 'service_2_title',
    shortKey: 'service_2_short',
    fullKey: 'service_2_full',
    video: '/webapps.mp4'
  },
  { 
    titleKey: 'service_3_title',
    shortKey: 'service_3_short',
    fullKey: 'service_3_full',
    video: '/mobileapps.mp4'
  },
  { 
    titleKey: 'service_4_title',
    shortKey: 'service_4_short',
    fullKey: 'service_4_full',
    video: '/graphicdesign.mp4'
  },
  { 
    titleKey: 'service_5_title',
    shortKey: 'service_5_short',
    fullKey: 'service_5_full',
    video: '/cloud.mp4'
  },
  { 
    titleKey: 'service_6_title',
    shortKey: 'service_6_short',
    fullKey: 'service_6_full',
    video: '/cybersecurity.mp4'
  },
];

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const videoRefs = useRef([]);

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
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(0.7)', scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (idx) => {
    const video = videoRefs.current[idx];
    if (video) video.play();
  };

  const handleCardMouseLeave = (idx) => {
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ background: 'linear-gradient(135deg, #283593, #559fd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t('services_title')}
        </h2>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-center text-gray-700 mb-16">
          {t('services_subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((service, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group backdrop-blur-md bg-white/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/95"
              style={{
                border: '1px solid rgba(40, 53, 147, 0.25)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={() => handleCardMouseEnter(idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-[#283593]/10 to-[#559fd8]/10 overflow-hidden">
                <video
                  ref={el => videoRefs.current[idx] = el}
                  src={service.video}
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2"
                    style={{ background: 'linear-gradient(135deg, #283593, #559fd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm font-semibold text-[#283593] mb-3">{t(service.shortKey)}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{t(service.fullKey)}</p>
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-[#283593] to-[#559fd8] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}