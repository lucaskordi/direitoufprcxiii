'use client'

import FullPageCarousel from '@/components/fullpage-carousel'
import TimelineNavigation from '@/components/timeline-navigation'
import LoadingScreen from '@/components/loading-screen'
import ParticlesBackground from '@/components/particles-background'
import FixedLogo from '@/components/fixed-logo'
import WavyLines from '@/components/wavy-lines'
import { useState } from 'react'

export default function Home() {
  const [currentEventId, setCurrentEventId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [targetSlide, setTargetSlide] = useState<number | undefined>(undefined)

  const handleEventClick = (eventId: number) => {
    setCurrentEventId(eventId)
    setTargetSlide(eventId)
  }

  const handleSlideChange = (slideIndex: number) => {
    setCurrentEventId(slideIndex)
  }

  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-formo-dark relative">
        <ParticlesBackground />
        <WavyLines />
        <FixedLogo />
        <TimelineNavigation 
          onEventClick={handleEventClick}
          currentEventId={currentEventId}
        />
        <FullPageCarousel 
          targetSlide={targetSlide}
          onSlideChange={handleSlideChange}
        />
      </main>
    </>
  )
}
