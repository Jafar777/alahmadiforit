'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    // Header
    nav_home: 'الرئيسية',
    nav_services: 'الخدمات',
    nav_pricing: 'الأسعار',
    nav_contact: 'اتصل بنا',
    lang_toggle: 'English',
    // Hero
    hero_title: 'تمكين مستقبلك الرقمي',
    hero_subtitle: 'مواقع إلكترونية وتطبيقات جوال راقية لتلبية احتياجاتك',
    hero_btn: 'ابدأ الآن',
    // Services
    services_title: 'خدماتنا',
    services_subtitle: 'نفتخر بتقديم خدمات متميزة',
    // Inside 'ar' object:
service_1_title: 'تطبيقات سطح المكتب المؤسسية',
service_1_short: 'حلول سطح مكتب قوية وآمنة وقابلة للتوسع',
service_1_full: 'نقوم ببناء تطبيقات سطح مكتب متينة على مستوى المؤسسات مصممة خصيصًا لسير عمل عملك. من خلال الاستفادة من الأطر الحديثة، توفر تطبيقاتنا أداءً عاليًا وقدرات غير متصلة بالإنترنت وتكاملًا سلسًا مع الأنظمة الحالية.',
service_2_title: 'تطبيقات الويب',
service_2_short: 'تجارب ويب متطورة',
service_2_full: 'من تطبيقات الصفحة الواحدة سريعة الاستجابة إلى المنصات الكاملة، نقوم بإنشاء تطبيقات ويب سريعة وسهلة الوصول ومُحسّنة لمحركات البحث. باستخدام React و Next.js والواجهات الخلفية الحديثة، نقدم حلولاً مستقبلية.',
service_3_title: 'تطبيقات الجوال',
service_3_short: 'تميز أصلي ومتعدد المنصات',
service_3_full: 'تطبيقات iOS و Android ومنصات متعددة تم إنشاؤها باستخدام Flutter أو React Native. نركز على تجربة المستخدم السلسة والمزامنة دون اتصال والإشعارات الفورية ونشر المتاجر.',
service_4_title: 'التصميم الجرافيكي',
service_4_short: 'هوية بصرية تتحدث بصوت عالٍ',
service_4_full: 'شعارات وعلامات تجارية ورسومات وسائل التواصل الاجتماعي ومواد تسويقية. تصاميمنا حديثة ولا تُنسى ومتوافقة مع صوت علامتك التجارية.',
service_5_title: 'التحول السحابي',
service_5_short: 'توسع مع استراتيجيات السحابة الأصلية',
service_5_full: 'نساعدك في ترحيل البنية التحتية السحابية وتحسينها وإدارتها (AWS، Azure، GCP). من الخوادم بدون خادم إلى الحاويات، نضمن فعالية التكلفة والمرونة.',
service_6_title: 'الأمن السيبراني',
service_6_short: 'احمِ ما يهم أكثر',
service_6_full: 'تقييمات المخاطر واختبار الاختراق والامتثال والمراقبة المستمرة. نحمي أصولك الرقمية بأفضل الممارسات الصناعية.',
    // Pricing
    pricing_title: 'اختر خطتك',
    pricing_subtitle: 'أسعار مرنة لكل الاحتياجات – بدون رسوم خفية',
    mobile_title: 'تطبيقات الجوال',
    web_title: 'تطبيقات الويب وسطح المكتب',
    starter: 'مبتدئ',
    professional: 'احترافي',
    enterprise: 'مؤسسي',
    basic: 'أساسي',
    business: 'أعمال',
    price_one_time: '/ مرّة واحدة',
    most_popular: 'الأكثر طلباً',
    get_started: 'ابدأ الآن',
    contact_us: 'اتصل بنا',
    // Pricing descriptions
    starter_desc: 'مثالي للشركات الصغيرة والناشئة',
    professional_desc: 'للشركات المتنامية',
    enterprise_desc: 'حلول متكاملة',
    basic_desc: 'مثالي للصفحات التعريفية والمواقع الصغيرة',
    business_desc: 'لتطبيقات الويب الديناميكية',
    enterprise_web_desc: 'منصات واسعة النطاق',
    // Features
    feature_ios_android: 'تطبيق iOS أو Android',
    feature_5_screens: 'حتى 5 شاشات',
    feature_basic_ui: 'تصميم واجهة أساسي',
    feature_app_store: 'رفع إلى المتجر',
    feature_3_months: 'دعم 3 أشهر',
    feature_both_os: 'نظامي iOS و Android',
    feature_15_screens: 'حتى 15 شاشة',
    feature_advanced_ui: 'تصميم واجهة متقدم',
    feature_backend: 'تكامل خلفي',
    feature_push: 'إشعارات فورية',
    feature_6_months: 'دعم 6 أشهر',
    feature_cross_platform: 'متعدد المنصات (Flutter/RN)',
    feature_unlimited_screens: 'شاشات غير محدودة',
    feature_custom_anim: 'رسوم متحركة مخصصة',
    feature_cloud_backend: 'خلفية سحابية',
    feature_analytics: 'تحليلات ومراقبة',
    feature_12_months: 'دعم 12+ شهر',
    feature_responsive: 'موقع متجاوب',
    feature_5_pages: 'حتى 5 صفحات',
    feature_contact_form: 'نموذج اتصال',
    feature_basic_seo: 'تحسين محركات بحث أساسي',
    feature_3_months_maintenance: 'صيانة 3 أشهر',
    feature_fullstack: 'تطبيق ويب كامل',
    feature_20_pages: 'حتى 20 صفحة',
    feature_cms: 'تكامل نظام إدارة محتوى',
    feature_ecommerce: 'جاهز للتجارة الإلكترونية',
    feature_advanced_seo: 'تحسين محركات بحث متقدم',
    feature_6_months_maintenance: 'صيانة 6 أشهر',
    feature_custom_web: 'تطبيقات ويب وسطح مكتب مخصصة',
    feature_unlimited_scalability: 'قابلية توسع غير محدودة',
    feature_ai_ml: 'تكاملات الذكاء الاصطناعي',
    feature_high_availability: 'توفر عالي',
    feature_dedicated_support: 'دعم مخصص',
    feature_12_months_maintenance: 'صيانة 12+ شهر',
    // Word (CEO)
    ceo_quote: 'في شركة الأحمدي، لا نبني التكنولوجيا فقط — بل نصنع تجارب رقمية تُمكّن الشركات وتُلهم النمو. التزامنا بالتميز يقود كل ما نفعله، من أول سطر كود إلى آخر بكسل.',
    ceo_name: 'قصي هاشم الأحمدي',
    ceo_title: 'المؤسس والرئيس التنفيذي',
    // Contact
    contact_title: 'تواصل معنا',
    contact_subtitle: 'دعنا نناقش مشروعك القادم',
    contact_name: 'الاسم الكامل',
    contact_email: 'البريد الإلكتروني',
    contact_message: 'الرسالة',
    contact_send: 'إرسال الرسالة',
    contact_sending: 'جاري الإرسال...',
    contact_success: 'تم إرسال الرسالة بنجاح!',
    contact_info: 'معلومات الاتصال',
    contact_email_label: 'البريد الإلكتروني',
    contact_phone_label: 'الهاتف',
    contact_office_label: 'المكتب',
    contact_office_value: 'جدة، السعودية',
    contact_follow: 'تابعنا وتواصل',
    // Footer
    footer_tagline: 'تمكين الشركات بمواقع إلكترونية وتطبيقات جوال وحلول رقمية راقية. نحول الأفكار إلى واقع.',
    footer_quicklinks: 'روابط سريعة',
    footer_contact: 'اتصل بنا',
    footer_follow: 'تابعنا',
    footer_copyright: 'جميع الحقوق محفوظة',
    footer_design: 'صمم بحب بواسطة شركة الأحمدي',
  },
  en: {
    // Header
    nav_home: 'Home',
    nav_services: 'Services',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    lang_toggle: 'عربي',
    // Hero
    hero_title: 'Empowering Your Digital Future',
    hero_subtitle: 'Elite websites and mobile apps to serve your needs',
    hero_btn: 'Get started',
    // Services
    services_title: 'Our Services',
    services_subtitle: 'We Take Pride In Serving Supreme Services',
    // Pricing
    pricing_title: 'Choose Your Plan',
    pricing_subtitle: 'Flexible pricing for every need – no hidden fees',
    mobile_title: 'Mobile Apps',
    web_title: 'Web & Desktop Apps',
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
    basic: 'Basic',
    business: 'Business',
    price_one_time: '/ one-time',
    most_popular: 'Most Popular',
    get_started: 'Get Started',
    contact_us: 'Contact Us',
    // Pricing descriptions
    starter_desc: 'Perfect for small businesses & startups',
    professional_desc: 'For growing businesses',
    enterprise_desc: 'Full-scale solutions',
    basic_desc: 'Ideal for landing pages & small sites',
    business_desc: 'For dynamic web applications',
    enterprise_web_desc: 'Large-scale platforms',
    // Features
    feature_ios_android: 'iOS or Android app',
    feature_5_screens: 'Up to 5 screens',
    feature_basic_ui: 'Basic UI/UX design',
    feature_app_store: 'App store submission',
    feature_3_months: '3 months support',
    feature_both_os: 'Both iOS & Android',
    feature_15_screens: 'Up to 15 screens',
    feature_advanced_ui: 'Advanced UI/UX',
    feature_backend: 'Backend integration',
    feature_push: 'Push notifications',
    feature_6_months: '6 months support',
    feature_cross_platform: 'Cross-platform (Flutter/RN)',
    feature_unlimited_screens: 'Unlimited screens',
    feature_custom_anim: 'Custom animations',
    feature_cloud_backend: 'Cloud backend',
    feature_analytics: 'Analytics & monitoring',
    feature_12_months: '12+ months support',
    feature_responsive: 'Responsive website',
    feature_5_pages: 'Up to 5 pages',
    feature_contact_form: 'Contact form',
    feature_basic_seo: 'Basic SEO',
    feature_3_months_maintenance: '3 months maintenance',
    feature_fullstack: 'Full-stack web app',
    feature_20_pages: 'Up to 20 pages',
    feature_cms: 'CMS integration',
    feature_ecommerce: 'E-commerce ready',
    feature_advanced_seo: 'Advanced SEO',
    feature_6_months_maintenance: '6 months maintenance',
    feature_custom_web: 'Custom web & desktop apps',
    feature_unlimited_scalability: 'Unlimited scalability',
    feature_ai_ml: 'AI/ML integrations',
    feature_high_availability: 'High availability',
    feature_dedicated_support: 'Dedicated support',
    feature_12_months_maintenance: '12+ months maintenance',
    // Word (CEO)
    ceo_quote: 'At Alahmadi Co, we don\'t just build technology — we craft digital experiences that empower businesses and inspire growth. Our commitment to excellence drives everything we do, from the first line of code to the final pixel.',
    ceo_name: 'Qosay Hashim Alahmadi',
    ceo_title: 'Founder & CEO',
    // Contact
    contact_title: 'Get In Touch',
    contact_subtitle: 'Let\'s discuss your next project',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    contact_success: 'Message sent successfully!',
    contact_info: 'Contact Information',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_office_label: 'Office',
    contact_office_value: 'Jeddah, Saudi Arabia',
    contact_follow: 'Follow & Connect',
    // Footer
    footer_tagline: 'Empowering businesses with elite websites, mobile apps, and digital solutions. We turn ideas into reality.',
    footer_quicklinks: 'Quick Links',
    footer_contact: 'Contact Us',
    footer_follow: 'Follow Us',
    footer_copyright: 'All rights reserved.',
    footer_design: 'Designed with ❤️ by Alahmadi Co',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}