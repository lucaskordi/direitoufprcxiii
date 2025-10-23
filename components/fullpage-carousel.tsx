'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import CarouselParticles from './carousel-particles'

interface CarouselSlide {
  id: number
  title: string
  date?: string
  description: string
  backgroundImage?: string
  isCompleted?: boolean
  isLogo?: boolean
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Cronograma - Direito UFPR CXIII',
    description: 'A trajetória completa da turma de Direito UFPR CXIII em parceria com a Formô',
    backgroundImage: '/slide01.jpg'
  },
  {
    id: 2,
    title: 'Primeira Reunião com a Comissão',
    date: 'Sábado - 13.09',
    description: 'Reunião na Hauze para alinhamento inicial do projeto de formatura',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Briefing de Brasão',
    date: 'Segunda - 29.09',
    description: 'Reunião online para definição do brasão da turma',
    isCompleted: true
  },
  {
    id: 4,
    title: 'Folia Universitária',
    date: 'Sábado - 04.10',
    description: 'Evento de integração e confraternização da turma',
    isCompleted: true
  },
  {
    id: 5,
    title: 'Primeira Entrega do Brasão',
    date: 'Terça - 07.10',
    description: 'Apresentação da primeira versão do brasão da turma',
    isCompleted: true
  },
  {
    id: 6,
    title: 'JOIA Curitiba',
    date: 'De 25.10 a 09.11',
    description: 'Participação de membros da comissão na JOIA Curitiba (Atlética)'
  },
  {
    id: 7,
    title: 'Med in Eden',
    date: 'Sexta - 07.11',
    description: 'Evento médico organizado pela turma'
  },
  {
    id: 8,
    title: 'Evento do PDU',
    date: 'Sábado - 08.11',
    description: 'Participação de membros da comissão no evento do PDU'
  },
  {
    id: 9,
    title: 'Visitas Técnicas e Degustação',
    date: 'Semana de 10 a 14.11',
    description: 'Atividades práticas e degustação para o projeto'
  },
  {
    id: 10,
    title: 'Reunião de Briefing + Apresentação',
    date: 'Sábado - 15.11',
    description: 'Apresentação de logos e brandbook da turma'
  },
  {
    id: 11,
    title: 'Expectativa de Fotos da Comissão',
    date: 'Sábado - 22.11',
    description: 'Sessão de fotos oficial da comissão de formatura'
  },
  {
    id: 12,
    title: 'Segunda Fase do Vestibular',
    date: 'Domingo - 30.11',
    description: 'Vendas de kit vestibular para arrecadação de caixa'
  },
  {
    id: 13,
    title: 'Banho de Lama',
    date: 'Sexta - 16.01',
    description: 'Vendas de kit para calouros da turma CXIV'
  },
  {
    id: 14,
    title: 'Reunião de Projeto',
    date: 'Primeira semana de março de 2026',
    description: 'Reunião de projeto com a Comissão'
  },
  {
    id: 15,
    title: 'Finalização de Projeto',
    date: 'Terceira semana de março de 2026',
    description: 'Reunião de finalização de projeto'
  },
  {
    id: 16,
    title: 'Assembleia',
    date: 'Primeira semana de abril de 2026',
    description: 'Assembleia geral da turma'
  },
  {
    id: 17,
    title: 'Festa de Boas-Vindas',
    date: 'Segundo semestre de 2026*',
    description: 'Evento de boas-vindas para novos membros'
  },
  {
    id: 18,
    title: 'Festa e/ou Viagem de Meio-Advogado',
    date: 'Setembro/Outubro de 2027*',
    description: 'Celebração do meio do curso'
  },
  {
    id: 19,
    title: 'Festa de 365 e/ou 100 Dias',
    date: '2029',
    description: 'Celebração da contagem regressiva para formatura'
  },
  {
    id: 20,
    title: 'Colação de Grau',
    date: 'Fevereiro de 2030',
    description: 'Cerimônia oficial de colação de grau'
  },
  {
    id: 21,
    title: 'Culto Ecumênico',
    date: 'Fevereiro de 2030',
    description: 'Cerimônia religiosa de formatura'
  },
  {
    id: 22,
    title: 'Baile de Formatura',
    date: 'Fevereiro de 2030',
    description: 'Baile oficial de formatura da turma'
  },
  {
    id: 23,
    title: 'Formô',
    description: 'Nossa parceira nesta jornada',
    isLogo: true
  }
]

