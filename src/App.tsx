import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { Testimonials } from './components/Testimonials';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <ScrollReveal>
          <section id="home" className="min-h-screen">
            <Hero />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="benefits" className="min-h-screen">
            <Benefits />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="testimonials" className="min-h-screen">
            <Testimonials />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="pricing" className="min-h-screen">
            <Pricing />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </ScrollReveal>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;