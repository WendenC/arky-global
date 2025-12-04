import React, { useState, useEffect, useRef } from 'react';
import * as images from '../../assets/images';
import * as svgs from '../../assets/svgs';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useTranslation } from '../../contexts/TranslationContext';

import Header from './Header';

export default function Hero() {
  const { t } = useTranslation();
  const [showCards, setShowCards] = useState(false);
  const btcCardRef = useRef(null);
  const eurUsdCardRef = useRef(null);
  const gbpUsdCardRef = useRef(null);
  
  const titleLine1 = t('hero.titleLine1');
  const titleLine2 = t('hero.titleLine2');
  const [showSecondLine, setShowSecondLine] = useState(false);
  
  const displayedText1 = useTypingEffect(titleLine1, 8);
  
  useEffect(() => {
    if (displayedText1 === titleLine1) {
      setTimeout(() => {
        setShowSecondLine(true);
      }, 300);
    }
  }, [displayedText1, titleLine1]);
  
  const displayedText2 = useTypingEffect(showSecondLine ? titleLine2 : '', 8);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showScreen, setShowScreen] = useState(false);

  // Reset animation when language changes
  useEffect(() => {
    setShowSecondLine(false);
    setShowSubtitle(false);
    setShowButton1(false);
    setShowButton2(false);
    setShowScreen(false);
    setShowCards(false);
  }, [titleLine1, titleLine2]);
  
  useEffect(() => {
    if (displayedText2 === titleLine2) {
      setTimeout(() => {
        setShowCards(true);
      }, 300);
      setTimeout(() => {
        setShowSubtitle(true);
      }, 500);
      setTimeout(() => {
        setShowButton1(true);
      }, 1000);
      setTimeout(() => {
        setShowButton2(true);
      }, 1500);
      setTimeout(() => {
        setShowScreen(true);
      }, 2000);
    }
  }, [displayedText2, titleLine2]);
  return (
    <section className="relative w-full pt-0 pb-[100px] md:pb-[200px] overflow-hidden min-h-screen md:min-h-[1814px]">
      {/* Background - Seção 01 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background principal - Cor sólida */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#0D0D0D] z-0"
          data-name="Background02"
          data-node-id="1:30"
        />
        {/* Light effects overlay - Desktop */}
        <div className="absolute h-[650px] left-[50%] top-[275px] w-[1600px] translate-x-[-50%] opacity-100 hidden md:block z-[1]">
          <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop3} />
        </div>
        {/* Light effects overlay - Desktop Left */}
        <div className="absolute h-[1000px] left-[-800px] top-[600px] w-[2000px] opacity-100 hidden md:block z-[1]">
          <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop} />
        </div>
        {/* Light effects overlay - Mobile */}
        <div className="absolute h-[314px] left-[50%] top-[411px] w-[764px] translate-x-[-50%] opacity-100 md:hidden z-[1]">
          <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop} />
        </div>
        <div className="absolute h-[206px] left-[50%] top-[-127px] w-[502px] translate-x-[-50%] opacity-100 md:hidden z-[1]">
          <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop1} />
        </div>
        <div className="absolute h-[218px] left-[50%] top-[90px] w-[530px] translate-x-[-50%] opacity-100 md:hidden z-[1]">
          <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop2} />
        </div>
      </div>

      {/* Header - Parte da Seção 01 */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col gap-[30px] md:gap-[50px] items-center max-w-[1349px] mx-auto px-4 md:px-4 mt-[80px] bg-transparent">
        {/* Title */}
        <h1 
          className="text-center font-semibold text-[32px] md:text-[78px] leading-tight bg-transparent"
          style={{ 
            background: 'linear-gradient(90deg, #666 0%, #FFF 31.85%, #FFF 69.46%, #666 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {displayedText1}
          {displayedText1 === titleLine1 && <br />}
          {displayedText2}
          {displayedText1 === titleLine1 && displayedText2.length < titleLine2.length && <span className="animate-pulse">|</span>}
        </h1>

        {/* Subtitle */}
        {showSubtitle && (
          <p className="text-grey02 text-[18px] md:text-[28px] text-center max-w-[335px] md:max-w-[1014px] font-medium animate-fade-in-up">
            {t('hero.subtitle')}
          </p>
        )}

        {/* CTA buttons */}
        {showSubtitle && (
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] items-center w-full md:w-auto">
            <button 
              className="btn-gradient px-[30px] py-[24px] md:py-[30px] rounded-[12px] text-white text-[18px] md:text-[22px] font-bold uppercase w-full md:w-auto animate-fade-in-up"
            >
              {t('hero.button1')}
            </button>
            <button className="border-2 border-white px-[30px] py-[24px] md:py-[30px] rounded-[12px] text-white text-[18px] md:text-[22px] font-bold uppercase hover:bg-white/10 transition-colors w-full md:w-auto animate-fade-in-up-delay-1">
              {t('hero.button2')}
            </button>
          </div>
        )}
      </div>

      {/* Screen mockup com cards */}
      {showSubtitle && (
        <div className="relative z-10 mt-[50px] md:mt-[100px] w-full max-w-full md:max-w-[1156px] mx-auto px-4 animate-fade-in-up-delay-2">
          <img alt="Tela da plataforma" className="w-full h-auto object-contain" src={images.imgTela1} />
          {/* Floating asset cards - Mobile (abaixo de 900px) */}
          {showCards && (
            <div className="flex justify-center gap-[8px] sm-custom:gap-[20px] items-center mt-[-30px] sm-custom:mt-[-50px] relative z-20 tablet:hidden animate-fade-in-up-delay-3">
              <div className="backdrop-blur-[1.826px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[7px] sm-custom:px-[24px] py-[5px] sm-custom:py-[16px] rounded-[1.461px] sm-custom:rounded-[4px] w-[101px] sm-custom:w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[3px] sm-custom:gap-[8px] items-center">
                    <div className="flex gap-[4px] sm-custom:gap-[10px] items-center">
                      <img alt="BTC" className="w-[11px] sm-custom:w-[28px] h-[11px] sm-custom:h-[28px]" src={svgs.imgBtc} />
                      <p className="text-grey02 text-[8.865px] sm-custom:text-[20px]">BTC/USD</p>
                    </div>
                    <p className="text-grey04 text-[5.844px] sm-custom:text-[14px]">Crypto</p>
                  </div>
                  <p className="text-grey02 text-[13px] sm-custom:text-[30px]">+</p>
                </div>
              </div>
              <div className="backdrop-blur-[1.826px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[7px] sm-custom:px-[24px] py-[5px] sm-custom:py-[16px] rounded-[1.461px] sm-custom:rounded-[4px] w-[101px] sm-custom:w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[3px] sm-custom:gap-[8px] items-center">
                    <div className="flex gap-[3px] sm-custom:gap-[9px] items-center">
                      <img alt="GBP/USD" className="w-[14px] sm-custom:w-[32px] h-[9px] sm-custom:h-[21px]" src={svgs.imgGbpUsd} />
                      <p className="text-grey02 text-[8.338px] sm-custom:text-[20px]">GBP/USD</p>
                    </div>
                    <p className="text-grey04 text-[5.844px] sm-custom:text-[14px]">Ativo</p>
                  </div>
                  <p className="text-grey02 text-[13px] sm-custom:text-[30px]">+</p>
                </div>
              </div>
              <div className="backdrop-blur-[1.826px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[7px] sm-custom:px-[24px] py-[5px] sm-custom:py-[16px] rounded-[1.461px] sm-custom:rounded-[4px] w-[101px] sm-custom:w-[220px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[3px] sm-custom:gap-[8px] items-center">
                    <div className="flex gap-[3px] sm-custom:gap-[9px] items-center">
                      <img alt="EUR/USD" className="w-[14px] sm-custom:w-[32px] h-[9px] sm-custom:h-[21px]" src={svgs.imgEurUsd} />
                      <p className="text-grey02 text-[8.338px] sm-custom:text-[20px]">EUR/USD</p>
                    </div>
                    <p className="text-grey04 text-[5.844px] sm-custom:text-[14px]">Ativo</p>
                  </div>
                  <p className="text-grey02 text-[13px] sm-custom:text-[30px]">+</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating asset cards - Tablet e Desktop (a partir de 900px) */}
      {showCards && (
        <>
          <div ref={btcCardRef} className="hidden tablet:block absolute left-[80px] medium:left-[20px] desktop:left-[80px] top-[480px] medium:top-[600px] desktop:top-[480px] backdrop-blur-[5px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[20px] medium:px-[12px] desktop:px-[20px] py-[14px] medium:py-[10px] desktop:py-[14px] rounded-[4px] w-[280px] medium:w-[200px] desktop:w-[280px] z-20 animate-slide-in-left">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px] medium:gap-[6px] desktop:gap-[8px] items-center">
                <div className="flex gap-[10px] medium:gap-[6px] desktop:gap-[10px] items-center">
                  <img alt="BTC" className="w-[30px] medium:w-[22px] desktop:w-[30px] h-[30px] medium:h-[22px] desktop:h-[30px]" src={svgs.imgBtc} />
                  <p className="text-grey02 text-[24px] medium:text-[18px] desktop:text-[24px]">BTC/USD</p>
                </div>
                <p className="text-grey04 text-[16px] medium:text-[12px] desktop:text-[16px]">Crypto</p>
              </div>
              <p className="text-grey02 text-[36px] medium:text-[26px] desktop:text-[36px]">+</p>
            </div>
          </div>

          <div ref={eurUsdCardRef} className="hidden tablet:block absolute right-[150px] medium:right-[20px] desktop:right-[150px] top-[586px] medium:top-[700px] desktop:top-[586px] backdrop-blur-[5px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[20px] medium:px-[12px] desktop:px-[20px] py-[14px] medium:py-[10px] desktop:py-[14px] rounded-[4px] w-[280px] medium:w-[200px] desktop:w-[280px] z-20 animate-slide-in-right-delay-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px] medium:gap-[6px] desktop:gap-[8px] items-center">
                <div className="flex gap-[10px] medium:gap-[6px] desktop:gap-[10px] items-center">
                  <img alt="EUR/USD" className="w-[38px] medium:w-[28px] desktop:w-[38px] h-[24px] medium:h-[18px] desktop:h-[24px]" src={svgs.imgEurUsd} />
                  <p className="text-grey02 text-[23px] medium:text-[18px] desktop:text-[23px]">EUR/USD</p>
                </div>
                <p className="text-grey04 text-[16px] medium:text-[12px] desktop:text-[16px]">Ativo</p>
              </div>
              <p className="text-grey02 text-[36px] medium:text-[26px] desktop:text-[36px]">+</p>
            </div>
          </div>

          <div ref={gbpUsdCardRef} className="hidden tablet:block absolute left-[217px] medium:left-[20px] desktop:left-[217px] top-[1341px] backdrop-blur-[5px] backdrop-filter bg-black/50 border border-[#282828] border-solid px-[20px] medium:px-[12px] desktop:px-[20px] py-[14px] medium:py-[10px] desktop:py-[14px] rounded-[4px] w-[280px] medium:w-[200px] desktop:w-[280px] z-20 animate-slide-in-left-delay-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px] medium:gap-[6px] desktop:gap-[8px] items-center">
                <div className="flex gap-[10px] medium:gap-[6px] desktop:gap-[10px] items-center">
                  <img alt="GBP/USD" className="w-[38px] medium:w-[28px] desktop:w-[38px] h-[24px] medium:h-[18px] desktop:h-[24px]" src={svgs.imgGbpUsd} />
                  <p className="text-grey02 text-[23px] medium:text-[18px] desktop:text-[23px]">GBP/USD</p>
                </div>
                <p className="text-grey04 text-[16px] medium:text-[12px] desktop:text-[16px]">Ativo</p>
              </div>
              <p className="text-grey02 text-[36px] medium:text-[26px] desktop:text-[36px]">+</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

