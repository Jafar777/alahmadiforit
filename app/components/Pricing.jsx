'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const pricingData = {
  mobile: {
    titleKey: 'mobile_title',
    plans: [
      { nameKey: 'starter', price: '⃁ 3,499', descriptionKey: 'starter_desc', featuresKeys: ['feature_ios_android', 'feature_5_screens', 'feature_basic_ui', 'feature_app_store', 'feature_3_months'], popular: false, buttonKey: 'get_started' },
      { nameKey: 'professional', price: '⃁ 9,499', descriptionKey: 'professional_desc', featuresKeys: ['feature_both_os', 'feature_15_screens', 'feature_advanced_ui', 'feature_backend', 'feature_push', 'feature_6_months'], popular: true, buttonKey: 'get_started' },
      { nameKey: 'enterprise', price: 'Custom', descriptionKey: 'enterprise_desc', featuresKeys: ['feature_cross_platform', 'feature_unlimited_screens', 'feature_custom_anim', 'feature_cloud_backend', 'feature_analytics', 'feature_12_months'], popular: false, buttonKey: 'contact_us' }
    ]
  },
  web: {
    titleKey: 'web_title',
    plans: [
      { nameKey: 'basic', price: '⃁ 2,999', descriptionKey: 'basic_desc', featuresKeys: ['feature_responsive', 'feature_5_pages', 'feature_contact_form', 'feature_basic_seo', 'feature_3_months_maintenance'], popular: false, buttonKey: 'get_started' },
      { nameKey: 'business', price: '⃁ 7,999', descriptionKey: 'business_desc', featuresKeys: ['feature_fullstack', 'feature_20_pages', 'feature_cms', 'feature_ecommerce', 'feature_advanced_seo', 'feature_6_months_maintenance'], popular: true, buttonKey: 'get_started' },
      { nameKey: 'enterprise', price: 'Custom', descriptionKey: 'enterprise_web_desc', featuresKeys: ['feature_custom_web', 'feature_unlimited_scalability', 'feature_ai_ml', 'feature_high_availability', 'feature_dedicated_support', 'feature_12_months_maintenance'], popular: false, buttonKey: 'contact_us' }
    ]
  }
};

export default function Pricing() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const mobileTitleRef = useRef(null);
  const webTitleRef = useRef(null);
  const mobileCardsRef = useRef([]);
  const webCardsRef = useRef([]);

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
      gsap.fromTo(mobileTitleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, scrollTrigger: {
          trigger: mobileTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(webTitleRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, scrollTrigger: {
          trigger: webTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(mobileCardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(0.6)', scrollTrigger: {
          trigger: mobileTitleRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
      gsap.fromTo(webCardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(0.6)', scrollTrigger: {
          trigger: webTitleRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        }}
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const PlanCard = ({ plan, idx, type }) => {
    const cardRef = (el) => {
      if (type === 'mobile') mobileCardsRef.current[idx] = el;
      else webCardsRef.current[idx] = el;
    };
    return (
      <div
        ref={cardRef}
        className={`relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col ${
          plan.popular ? 'ring-2 ring-[#650bc2] ring-offset-2' : ''
        }`}
      >
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-[#650bc2] to-[#a81ed6] text-white px-4 py-1 text-sm font-semibold rounded-bl-2xl">
            {t('most_popular')}
          </div>
        )}
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold mb-2"
              style={{ background: 'linear-gradient(135deg, #650bc2, #a81ed6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t(plan.nameKey)}
          </h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
            {plan.price !== 'Custom' && <span className="text-gray-500"> {t('price_one_time')}</span>}
          </div>
          <p className="text-gray-600 text-sm mb-6">{t(plan.descriptionKey)}</p>
          <ul className="space-y-2 mb-8">
            {plan.featuresKeys.map((key, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <svg className="w-5 h-5 text-[#a81ed6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 pt-0">
          <button
            className="w-full rounded-xl py-3 font-semibold text-white transition hover:scale-105 hover:cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #660bc2 0%, #d257a7 50%, #d257a7 100%)',
            }}
          >
            {t(plan.buttonKey)}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ background: 'linear-gradient(135deg, #650bc2, #a81ed6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {t('pricing_title')}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16">{t('pricing_subtitle')}</p>

        <div className="mb-20">
          <h3 ref={mobileTitleRef} className="text-3xl md:text-4xl font-bold text-center text-[#283593] mb-10">
            {t('mobile_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.mobile.plans.map((plan, idx) => (
              <PlanCard key={`mobile-${idx}`} plan={plan} idx={idx} type="mobile" />
            ))}
          </div>
        </div>

        <div>
          <h3 ref={webTitleRef} className="text-3xl md:text-4xl font-bold text-center text-[#283593] mb-10">
            {t('web_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.web.plans.map((plan, idx) => (
              <PlanCard key={`web-${idx}`} plan={plan} idx={idx} type="web" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}