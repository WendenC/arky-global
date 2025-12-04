import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTranslation } from '../../contexts/TranslationContext';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal();

  const faqs = t('faq.questions');

  return (
    <section id="faq" className="relative w-full py-[60px] md:py-[122px] bg-black01">
      <div className="max-w-[1200px] mx-auto px-4 md:px-4">
        <div className="backdrop-blur-[5px] backdrop-filter bg-green01 rounded-[12px] p-[30px] md:p-[80px]">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-[40px] md:mb-[80px] transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
          >
            <h2 className="text-white text-[26px] md:text-[56px] font-semibold">{t('faq.title')}</h2>
          </div>

          {/* FAQ items */}
          <div className="flex flex-col gap-[40px] max-w-full md:max-w-[758px] mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-grey02/20 pb-[20px] last:border-b-0"
              >
                <div
                  className="flex gap-[20px] items-start cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <p className="text-grey02 text-[24px] shrink-0 mt-[-2px]">
                    {openIndex === index ? '−' : '+'}
                  </p>
                  <div className="flex-1">
                    <p className="text-grey02 text-[18px] font-medium mb-0">{faq.question}</p>
                    {openIndex === index && (
                      <p className="text-[16px] mt-[16px] leading-relaxed" style={{ color: '#C0C0C0' }}>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