interface FullPageCarouselProps {
  targetSlide?: number
  onSlideChange?: (slideIndex: number) => void
}

export default function FullPageCarousel({ targetSlide, onSlideChange }: FullPageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [backgroundTransition, setBackgroundTransition] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setBackgroundTransition(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
      setBackgroundTransition(false)
      if (onSlideChange) {
        onSlideChange(index)
      }
    }, 300)
  }

  // Effect para rolar suavemente quando targetSlide mudar
  useEffect(() => {
    if (targetSlide !== undefined && targetSlide !== currentSlide) {
      goToSlide(targetSlide)
    }
  }, [targetSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        nextSlide()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {currentSlideData.backgroundImage ? (
          <div className="relative w-full h-full">
            <Image
              src={currentSlideData.backgroundImage}
              alt="Background"
              fill
              className={`object-cover transition-all duration-300 ease-in-out ${
                backgroundTransition ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ filter: 'brightness(0.8) contrast(1.1)' }}
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Animated particles overlay */}
            <CarouselParticles />
          </div>
        ) : (
          <div className={`w-full h-full bg-gradient-to-br from-formo-dark via-formo-dark to-formo-orange transition-all duration-300 ease-in-out ${
            backgroundTransition ? 'opacity-0' : 'opacity-100'
          }`}>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            {/* Animated particles overlay */}
            <CarouselParticles />
          </div>
        )}
      </div>

      {/* Navigation Dots - Moved to bottom */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-formo-orange scale-125'
                : 'bg-formo-cream bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 glass rounded-full hover:glass-orange transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 text-formo-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 glass rounded-full hover:glass-orange transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 text-formo-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-in-out ${
          isTransitioning ? 'opacity-0 transform scale-95 translate-y-4' : 'opacity-100 transform scale-100 translate-y-0'
        }`}>
          {currentSlideData.isLogo ? (
            <div className="glass-dark rounded-3xl p-12">
              <Image
                src="/logoformo.png"
                alt="Logo Formô"
                width={400}
                height={200}
                className="mx-auto mb-8"
              />
              <h1 className="text-4xl font-codec-cold text-formo-cream mb-4">
                {currentSlideData.title}
              </h1>
              <p className="text-xl text-formo-cream opacity-80">
                {currentSlideData.description}
              </p>
            </div>
          ) : currentSlideData.id === 1 ? (
            <div className="glass-dark rounded-3xl p-12">
              <div className="mb-8 flex items-center justify-center space-x-8">
                <Image
                  src="/BRASÃO.png"
                  alt="Brasão da Turma"
                  width={120}
                  height={120}
                />
                <Image
                  src="/logoformo.png"
                  alt="Logo Formô"
                  width={120}
                  height={120}
                />
              </div>
              
              <h1 className="text-5xl font-codec-cold text-formo-cream mb-6">
                {currentSlideData.title}
              </h1>
              
              {currentSlideData.date && (
                <div className="text-2xl font-codec-warm text-formo-orange mb-6">
                  {currentSlideData.date}
                </div>
              )}
              
              <p className="text-xl text-formo-cream opacity-90 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>
              
              {currentSlideData.isCompleted && (
                <div className="inline-flex items-center px-6 py-3 bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 rounded-full">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-400 font-codec-warm">CONCLUÍDO</span>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-dark rounded-3xl p-12">
              <div className="mb-8">
                <Image
                  src="/BRASÃO.png"
                  alt="Brasão da Turma"
                  width={120}
                  height={120}
                  className="mx-auto mb-6"
                />
              </div>
              
              <h1 className="text-5xl font-codec-cold text-formo-cream mb-6">
                {currentSlideData.title}
              </h1>
              
              {currentSlideData.date && (
                <div className="text-2xl font-codec-warm text-formo-orange mb-6">
                  {currentSlideData.date}
                </div>
              )}
              
              <p className="text-xl text-formo-cream opacity-90 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>
              
              {currentSlideData.isCompleted && (
                <div className="inline-flex items-center px-6 py-3 bg-green-500 bg-opacity-20 backdrop-blur-sm border border-green-400 rounded-full">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-400 font-codec-warm">CONCLUÍDO</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-64 h-1 bg-formo-cream bg-opacity-20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-formo-orange transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-8 z-20">
        <div className="glass rounded-full px-4 py-2">
          <span className="text-formo-cream font-codec-warm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  )
}
