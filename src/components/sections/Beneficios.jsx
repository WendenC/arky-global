import React from 'react';
import * as svgs from '../../assets/svgs';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Beneficios() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useScrollReveal();
  const [card1Ref, card1Visible] = useScrollReveal();
  const [card2Ref, card2Visible] = useScrollReveal();
  const [card3Ref, card3Visible] = useScrollReveal();
  const [card4Ref, card4Visible] = useScrollReveal();
  const [card5Ref, card5Visible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  // Count-up animations
  const count394k = useCountUp(394000, 0, 1500, statsVisible);
  const count8k = useCountUp(8000, 0, 1500, statsVisible);
  const count200 = useCountUp(200, 0, 1500, statsVisible);
  const count24 = useCountUp(24, 0, 1500, statsVisible);

  // Format numbers
  const format394k = (num) => {
    const k = Math.floor(num / 1000);
    return `$${k}k+`;
  };

  const format8k = (num) => {
    const k = Math.floor(num / 1000);
    return `${k}k+`;
  };

  return (
    <section id="beneficios" className="relative w-full py-[60px] md:py-[200px] bg-grey02">

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-4">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row items-start md:items-center mb-[53px] md:mb-[120px] gap-[40px] md:gap-0 transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-black01 text-[26px] md:text-[56px] font-semibold max-w-full md:max-w-[727px]">
            {(() => {
              const title = t('beneficios.title');
              const parts = title.split('ArkyGlobal');
              return parts.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < parts.length - 1 && (
                    <span className="bg-gradient-to-r from-green01 to-green02 text-transparent bg-clip-text font-extrabold">ArkyGlobal</span>
                  )}
                </React.Fragment>
              ));
            })()}
          </h2>
          <p className="text-black02 text-[18px] md:text-[24px] max-w-full md:flex-1 md:ml-[60px] md:max-w-none">
            {t('beneficios.subtitle')}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="flex flex-col gap-[12px] md:gap-[20px] mb-[35px] md:mb-[84px]">
          {/* Cards 1 e 2 - Row 1 */}
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px]">
            {/* Card 1 */}
            <div 
              ref={card1Ref}
              className={`w-full md:w-[60%] border border-grey01 border-solid rounded-[12px] md:rounded-[20px] p-[22px] md:p-[38px] flex flex-col gap-[21px] md:gap-[36px] min-h-[auto] md:h-[495px] overflow-hidden transition-opacity duration-1000 ${card1Visible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(119deg, #EAEAEA 4.11%, #CDFFF7 97.36%)' }}
            >
              <img alt="Globo" className="w-[103px] md:w-[177px] h-[92px] md:h-[159px] object-contain flex-shrink-0" src={svgs.imgGlobo02} />
              <h3 className="text-black01 text-[24px] md:text-[42px] font-semibold break-words">{t('beneficios.card1.title')}</h3>
              <p className="text-black02 text-[14px] md:text-[24px] break-words">{t('beneficios.card1.description')}</p>
            </div>

            {/* Card 2 */}
            <div 
              ref={card2Ref}
              className={`w-full md:w-[39%] border border-grey01 border-solid rounded-[12px] md:rounded-[20px] p-[22px] md:p-[38px] flex flex-col gap-[21px] md:gap-[36px] min-h-[auto] md:h-[495px] overflow-hidden transition-opacity duration-1000 ${card2Visible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(119deg, #EAEAEA 4.11%, #CDFFF7 97.36%)' }}
            >
              <img alt="Segurança" className="w-[74px] md:w-[127px] h-[90px] md:h-[155px] object-contain flex-shrink-0" src={svgs.imgSec} />
              <h3 className="text-black01 text-[24px] md:text-[42px] font-semibold break-words">{t('beneficios.card2.title')}</h3>
              <p className="text-black02 text-[14px] md:text-[24px] break-words">{t('beneficios.card2.description')}</p>
            </div>
          </div>

          {/* Cards 3 e 4 - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px]">
            {/* Card 3 */}
            <div 
              ref={card3Ref}
              className={`border border-grey01 border-solid rounded-[12px] md:rounded-[20px] p-[30px] md:p-[50px] flex flex-col gap-[30px] md:gap-[45px] min-h-[auto] md:h-[580px] overflow-hidden transition-opacity duration-1000 ${card3Visible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(119deg, #EAEAEA 4.11%, #CDFFF7 97.36%)' }}
            >
              <img alt="Plataforma" className="w-[89px] md:w-[153px] h-[104px] md:h-[180px] object-contain flex-shrink-0" src={svgs.imgPlat} />
              <h3 className="text-black01 text-[24px] md:text-[42px] font-semibold break-words">{t('beneficios.card3.title')}</h3>
              <p className="text-black02 text-[14px] md:text-[24px] break-words">{t('beneficios.card3.description')}</p>
            </div>

            {/* Card 4 */}
            <div 
              ref={card4Ref}
              className={`border border-grey01 border-solid rounded-[12px] md:rounded-[20px] p-[30px] md:p-[50px] flex flex-col gap-[30px] md:gap-[45px] min-h-[auto] md:h-[580px] overflow-hidden transition-opacity duration-1000 ${card4Visible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(119deg, #EAEAEA 4.11%, #CDFFF7 97.36%)' }}
            >
              <img alt="Cripto-segurança" className="w-[100px] md:w-[168px] h-[100px] md:h-[168px] object-contain flex-shrink-0" src={svgs.imgCripto} />
              <h3 className="text-black01 text-[24px] md:text-[42px] font-semibold break-words">{t('beneficios.card4.title')}</h3>
              <p className="text-black02 text-[14px] md:text-[24px] break-words">{t('beneficios.card4.description')}</p>
            </div>
          </div>

          {/* Card 5 - Full width */}
          <div 
            ref={card5Ref}
            className={`w-full border border-grey01 border-solid rounded-[12px] md:rounded-[20px] p-[22px] md:p-[38px] flex flex-col md:flex-row gap-[22px] md:gap-[36px] items-start md:items-center min-h-[auto] md:h-[250px] overflow-hidden transition-opacity duration-1000 ${card5Visible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            style={{ background: 'linear-gradient(119deg, #EAEAEA 4.11%, #CDFFF7 97.36%)' }}
          >
            <img alt="Suporte" className="w-[92px] md:w-[158px] h-[112px] md:h-[192px] object-contain flex-shrink-0" src={svgs.imgChat} />
            <div className="flex-1 min-w-0">
              <h3 className="text-black01 text-[24px] md:text-[42px] font-semibold mb-[21px] md:mb-[36px] break-words">{t('beneficios.card5.title')}</h3>
              <p className="text-black02 text-[14px] md:text-[24px] break-words">{t('beneficios.card5.description')}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`flex flex-col md:flex-row items-center md:items-start justify-between gap-[35px] md:gap-0 transition-opacity duration-1000 ${statsVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="flex flex-col gap-[10px] md:gap-[20px] items-center text-center">
            <p className="text-green01 text-[38px] md:text-[52px] font-semibold uppercase">
              {format394k(count394k)}
            </p>
            <p className="text-black02 text-[16px] md:text-[24px]">{t('beneficios.stats.pagos')}</p>
          </div>
          <div className="flex flex-col gap-[10px] md:gap-[20px] items-center text-center">
            <p className="text-green01 text-[38px] md:text-[52px] font-semibold uppercase">
              {format8k(count8k)}
            </p>
            <p className="text-black02 text-[16px] md:text-[24px]">{t('beneficios.stats.traders')}</p>
          </div>
          <div className="flex flex-col gap-[10px] md:gap-[20px] items-center text-center">
            <p className="text-green01 text-[38px] md:text-[52px] font-semibold uppercase">
              {count200}+
            </p>
            <p className="text-black02 text-[16px] md:text-[24px]">{t('beneficios.stats.operacoes')}</p>
          </div>
          <div className="flex flex-col gap-[10px] md:gap-[20px] items-center text-center">
            <p className="text-green01 text-[38px] md:text-[52px] font-semibold uppercase">
              {count24}h
            </p>
            <p className="text-black02 text-[16px] md:text-[24px]">{t('beneficios.stats.suporte')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

