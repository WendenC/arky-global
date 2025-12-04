import React, { useState, useRef, useEffect } from 'react';
import * as svgs from '../../assets/svgs';
import * as images from '../../assets/images';
import { useTranslation } from '../../contexts/TranslationContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isLangDropdownOpenMobile, setIsLangDropdownOpenMobile] = useState(false);
  const langDropdownRef = useRef(null);
  const langDropdownMobileRef = useRef(null);
  const { language, changeLanguage, t } = useTranslation();

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
      if (langDropdownMobileRef.current && !langDropdownMobileRef.current.contains(event.target)) {
        setIsLangDropdownOpenMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'pt', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative w-full">
      {/* Header content */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-[50px] py-4 md:py-[16px] max-w-[1920px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img alt="ArkyGlobal Logo" className="h-[28px] md:h-[34px] w-auto object-contain" src={images.imgLogoArky} />
        </div>

        {/* Mobile/Tablet menu button (até 1024px) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-[20px] h-[20px] flex items-center justify-center"
        >
          <img alt="Menu" className="w-full h-full" src={isMenuOpen ? svgs.imgMenu02 : svgs.imgMenu} />
        </button>

        {/* Navigation - Desktop (acima de 1024px) */}
        <div 
          className="hidden lg:flex rounded-[12px] p-[1px]"
          style={{
            background: 'linear-gradient(28deg, rgba(0, 71, 59, 0.50) 3.85%, rgba(202, 255, 246, 0.50) 33.14%, rgba(202, 255, 246, 0.50) 72.19%, rgba(0, 71, 59, 0.50) 91.27%)'
          }}
        >
          <nav 
            className="flex px-[50px] py-[16px] gap-[48px] items-center rounded-[11px] w-full"
            style={{ 
              background: '#0D0D0D'
            }}
          >
            <a href="#home" className="text-white text-[18px] hover:text-green02 transition-colors">{t('nav.home')}</a>
            <a href="#beneficios" className="text-white text-[18px] hover:text-green02 transition-colors">{t('nav.beneficios')}</a>
            <a href="#ativos" className="text-white text-[18px] hover:text-green02 transition-colors">{t('nav.ativos')}</a>
            <a href="#faq" className="text-white text-[18px] hover:text-green02 transition-colors">{t('nav.faq')}</a>
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-[6px] hover:text-green02 transition-colors"
              >
                <img alt="Globo" className="w-[18px] h-[18px]" src={svgs.imgGlobo} />
                <p className="text-grey01 text-[18px]">{currentLang.code.toUpperCase()}</p>
              </button>
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-black01 border border-[#282828] rounded-[8px] overflow-hidden min-w-[150px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[16px] transition-colors ${
                        language === lang.code
                          ? 'bg-green01 text-white'
                          : 'text-grey02 hover:bg-black02 hover:text-white'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Auth buttons - Desktop (acima de 1024px) */}
        <div className="hidden lg:flex gap-[8px] items-center">
          <button className="border border-grey02 border-solid px-[20px] py-[10px] rounded-[6px] text-grey01 text-[18px] font-semibold hover:bg-white/10 transition-colors">
            {t('nav.entrar')}
          </button>
          <button 
            className="btn-gradient px-[20px] py-[10px] rounded-[6px] text-grey02 text-[18px] font-semibold"
          >
            {t('nav.criarConta')}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu (até 1024px) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black01/95 backdrop-blur-[5px] border-t border-green01 z-20 p-4">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-white text-[18px] hover:text-green02 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#beneficios" className="text-white text-[18px] hover:text-green02 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.beneficios')}</a>
            <a href="#ativos" className="text-white text-[18px] hover:text-green02 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.ativos')}</a>
            <a href="#faq" className="text-white text-[18px] hover:text-green02 transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.faq')}</a>
            {/* Language Dropdown - Mobile */}
            <div className="relative pt-2" ref={langDropdownMobileRef}>
              <button
                onClick={() => setIsLangDropdownOpenMobile(!isLangDropdownOpenMobile)}
                className="flex items-center gap-[6px] hover:text-green02 transition-colors"
              >
                <img alt="Globo" className="w-[18px] h-[18px]" src={svgs.imgGlobo} />
                <p className="text-grey01 text-[18px]">{currentLang.code.toUpperCase()}</p>
              </button>
              {isLangDropdownOpenMobile && (
                <div className="absolute top-full left-0 mt-2 bg-black01 border border-[#282828] rounded-[8px] overflow-hidden min-w-[150px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangDropdownOpenMobile(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-[16px] transition-colors ${
                        language === lang.code
                          ? 'bg-green01 text-white'
                          : 'text-grey02 hover:bg-black02 hover:text-white'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <button className="border border-grey02 border-solid px-[20px] py-[10px] rounded-[6px] text-grey01 text-[18px] font-semibold hover:bg-white/10 transition-colors">
                {t('nav.entrar')}
              </button>
              <button className="px-[20px] py-[10px] rounded-[6px] text-grey02 text-[18px] font-semibold bg-green01 hover:bg-green02 transition-colors">
                {t('nav.criarConta')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

