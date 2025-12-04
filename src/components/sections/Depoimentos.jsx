import React from 'react';
import * as images from '../../assets/images';
import * as svgs from '../../assets/svgs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Depoimentos() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollReveal();
  const [card1Ref, card1Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [card2Ref, card2Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [card3Ref, card3Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [card4Ref, card4Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [card5Ref, card5Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [card6Ref, card6Visible] = useScrollReveal({ rootMargin: '0px 0px -100px 0px' });
  const [ctaRef, ctaVisible] = useScrollReveal();
  const testimonials = [
    {
      name: 'Ricardo Almeida',
      username: '@riccalmd96',
      avatar: images.imgFoto01,
      text: 'Já passei por várias corretoras, mas a ArkyGlobal se destaca pela transparência impecável e pela eficiência de execução. Confio totalmente nas minhas operações aqui.',
      date: '15 de março de 2025, 14:35',
      rating: svgs.imgVector3,
      socialIcon: svgs.imgFace,
    },
    {
      name: 'José Martins',
      username: '@josemartinsss9',
      avatar: images.imgFoto02,
      text: 'A ArkyGlobal não tem comparação. As ferramentas são completas e a segurança nas transações me dá a tranquilidade para realizar grandes investimentos. É a plataforma mais confiável.',
      date: '5 de janeiro de 2025, 16:42',
      rating: svgs.imgVector3,
      socialIcon: svgs.imgFace,
    },
    {
      name: 'Priscila Costa',
      username: '@priiihcosta',
      avatar: images.imgFoto03,
      text: 'O que mais me impressionou na ArkyGlobal foi a agilidade nos saques. Fiz meu primeiro saque em 2024 e o valor estava na minha conta em menos de 24 horas.',
      date: '20 de setembro de 2025, 09:18',
      rating: svgs.imgVector4,
      socialIcon: svgs.imgInsta,
    },
    {
      name: 'Mario Rocha',
      username: '@rochamarioo8',
      avatar: images.imgFoto04,
      text: 'A plataforma é super fácil de usar, mesmo sendo um trader iniciante. As operações são rápidas e consegui ver resultados concretos rapidamente em 2025.',
      date: '19 de junho de 2025, 14:35',
      rating: svgs.imgVector5,
      socialIcon: svgs.imgX,
    },
    {
      name: 'Filipe Souza',
      username: '@feehsouza99',
      avatar: images.imgFoto05,
      text: 'Além de ser fácil de usar, a ArkyGlobal se destaca pelos saques. Recebi meu primeiro saque em menos de 12 horas. É ideal para quem precisa de liquidez sem burocracia.',
      date: '9 de julho de 2025, 18:03',
      rating: svgs.imgVector4,
      socialIcon: svgs.imgInsta,
    },
    {
      name: 'Lucas Oliveira',
      username: '@luccasolivv',
      avatar: images.imgFoto06,
      text: 'Realizei meu primeiro saque rapidamente. Nunca enfrentei demora nas transações.',
      date: '8 de novembro de 2025, 14:30',
      rating: svgs.imgVector5,
      socialIcon: svgs.imgInsta,
    },
  ];

  return (
    <section className="relative w-full py-[60px] md:py-[200px] bg-black01">

      {/* Light effect */}
      <div className="absolute h-[498px] left-1/2 top-[484px] w-[1212px] max-w-[100vw] -translate-x-1/2 opacity-100">
        <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop1} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-4">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-[54px] md:mb-[100px] transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-white text-[26px] md:text-[56px] font-semibold mb-[40px]">
            {t('depoimentos.title1')}<br />
            {t('depoimentos.title2')}
          </h2>
          <p className="text-grey02 text-[18px] md:text-[24px] max-w-[335px] md:max-w-[956px] mx-auto">
            {t('depoimentos.subtitle')}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px] md:gap-[20px] mb-[29px] md:mb-[100px]">
          {testimonials.map((testimonial, index) => {
            const refs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];
            const visibles = [card1Visible, card2Visible, card3Visible, card4Visible, card5Visible, card6Visible];
            return (
            <div
              key={index}
              ref={refs[index]}
              className={`bg-black02/70 border border-[#282828] border-solid rounded-[17px] md:rounded-[20px] p-[26px] md:p-[30px] flex flex-col gap-[20px] md:gap-[23px] transition-opacity duration-1000 ${visibles[index] ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-[10px] md:gap-[12px] items-center">
                  <div className="w-[48px] md:w-[56px] h-[48px] md:h-[56px] rounded-full overflow-hidden">
                    <img alt={testimonial.name} className="w-full h-full object-cover" src={testimonial.avatar} />
                  </div>
                  <div className="flex flex-col gap-[8px] md:gap-[9px]">
                    <p className="text-white text-[16px] md:text-[18px] font-medium">{testimonial.name}</p>
                    <p className="text-grey04 text-[10px] md:text-[12px]">{testimonial.username}</p>
                  </div>
                </div>
                {testimonial.socialIcon && (
                  <img alt="Social media" className="w-[17px] md:w-[20px] h-[17px] md:h-[20px] object-contain" src={testimonial.socialIcon} />
                )}
              </div>
              <div className="flex flex-col gap-[20px] md:gap-[23px]">
                <p className="text-grey02 text-[16px] md:text-[18px] leading-relaxed">{testimonial.text}</p>
                <p className="text-grey04 text-[10px] md:text-[12px]">{testimonial.date}</p>
              </div>
            </div>
            );
          })}
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center transition-opacity duration-1000 ${ctaVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-white text-[24px] md:text-[48px] font-semibold mb-[29px] md:mb-[40px]">
            {t('depoimentos.cta.title')}
          </p>
          <button 
            className="btn-gradient px-[30px] py-[30px] rounded-[12px] text-white text-[18px] font-bold uppercase"
          >
            <span className="block md:hidden">{t('depoimentos.cta.buttonMobile').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t('depoimentos.cta.buttonMobile').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}</span>
            <span className="hidden md:block">{t('depoimentos.cta.buttonDesktop')}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

