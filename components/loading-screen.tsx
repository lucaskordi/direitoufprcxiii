'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-formo-dark flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/logoformo.png"
            alt="Logo Formô"
            width={200}
            height={100}
            className="mx-auto mb-4"
          />
          <Image
            src="/BRASÃO.png"
            alt="Brasão da Turma"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        
        <h1 className="text-3xl font-codec-cold text-formo-cream mb-4">
          DIREITO UFPR CXIII
        </h1>
        
        <div className="w-64 h-2 bg-formo-cream bg-opacity-20 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-formo-orange transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-formo-cream opacity-70">
          Carregando nossa trajetória...
        </p>
      </div>
    </div>
  )
}
