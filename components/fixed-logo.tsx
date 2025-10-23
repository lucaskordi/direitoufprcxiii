'use client'

import Image from 'next/image'

export default function FixedLogo() {
  return (
    <div className="fixed top-8 right-8 z-50">
      <a
        href="https://formobrasilpr.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none group"
        aria-label="Visite o site da Formô"
      >
        <div className="transition-all duration-300 group-hover:brightness-110">
          <Image
            src="/logoformo.png"
            alt="Logo Formô"
            width={40}
            height={20}
            className="transition-all duration-300"
          />
        </div>
      </a>
    </div>
  )
}
