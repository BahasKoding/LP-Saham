import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Pricing } from '../components/Pricing';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
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
  );
}; 