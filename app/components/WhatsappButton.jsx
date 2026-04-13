'use client';

import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsappButton() {
  const phoneNumber = '966546866105';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:animate-none" />
        {/* Main button */}
        <div className="relative bg-green-500 rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl">
          <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>
      </div>
    </a>
  );
}