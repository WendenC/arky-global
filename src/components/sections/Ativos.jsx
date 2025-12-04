import React from 'react';
import * as images from '../../assets/images';
import * as svgs from '../../assets/svgs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Ativos() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollReveal();
  const [card1Ref, card1Visible] = useScrollReveal();
  const [card2Ref, card2Visible] = useScrollReveal();
  const [card3Ref, card3Visible] = useScrollReveal();
  const assets = [
    { name: 'ETH', price: '$2.613,27', change: '+0,17%', trend: 'up' },
    { name: 'BCH', price: '$493.02', change: '+0,76%', trend: 'down' },
    { name: 'BTC', price: '$109.015,17', change: '-0,17%', trend: 'down' },
    { name: 'XRP', price: '$2.316472', change: '+0,35%', trend: 'up' },
    { name: 'GOLD', price: '$3.314,50', change: '+0,85%', trend: 'down' },
    { name: 'AUD/JPY', price: '$95.736', change: '+1,05%', trend: 'up' },
    { name: 'EUR/USD', price: '$1,17220', change: '-0,14%', trend: 'up' },
    { name: 'GBP/USD', price: '$1,3590', change: '+0,10%', trend: 'down' },
    { name: 'AAPL', price: '$209,99', change: '+0,02%', trend: 'up' },
    { name: 'MSFT', price: '$496,12', change: '+0,33%', trend: 'down' },
    { name: 'NVDA', price: '$159,85', change: '+0,99', trend: 'up' },
    { name: 'AMZN', price: '$220,27', change: '+1,44%', trend: 'down' },
  ];

  const featuredAssets = [
    { name: 'BTC', price: '$109.015,17', change: '-0,17%', trend: 'down', icon: svgs.imgBtc },
    { name: 'EUR/USD', price: '$1,17220', change: '+0,14%', trend: 'up', icon: svgs.imgEurUsd },
    { name: 'AAPL', price: '$209,99', change: '+0,02%', trend: 'up', icon: svgs.imgAapl },
  ];

  return (
    <section id="ativos" className="relative w-full py-[60px] md:py-[200px] bg-black01">

      {/* Light effect */}
      <div className="absolute h-[576px] left-1/2 top-[330px] w-[1402px] max-w-[100vw] -translate-x-1/2 opacity-100">
        <img alt="" className="block max-w-none w-full h-full object-contain" style={{ mixBlendMode: 'screen' }} src={images.imgLightTop} />
      </div>

      {/* Header - Com container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-[30px] md:mb-[54px] transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-white text-[26px] md:text-[56px] font-semibold mb-[40px]">
            {t('ativos.title1')}<br />
            {t('ativos.title2')}
          </h2>
          <p className="text-grey02 text-[18px] md:text-[24px] max-w-[335px] md:max-w-[952px] mx-auto">
            {t('ativos.subtitle')}
          </p>
        </div>
      </div>

      {/* Asset chips - Carrossel infinito */}
      <div className="relative z-10 overflow-hidden mb-[17px] md:mb-[40px]">
        {/* Linha 1 - Esquerda para direita */}
        <div className="flex gap-[10px] mb-[10px] animate-scroll-left">
          {[...assets, ...assets].map((asset, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 bg-black02/50 border border-[#282828] border-solid px-[26px] md:px-[40px] py-[10px] md:py-[15px] rounded-[32px] md:rounded-[50px] flex gap-[13px] md:gap-[20px] items-center"
            >
              <p className="text-grey02 text-[15px] md:text-[24px]">{asset.name}</p>
              <div className="flex gap-[6px] md:gap-[10px] items-center">
                <p className="text-grey02 text-[12px] md:text-[18px]">{asset.price}</p>
                <img 
                  alt="Trend" 
                  className="w-[15px] h-[9px] md:w-[24px] md:h-[14px]" 
                  src={asset.trend === 'up' ? svgs.imgTrendUp : svgs.imgTrendDown} 
                />
                <p className={asset.trend === 'up' ? 'text-green text-[12px] md:text-[18px]' : 'text-red text-[12px] md:text-[18px]'}>
                  {asset.change}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Linha 2 - Direita para esquerda */}
        <div className="flex gap-[10px] animate-scroll-right">
          {[...assets, ...assets].map((asset, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 bg-black02/50 border border-[#282828] border-solid px-[26px] md:px-[40px] py-[10px] md:py-[15px] rounded-[32px] md:rounded-[50px] flex gap-[13px] md:gap-[20px] items-center"
            >
              <p className="text-grey02 text-[15px] md:text-[24px]">{asset.name}</p>
              <div className="flex gap-[6px] md:gap-[10px] items-center">
                <p className="text-grey02 text-[12px] md:text-[18px]">{asset.price}</p>
                <img 
                  alt="Trend" 
                  className="w-[15px] h-[9px] md:w-[24px] md:h-[14px]" 
                  src={asset.trend === 'up' ? svgs.imgTrendUp : svgs.imgTrendDown} 
                />
                <p className={asset.trend === 'up' ? 'text-green text-[12px] md:text-[18px]' : 'text-red text-[12px] md:text-[18px]'}>
                  {asset.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured asset cards - Com container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[17px] md:gap-[20px] mt-[17px] md:mt-[100px]">
          {featuredAssets.map((asset, index) => {
            const refs = [card1Ref, card2Ref, card3Ref];
            const visibles = [card1Visible, card2Visible, card3Visible];
            return (
            <div
              key={index}
              ref={refs[index]}
              className={`bg-black01/50 border border-[#282828] border-solid rounded-[17px] md:rounded-[20px] p-[36px] md:p-[42px] flex flex-col gap-[35px] md:gap-[40px] items-center transition-opacity duration-1000 ${visibles[index] ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-[9px] md:gap-[10px] items-center">
                  <img alt={asset.name} className="w-[26px] md:w-[30px] h-[26px] md:h-[30px]" src={asset.icon} />
                  <p className="text-grey02 text-[20px] md:text-[24px]">{asset.name}</p>
                </div>
                <img 
                  alt="Trend" 
                  className="w-[21px] h-[12px] md:w-[24px] md:h-[14px]" 
                  src={asset.trend === 'up' ? svgs.imgTrendUp : svgs.imgTrendDown} 
                />
              </div>
              <div className="flex flex-col gap-[14px] md:gap-[16px] items-start w-full">
                <p className="text-grey02 text-[20px] md:text-[24px]">{asset.price}</p>
                <p className={asset.trend === 'up' ? 'text-green text-[14px] md:text-[18px]' : 'text-red text-[14px] md:text-[18px]'}>
                  {asset.change}
                </p>
              </div>
              {/* Chart placeholder */}
              <div className="flex gap-[4px] items-end justify-center w-full">
                {Array.from({ length: 28 }).map((_, i) => {
                  const height = Math.random() * 51 + 8;
                  const bgColor = asset.trend === 'up' ? '#09ed7b' : '#e93131';
                  return (
                    <div
                      key={i}
                      className="rounded-[2px] w-[7px]"
                      style={{ height: `${height}px`, backgroundColor: bgColor }}
                    />
                  );
                })}
              </div>
              <button 
                className="btn-gradient w-full px-[26px] md:px-[30px] py-[13px] md:py-[15px] rounded-[10px] md:rounded-[12px] text-white text-[16px] md:text-[18px] font-bold uppercase"
              >
                {t('ativos.button')}
              </button>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

