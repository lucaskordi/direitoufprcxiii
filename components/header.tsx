'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Direito UFPR
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Sobre
            </a>
            <a href="#courses" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Cursos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contato
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Sobre
              </a>
              <a href="#courses" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Cursos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
