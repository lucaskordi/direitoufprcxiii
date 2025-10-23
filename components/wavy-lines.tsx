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
      // Linha principal - MUITO MAIS GROSSA
      ctx.strokeStyle = '#f16755'
      ctx.lineWidth = 60
      ctx.lineCap = 'round'
      ctx.shadowColor = '#f16755'
      ctx.shadowBlur = 30
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      ctx.beginPath()

      if (direction === 'horizontal') {
        const points = 200
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
        const points = 200
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

      // Linha secundária com opacidade reduzida - TAMBÉM MAIS GROSSA
      ctx.strokeStyle = 'rgba(241, 103, 85, 0.4)'
      ctx.lineWidth = 30
      ctx.shadowBlur = 20
      ctx.beginPath()

      if (direction === 'horizontal') {
        const points = 200
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
        const points = 200
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

      // Salvar o estado do canvas
      ctx.save()
      
      // Rotacionar o canvas 45 graus
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(Math.PI / 4) // 45 graus
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      // Linha ondulada canto superior esquerdo - MUITO GROSSA
      ctx.strokeStyle = '#f16755'
      ctx.lineWidth = 160
      ctx.lineCap = 'round'
      ctx.shadowColor = '#f16755'
      ctx.shadowBlur = 60
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      
      ctx.beginPath()
      for (let i = 0; i <= 200; i++) {
        const progress = i / 200
        // Linha do canto superior direito - vai da direita para esquerda
        const x = canvas.width * 0.05 + (progress * (canvas.width * 1.2 + 400))
        const y = canvas.height * 0.05 + Math.sin(progress * Math.PI * 4 + time * 0.005) * 80
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Linha ondulada canto inferior esquerdo - réplica da direita rotacionada 180°
      ctx.beginPath()
      for (let i = 0; i <= 200; i++) {
        const progress = i / 200
        // Linha do canto inferior esquerdo - vai da esquerda para direita (180° da direita)
        const x = canvas.width * 0.95 - (progress * (canvas.width * 1.2 + 400))
        const y = canvas.height * 0.95 - Math.sin(progress * Math.PI * 4 + time * 0.005) * 80
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Restaurar o estado do canvas
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
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 5,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  )
}
