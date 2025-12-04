import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import * as images from '../../assets/images';

export default function Footer() {
  const [contentRef, contentVisible] = useScrollReveal();
  
  return (
    <footer className="relative w-full bg-black01 border-t border-black02 border-solid py-[60px] md:py-[122px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-4">
        <div className="flex flex-col gap-[30px] md:gap-[60px]">
          {/* Logo */}
          <div className="flex items-center">
            <img alt="ArkyGlobal Logo" className="h-[28px] md:h-[34px] w-auto object-contain" src={images.imgLogoArky} />
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`flex flex-col gap-[50px] transition-opacity duration-1000 ${contentVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
          >
            <p className="text-grey04 text-[12px] md:text-[14px]">
              ARKYGLOBAL, é uma empresa incorporada sob as leis de São Vicente e Granadinas como corretora de valores mobiliários, com licença nº 2024-00455, com seu escritório principal registrado no endereço Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
            </p>

            <div className="flex flex-col gap-[20px]">
              <p className="text-grey02 text-[14px] font-semibold">Aviso de Risco</p>
              <p className="text-grey04 text-[12px] md:text-[14px]">
                Negociar instrumentos financeiros envolve risco substancial e pode não ser adequado para todos os investidores. O valor dos investimentos é volátil e pode resultar na perda total do capital. Os investidores devem considerar sua situação financeira, experiência em investimentos e tolerância ao risco, podendo buscar aconselhamento profissional. O desempenho passado não é indicativo de resultados futuros.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <p className="text-grey02 text-[14px] font-semibold">Elegibilidade</p>
              <p className="text-grey04 text-[12px] md:text-[14px]">
                Os serviços estão disponíveis para indivíduos com 18 anos ou mais.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <p className="text-grey02 text-[14px] font-semibold">Jurisdições Restritas</p>
              <p className="text-grey04 text-[12px] md:text-[14px]">
                O conteúdo fornecido pela ARKYGLOBAL não se destina a residentes dos seguintes países: Afeganistão, Barbados, Belarus, Burkina Faso, Canadá, China, Coreia do Norte (DPRK), Hong Kong, Irã, Iraque, Israel, Líbia, Myanmar (Burma), Sudão do Sul, Palestina, Rússia, Romênia, Síria, Taiwan, Uganda, Ucrânia, Estados Unidos da América, Iémen ou qualquer jurisdição onde tal distribuição ou uso seria contrário às leis ou regulamentos locais.
              </p>
              <p className="text-grey04 text-[12px] md:text-[14px]">
                Nem a ARKYGLOBAL, nem qualquer um de seus serviços, são destinados ou oferecidos a residentes do Brasil. A ARKYGLOBAL não anuncia seus serviços no Brasil ou para residentes brasileiros, e nenhum conteúdo deste site pode ser interpretado de outra forma. A ARKYGLOBAL não é autorizada pela Comissão de Valores Mobiliários a oferecer publicamente ou intermediar ofertas de valores mobiliários no Brasil. Ao acessar este site, o usuário reconhece e concorda com as restrições aqui contidas.
              </p>
              <p className="text-grey03 text-[12px] md:text-[14px]">
                Todas as marcas registradas™ e nomes comerciais pertencem aos seus respectivos proprietários e são utilizados aqui apenas para fins de identificação. O uso desses nomes não implica endosso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

