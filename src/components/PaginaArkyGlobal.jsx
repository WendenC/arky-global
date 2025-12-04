import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Beneficios from './sections/Beneficios';
import Ativos from './sections/Ativos';
import Passos from './sections/Passos';
import Depoimentos from './sections/Depoimentos';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

export default function PaginaArkyGlobal() {
  return (
    <div className="bg-[#1b1b1b] relative w-full min-h-screen overflow-x-hidden" data-name="Página-ArkyGlobal">
      <Hero />
      <Beneficios />
      <Ativos />
      <Passos />
      <Depoimentos />
      <FAQ />
      <Footer />
    </div>
  );
}

