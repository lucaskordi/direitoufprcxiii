# DIREITO UFPR CXIII - Trajetória com Formô

Website moderno com glassmorphism que mostra a trajetória completa da turma de Direito UFPR CXIII durante o projeto de formatura em parceria com a Formô.

## 🎨 Características

- **Design Glassmorphism** - Efeitos de vidro modernos e elegantes
- **Carrossel Full Page** - Navegação imersiva por toda a trajetória
- **Timeline Interativa** - Menu organizado por anos e eventos
- **Fontes Codec** - Tipografia exclusiva em todo o projeto
- **Cores Formô** - Paleta de cores oficial da empresa
- **Animações Fluidas** - Transições suaves e partículas animadas

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Glassmorphism** - Efeitos de vidro modernos
- **Canvas API** - Partículas animadas

## 🎯 Cores da Formô

- **Cream**: `#ffecd2` - Cor principal clara
- **Orange**: `#f16755` - Cor de destaque
- **Dark**: `#0d0d0d` - Cor de fundo

## 📱 Funcionalidades

### Navegação
- **Setas do teclado** - Navegação com setas ↑↓ ou ←→
- **Timeline lateral** - Menu organizado por anos
- **Dots de navegação** - Indicadores visuais
- **Barra de progresso** - Progresso da trajetória

### Eventos da Trajetória
1. **2024** - Eventos iniciais e reuniões
2. **2025** - Banho de lama
3. **2026** - Projetos e assembleias
4. **2027** - Festa de meio-advogado
5. **2029** - Contagem regressiva
6. **2030** - Formatura e celebrações

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais e glassmorphism
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/
│   ├── fullpage-carousel.tsx    # Carrossel principal
│   ├── timeline-navigation.tsx  # Navegação por timeline
│   ├── loading-screen.tsx       # Tela de carregamento
│   └── particles-background.tsx # Fundo de partículas
├── public/
│   ├── logoformo.png        # Logo da Formô
│   ├── BRASÃO.png           # Brasão da turma
│   └── fonts/               # Fontes customizadas
└── lib/
    └── fonts.ts             # Configuração de fontes
```

## 🎨 Componentes Principais

### FullPageCarousel
- Carrossel full page com 23 slides
- Navegação por teclado e mouse
- Transições suaves entre slides
- Indicadores de progresso

### TimelineNavigation
- Menu lateral organizado por anos
- Submenus por eventos
- Navegação direta para qualquer evento
- Indicadores de eventos concluídos

### LoadingScreen
- Tela de carregamento com logos
- Barra de progresso animada
- Transição suave para o conteúdo

## 🎯 Eventos da Trajetória

### 2024 (Eventos Iniciais)
- Reunião com comissão na Hauze
- Briefing de Brasão
- Folia Universitária
- Primeira entrega do Brasão
- JOIA Curitiba
- Med in Eden
- Evento do PDU
- Visitas técnicas
- Reuniões de briefing
- Sessão de fotos
- Vendas de kit vestibular

### 2025-2030 (Futuro)
- Banho de lama
- Reuniões de projeto
- Assembleias
- Festa de boas-vindas
- Festa de meio-advogado
- Contagem regressiva
- Colação de grau
- Culto ecumênico
- Baile de formatura

## 🚀 Deploy

Recomendado para Vercel:

```bash
npm run build
```

O projeto está otimizado para produção com:
- Imagens otimizadas
- Fontes carregadas localmente
- Animações performáticas
- Responsividade completa

## 📞 Contato

Desenvolvido para a turma de Direito UFPR CXIII em parceria com a Formô.