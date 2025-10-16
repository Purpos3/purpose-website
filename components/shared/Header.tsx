'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Sticky header wrapper */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        {/* Glassmorphism card with liquid glass effect */}
        <div
          className={`relative w-full max-w-[1552px] h-24 transition-all duration-500 ease-out pointer-events-auto ${
            isScrolled ? 'backdrop-blur-xl backdrop-saturate-150 rounded-[20px]' : ''
          }`}
          style={isScrolled ? {
            background: 'rgba(238, 233, 252, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
          } : undefined}
        >
          {/* Logo - Responsive positioning */}
          <div className="absolute opacity-0 animate-fade-in left-4 top-4 sm:left-8 sm:top-8 lg:left-[109px] lg:top-[20px]">
            <Link href="/">
              <span className="sr-only">Purpose</span>
              <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
                <PurposeLogo />
              </div>
            </Link>
          </div>

          {/* Desktop navigation - Absolute positioning */}
          <a
            href="#individuals"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors opacity-0 animate-fade-in-delay-1 cursor-pointer"
            style={{
              left: '326px',
              top: '30px'
            }}
          >
            Individuals
          </a>
          <a
            href="#companies"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors opacity-0 animate-fade-in-delay-2 cursor-pointer"
            style={{
              left: '509.94px',
              top: '30px'
            }}
          >
            Companies
          </a>
          <a
            href="#about"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors opacity-0 animate-fade-in-delay-2 cursor-pointer"
            style={{
              left: '698.8px',
              top: '30px'
            }}
          >
            About us
          </a>

          {/* CTA Button - Absolute positioning */}
          <div
            className="hidden lg:block absolute opacity-0 animate-fade-in-delay-3"
            style={{
              top: '20px',
              right: '97px'
            }}
          >
            <CTAButton href="/cta">Transform your hiring</CTAButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden absolute top-4 right-4 opacity-0 animate-fade-in">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--primary-text)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">
                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 mx-4 rounded-lg">
          <div className="space-y-2 py-6 px-6">
            <a
              href="#individuals"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-[var(--hover-background)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Individuals
            </a>
            <a
              href="#companies"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-[var(--hover-background)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </a>
            <a
              href="#about"
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[var(--primary-text)] hover:bg-[var(--hover-background)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </a>
            <Link
              href="/cta"
              className="block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 bg-[var(--primary-button)] text-white hover:bg-[var(--primary-button-hover)] transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Transform your hiring
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
