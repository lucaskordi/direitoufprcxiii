'use client'

import { useEffect, useRef } from 'react'

export default function WavyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      console.log('Canvas not found')
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('Canvas context not found')
      return
    }

    console.log('Canvas found, starting animation')

    const getResponsiveValues = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const minDimension = Math.min(width, height)
      const isMobile = width < 640
      
      return {
        width,
        height,
        minDimension,
        isMobile,
        mainLineWidth: isMobile 
          ? Math.max(15, Math.min(40, minDimension * 0.04))
          : Math.max(60, Math.min(160, minDimension * 0.08)),
        secondaryLineWidth: isMobile 
          ? Math.max(8, Math.min(20, minDimension * 0.02))
          : Math.max(30, Math.min(80, minDimension * 0.04)),
        shadowBlur: isMobile 
          ? Math.max(5, Math.min(20, minDimension * 0.015))
          : Math.max(30, Math.min(60, minDimension * 0.03)),
        secondaryShadowBlur: isMobile 
          ? Math.max(3, Math.min(10, minDimension * 0.008))
          : Math.max(20, Math.min(30, minDimension * 0.015)),
        waveAmplitude: Math.max(20, Math.min(120, minDimension * 0.06)),
        points: Math.max(100, Math.min(300, Math.floor(minDimension * 0.3)))
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      console.log('Canvas resized to:', canvas.width, 'x', canvas.height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number
    let time = 0

    console.log('WavyLines component mounted and animating')

    const drawWavyLine = (x: number, y: number, width: number, height: number, direction: 'horizontal' | 'vertical') => {
      const responsive = getResponsiveValues()
      
      ctx.strokeStyle = '#f16755'
      ctx.lineWidth = responsive.mainLineWidth
      ctx.lineCap = 'round'
      ctx.shadowColor = '#f16755'
      ctx.shadowBlur = responsive.shadowBlur
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      ctx.beginPath()

      if (direction === 'horizontal') {
        const points = responsive.points
        for (let i = 0; i <= points; i++) {
          const progress = i / points
          const waveX = x + progress * width
          const waveY = y + Math.sin(progress * Math.PI * 8 + time * 0.02) * height * 0.6
          
          if (i === 0) {
            ctx.moveTo(waveX, waveY)
          } else {
            ctx.lineTo(waveX, waveY)
          }
        }
      } else {
        const points = responsive.points
        for (let i = 0; i <= points; i++) {
          const progress = i / points
          const waveY = y + progress * height
          const waveX = x + Math.sin(progress * Math.PI * 8 + time * 0.02) * width * 0.6
          
          if (i === 0) {
            ctx.moveTo(waveX, waveY)
          } else {
            ctx.lineTo(waveX, waveY)
          }
        }
      }

      ctx.stroke()

      ctx.strokeStyle = 'rgba(241, 103, 85, 0.4)'
      ctx.lineWidth = responsive.secondaryLineWidth
      ctx.shadowBlur = responsive.secondaryShadowBlur
      ctx.beginPath()

      if (direction === 'horizontal') {
        const points = responsive.points
        for (let i = 0; i <= points; i++) {
          const progress = i / points
          const waveX = x + progress * width
          const waveY = y + Math.sin(progress * Math.PI * 8 + time * 0.02 + Math.PI) * height * 0.3
          
          if (i === 0) {
            ctx.moveTo(waveX, waveY)
          } else {
            ctx.lineTo(waveX, waveY)
          }
        }
      } else {
        const points = responsive.points
        for (let i = 0; i <= points; i++) {
          const progress = i / points
          const waveY = y + progress * height
          const waveX = x + Math.sin(progress * Math.PI * 8 + time * 0.02 + Math.PI) * width * 0.3
          
          if (i === 0) {
            ctx.moveTo(waveX, waveY)
          } else {
            ctx.lineTo(waveX, waveY)
          }
        }
      }

      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time++
      
      if (time % 60 === 0) {
        console.log('Animating frame:', time, 'Canvas size:', canvas.width, 'x', canvas.height)
      }

      const responsive = getResponsiveValues()

      ctx.save()
      
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(Math.PI / 4)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      ctx.strokeStyle = '#f16755'
      ctx.lineWidth = responsive.mainLineWidth
      ctx.lineCap = 'round'
      ctx.shadowColor = '#f16755'
      ctx.shadowBlur = responsive.shadowBlur
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      
      ctx.beginPath()
      for (let i = 0; i <= responsive.points; i++) {
        const progress = i / responsive.points
        const x = canvas.width * 0.05 + (progress * (canvas.width * 1.2 + responsive.minDimension * 0.2))
        const y = canvas.height * 0.05 + Math.sin(progress * Math.PI * 4 + time * 0.005) * responsive.waveAmplitude
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      ctx.beginPath()
      for (let i = 0; i <= responsive.points; i++) {
        const progress = i / responsive.points
        const x = canvas.width * 0.95 - (progress * (canvas.width * 1.2 + responsive.minDimension * 0.2))
        const y = canvas.height * 0.95 - Math.sin(progress * Math.PI * 4 + time * 0.005) * responsive.waveAmplitude
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      ctx.restore()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ 
        zIndex: 5,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
    </div>
  )
}
