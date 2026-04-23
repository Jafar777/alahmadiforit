'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);

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
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus(null), 3000);
      e.target.reset();
    }, 1500);
  };

  const phoneNumber = '966546866105';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ background: 'linear-gradient(135deg, #283593, #559fd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t('contact_title')}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          {t('contact_subtitle')}
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div ref={formRef} className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('contact_name')}</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2772cd] focus:border-transparent transition" placeholder={t('contact_name')} />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('contact_email')}</label>
                <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2772cd] focus:border-transparent transition" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t('contact_message')}</label>
                <textarea rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2772cd] focus:border-transparent transition" placeholder={t('contact_message')} />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full rounded-xl py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(90deg, #102039 0%, #253c66 50%, #415175 100%)' }}
              >
                {formStatus === 'sending' ? t('contact_sending') : t('contact_send')}
              </button>
              {formStatus === 'success' && <p className="text-green-600 text-center mt-2">{t('contact_success')}</p>}
            </form>
          </div>

          <div ref={infoRef} className="flex-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#283593' }}>{t('contact_info')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2772cd]/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#2772cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact_email_label')}</h4>
                    <a href="mailto:info@alahmadico.com" className="text-gray-600 hover:text-[#2772cd] transition">info@alahmadico.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#2772cd]/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#2772cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div >
                    <h4 className="font-semibold text-gray-800">{t('contact_phone_label')}</h4>
                    <a dir='ltr' href="tel:+966546866105" className="text-gray-600 hover:text-[#2772cd]  transition">+966 546866105</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#2772cd]/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-[#2772cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact_office_label')}</h4>
                    <p className="text-gray-600">{t('contact_office_value')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">{t('contact_follow')}</h4>
                <div className="flex gap-4">
                  <a href="https://x.com/AlahmadiForIT" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-[#2772cd]/10 transition">
                    <FaXTwitter className="w-5 h-5 text-[#2772cd]" />
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-[#2772cd]/10 transition">
                    <FaWhatsapp className="w-5 h-5 text-[#2772cd]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}