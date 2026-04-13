'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Word from './components/Word';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="word">
        <Word />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <WhatsappButton />
    </div>
  );
}