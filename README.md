# ArkyGlobal - Landing Page

Landing page moderna e responsiva para a plataforma de investimentos ArkyGlobal, desenvolvida com React e Vite.

## 📋 Sobre o Projeto

A ArkyGlobal é uma plataforma de investimentos que oferece acesso a mais de 100 ativos globais, incluindo criptomoedas (BTC, ETH) e pares de moedas (USD/EUR, GBP/USD). Esta landing page apresenta os principais benefícios, funcionalidades e informações sobre a plataforma de forma atraente e profissional.

## 👨‍💻 Criador

**Wenden Carvalho**

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8** - Build tool e dev server de alta performance
- **Tailwind CSS 3.4.0** - Framework CSS utility-first para estilização
- **PostCSS** - Ferramenta para transformar CSS com JavaScript
- **Autoprefixer** - Plugin PostCSS para adicionar prefixos de vendor automaticamente

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd arkyglobal
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
arkyglobal/
├── public/
│   ├── assets/          # Imagens, SVGs e recursos estáticos
│   └── favicon.svg      # Favicon da aplicação
├── src/
│   ├── assets/
│   │   ├── images.js    # Exportações de imagens
│   │   └── svgs.js      # Exportações de SVGs
│   ├── components/
│   │   ├── PaginaArkyGlobal.jsx
│   │   └── sections/
│   │       ├── Header.jsx       # Cabeçalho com navegação
│   │       ├── Hero.jsx        # Seção principal
│   │       ├── Beneficios.jsx  # Benefícios da plataforma
│   │       ├── Ativos.jsx      # Ativos disponíveis
│   │       ├── Passos.jsx      # Passos para começar
│   │       ├── Depoimentos.jsx # Depoimentos de clientes
│   │       ├── FAQ.jsx         # Perguntas frequentes
│   │       └── Footer.jsx      # Rodapé
│   ├── contexts/
│   │   └── TranslationContext.jsx  # Context API para traduções
│   ├── hooks/
│   │   ├── useCountUp.js       # Hook para animação de contagem
│   │   ├── useMouseParallax.js # Hook para efeito parallax
│   │   ├── useScrollReveal.js  # Hook para animação ao scroll
│   │   └── useTypingEffect.js  # Hook para efeito de digitação
│   ├── translations.js         # Arquivo com todas as traduções
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada da aplicação
│   └── index.css               # Estilos globais
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Funcionalidades

### 🌐 Sistema de Tradução
- Suporte a múltiplos idiomas: **Português (PT)**, **Inglês (EN)** e **Espanhol (ES)**
- Context API para gerenciamento de idiomas
- Persistência da escolha de idioma no localStorage
- Tradução dinâmica de todos os textos da página

### 🎨 Animações e Efeitos
- **Scroll Reveal**: Animações que aparecem ao fazer scroll
- **Count Up**: Animação de contagem numérica para estatísticas
- **Mouse Parallax**: Efeito parallax baseado no movimento do mouse
- **Typing Effect**: Efeito de digitação para textos dinâmicos

### 📱 Design Responsivo
- Layout totalmente responsivo para desktop, tablet e mobile
- Interface moderna e profissional
- Otimizado para diferentes tamanhos de tela

### 🎯 Seções da Página

1. **Header**: Navegação com menu responsivo e seletor de idioma
2. **Hero**: Seção principal com call-to-action
3. **Benefícios**: Cards destacando as vantagens da plataforma
4. **Ativos**: Apresentação dos ativos disponíveis para investimento
5. **Passos**: Processo simplificado em 4 etapas
6. **Depoimentos**: Testemunhos de clientes
7. **FAQ**: Perguntas frequentes com accordion
8. **Footer**: Informações de contato e links importantes

## 🎨 Customização

### Cores e Estilos
Os estilos são gerenciados através do Tailwind CSS. As configurações podem ser ajustadas no arquivo `tailwind.config.js`.

### Traduções
Todas as traduções estão centralizadas no arquivo `src/translations.js`. Para adicionar novos idiomas ou modificar textos, edite este arquivo.

### Assets
Imagens e SVGs estão organizados em:
- `public/assets/` - Recursos estáticos
- `src/assets/` - Exportações JavaScript dos assets

## 🔧 Configuração do Vite

O projeto inclui uma configuração customizada do Vite com:
- Plugin React
- Redirecionamento automático de `favicon.ico` para `favicon.svg`
- Configuração de diretório público

## 📝 Licença

Este projeto é privado e de propriedade da ArkyGlobal.

## 🤝 Contribuindo

Este é um projeto privado. Para sugestões ou melhorias, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ por Wenden Carvalho**
