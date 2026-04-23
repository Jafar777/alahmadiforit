'use client';

import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const phoneNumber = '+966546866105';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#102039]/5 via-white to-[#253c66]/5 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Alahmadi Co" className="h-28 w-auto" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer_tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#283593' }}>{t('footer_quicklinks')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-[#2772cd] transition">{t('nav_home')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#2772cd] transition">{t('nav_services')}</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-[#2772cd] transition">{t('nav_pricing')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#2772cd] transition">{t('nav_contact')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#283593' }}>{t('footer_contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#2772cd] w-4 h-4" />
                <a dir='ltr' href="tel:+966546866105" className="text-gray-600 hover:text-[#2772cd] transition ">+966 546866105</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#2772cd] w-4 h-4" />
                <a href="mailto:info@alahmadico.com" className="text-gray-600 hover:text-[#2772cd] transition">info@alahmadico.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#2772cd] w-4 h-4" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2772cd] transition">WhatsApp</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#283593' }}>{t('footer_follow')}</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://x.com/AlahmadiForIT" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-[#2772cd]/10 transition">
                <FaXTwitter className="w-5 h-5 text-[#2772cd]" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full hover:bg-[#2772cd]/10 transition">
                <FaWhatsapp className="w-5 h-5 text-[#2772cd]" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              © {currentYear} Alahmadi Co. {t('footer_copyright')}
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          {t('footer_design')}
        </div>
      </div>
    </footer>
  );
}