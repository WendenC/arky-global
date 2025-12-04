import React from 'react';
import * as images from '../../assets/images';
import * as svgs from '../../assets/svgs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Passos() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollReveal();
  const [phoneRef, phoneVisible] = useScrollReveal();
  const [step1Ref, step1Visible] = useScrollReveal();
  const [step2Ref, step2Visible] = useScrollReveal();
  const [step3Ref, step3Visible] = useScrollReveal();
  const [step4Ref, step4Visible] = useScrollReveal();
  const steps = [
    {
      icon: svgs.imgConta,
      title: t('passos.step1.title'),
      description: t('passos.step1.description'),
      highlighted: true,
    },
    {
      icon: svgs.imgDeposito,
      title: t('passos.step2.title'),
      description: t('passos.step2.description'),
      highlighted: false,
    },
    {
      icon: svgs.imgAtivo,
      title: t('passos.step3.title'),
      description: t('passos.step3.description'),
      highlighted: false,
    },
    {
      icon: svgs.imgLucro,
      title: t('passos.step4.title'),
      description: t('passos.step4.description'),
      highlighted: false,
    },
  ];

  return (
    <section className="relative w-full py-[60px] md:py-[200px] bg-grey02">

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-4">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-[58px] md:mb-[100px] transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-black01 text-[26px] md:text-[56px] font-semibold mb-[40px]">
            {t('passos.title1')}<br />
            {t('passos.title2')}
          </h2>
          <p className="text-black02 text-[18px] md:text-[24px] max-w-[336px] md:max-w-[884px] mx-auto">
            {t('passos.subtitle')}
          </p>
        </div>

        {/* Content with phone and steps */}
        <div className="flex flex-col md:flex-row gap-[65px] md:gap-[95px] items-center md:items-start">
          {/* Phone mockup */}
          <div 
            ref={phoneRef}
            className={`w-[335px] md:w-[490px] h-[693px] md:h-[1014px] shrink-0 order-2 md:order-1 transition-opacity duration-1000 ${phoneVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
          >
            <img alt="Mock Phone" className="w-full h-full object-contain" src={images.imgIphone} />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-[14px] md:gap-[20px] flex-1 order-1 md:order-2 w-full md:w-auto">
            {steps.map((step, index) => {
              const refs = [step1Ref, step2Ref, step3Ref, step4Ref];
              const visibles = [step1Visible, step2Visible, step3Visible, step4Visible];
              return (
              <div
                key={index}
                ref={refs[index]}
                className={`border border-grey01 border-solid rounded-[14px] md:rounded-[20px] p-[38px] md:p-[57px] flex flex-col gap-[20px] md:gap-[27px] items-center transition-opacity duration-1000 ${
                  step.highlighted ? 'bg-green01' : 'bg-transparent'
                } ${visibles[index] ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              >
                <img alt={step.title} className="w-[49px] md:w-[72px] h-[49px] md:h-[72px] object-contain" src={step.icon} />
                <h3 className={`text-[20px] md:text-[28px] font-medium text-center ${step.highlighted ? 'text-white' : 'text-black01'}`}>
                  {step.title.includes('\n') ? (
                    <>
                      {step.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < step.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    step.title
                  )}
                </h3>
                <p className={`text-[14px] md:text-[18px] text-center max-w-full md:max-w-[268px] ${step.highlighted ? 'text-grey02' : 'text-black02'}`}>
                  {step.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

