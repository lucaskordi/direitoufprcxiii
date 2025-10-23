'use client'

import { useState, useRef, useEffect } from 'react'

interface YearData {
  year: string
  events: {
    id: number
    title: string
    date: string
    isCompleted?: boolean
  }[]
}

const timelineData: YearData[] = [
  {
    year: '2024',
    events: [
      { id: 2, title: 'Primeira Reunião com a Comissão', date: '13.09', isCompleted: true },
      { id: 3, title: 'Briefing de Brasão', date: '29.09', isCompleted: true },
      { id: 4, title: 'Folia Universitária', date: '04.10', isCompleted: true },
      { id: 5, title: 'Primeira Entrega do Brasão', date: '07.10', isCompleted: true },
      { id: 6, title: 'JOIA Curitiba', date: '25.10 - 09.11' },
      { id: 7, title: 'Med in Eden', date: '07.11' },
      { id: 8, title: 'Evento do PDU', date: '08.11' },
      { id: 9, title: 'Visitas Técnicas e Degustação', date: '10-14.11' },
      { id: 10, title: 'Reunião de Briefing + Apresentação', date: '15.11' },
      { id: 11, title: 'Expectativa de Fotos da Comissão', date: '22.11' },
      { id: 12, title: 'Segunda Fase do Vestibular', date: '30.11' }
    ]
  },
  {
    year: '2025',
    events: [
      { id: 13, title: 'Banho de Lama', date: '16.01' }
    ]
  },
  {
    year: '2026',
    events: [
      { id: 14, title: 'Reunião de Projeto', date: 'Março' },
      { id: 15, title: 'Finalização de Projeto', date: 'Março' },
      { id: 16, title: 'Assembleia', date: 'Abril' },
      { id: 17, title: 'Festa de Boas-Vindas', date: 'Segundo semestre' }
    ]
  },
  {
    year: '2027',
    events: [
      { id: 18, title: 'Festa e/ou Viagem de Meio-Advogado', date: 'Set/Out' }
    ]
  },
  {
    year: '2029',
    events: [
      { id: 19, title: 'Festa de 365 e/ou 100 Dias', date: 'Ano todo' }
    ]
  },
  {
    year: '2030',
    events: [
      { id: 20, title: 'Colação de Grau', date: 'Fevereiro' },
      { id: 21, title: 'Culto Ecumênico', date: 'Fevereiro' },
      { id: 22, title: 'Baile de Formatura', date: 'Fevereiro' }
    ]
  }
]

interface TimelineNavigationProps {
  onEventClick: (eventId: number) => void
  currentEventId: number
}

export default function TimelineNavigation({ onEventClick, currentEventId }: TimelineNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleToggleMenu = () => {
    if (isOpen) {
      setIsClosing(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, 300) // Duração da animação de saída
    } else {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
        setShowScrollIndicator(scrollTop < scrollHeight - clientHeight - 10)
      }
    }

    if (isOpen && scrollRef.current) {
      checkScroll()
      scrollRef.current.addEventListener('scroll', checkScroll)
      
      // Smooth scroll behavior
      scrollRef.current.style.scrollBehavior = 'smooth'
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScroll)
      }
    }
  }, [isOpen])

  // Função para scroll suave personalizado
  const smoothScrollTo = (element: HTMLElement) => {
    const container = scrollRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    const scrollTop = container.scrollTop
    const targetScrollTop = scrollTop + elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2)

    const startTime = performance.now()
    const startScrollTop = scrollTop
    const distance = targetScrollTop - startScrollTop
    const duration = 500 // 500ms

    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)
      
      container.scrollTop = startScrollTop + distance * easedProgress
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  // Auto scroll para o evento ativo quando o menu abrir
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      // Pequeno delay para garantir que o menu esteja renderizado
      setTimeout(() => {
        const activeEvent = scrollRef.current?.querySelector(`[data-event-id="${currentEventId}"]`) as HTMLElement
        if (activeEvent) {
          smoothScrollTo(activeEvent)
        }
      }, 150)
    }
  }, [isOpen, currentEventId])

  return (
    <div className="fixed top-8 left-8 z-30">
      <button
        onClick={handleToggleMenu}
        className="glass rounded-2xl px-6 py-3 hover:glass-orange transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5">
            <svg 
              className={`w-5 h-5 text-formo-cream absolute transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <svg 
              className={`w-5 h-5 text-formo-cream absolute transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <span className="text-formo-cream font-codec-warm">Timeline</span>
        </div>
      </button>

      {(isOpen || isClosing) && (
        <div className={`absolute top-12 left-0 glass-dark rounded-2xl p-6 w-80 max-h-96 overflow-y-auto timeline-scroll scroll-smooth relative ${
          isClosing ? 'menu-slide-up' : 'menu-slide-down'
        }`} ref={scrollRef}>
          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-2 right-2 z-10">
              <div className="glass-orange rounded-full p-2 animate-bounce">
                <svg className="w-4 h-4 text-formo-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          )}
          <div className="space-y-4">
            {timelineData.map((yearData) => (
              <div key={yearData.year}>
                <button
                  onClick={() => setSelectedYear(selectedYear === yearData.year ? null : yearData.year)}
                  className="w-full text-left flex items-center justify-between p-3 glass rounded-xl hover:glass-orange transition-all duration-300"
                >
                  <span className="text-formo-cream font-codec-cold text-lg">
                    {yearData.year}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-formo-cream transition-transform duration-300 ${
                      selectedYear === yearData.year ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {selectedYear === yearData.year && (
                  <div className="mt-3 space-y-2">
                    {yearData.events.map((event) => (
                      <button
                        key={event.id}
                        data-event-id={event.id - 1}
                        onClick={() => {
                          onEventClick(event.id - 1)
                          handleToggleMenu()
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          currentEventId === event.id - 1
                            ? 'glass-orange'
                            : 'glass hover:glass-orange'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-formo-cream font-codec-warm text-sm">
                              {event.title}
                            </div>
                            <div className="text-formo-cream text-xs opacity-70">
                              {event.date}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {event.isCompleted && (
                              <div className="w-2 h-2 bg-formo-orange rounded-full"></div>
                            )}
                            {currentEventId === event.id - 1 && (
                              <div className="w-2 h-2 bg-formo-cream rounded-full animate-pulse"></div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
