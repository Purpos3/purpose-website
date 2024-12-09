"use client";

import { gradientStyle } from '@/lib/contants'
import Image from 'next/image'
import logo1 from '@/public/images/companies/1.svg'
import logo2 from '@/public/images/companies/2.svg'
import logo3 from '@/public/images/companies/3.svg'
import logo4 from '@/public/images/companies/4.svg'
import logo5 from '@/public/images/companies/5.svg'
import logo6 from '@/public/images/companies/6.svg'
import logo7 from '@/public/images/companies/7.svg'
import logo8 from '@/public/images/companies/8.svg'
import logo9 from '@/public/images/companies/9.svg'
import logo10 from '@/public/images/companies/10.svg'

export default function Companies() {
  const logos = [
    { src: logo1, alt: 'Roland Berger' },
    { src: logo2, alt: 'Commerzbank' },
    { src: logo3, alt: 'Telekom' },
    { src: logo4, alt: 'Stellantis' },
    { src: logo5, alt: 'Helmholtz' },
    { src: logo6, alt: 'MAN' },
    { src: logo7, alt: 'Bilfinger' },
    { src: logo8, alt: 'Dr. Oetker' },
    { src: logo9, alt: 'Rhenus' },
    { src: logo10, alt: 'DATEV' },
  ]

  return (
    <div className="flex flex-col justify-around items-center p-8 lg:p-0 lg:h-[36rem]">
      <div className="md:w-9/12 lg:w-6/12 text-center">
        <h3
          style={{
            ...gradientStyle,
            backgroundClip: 'text',
          }}
          className="inline-block text-transparent p-3 md:p-0 text-3xl md:text-6xl font-bold"
        >
          Companies that you would be proud to work with
        </h3>
      </div>
      
      {/* Logo slider container */}
      <div className="relative w-full overflow-hidden">
        <style jsx>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-250px * ${logos.length}))}
          }
          .slider {
            animation: slide 30s linear infinite;
            display: inline-flex;
            white-space: nowrap;
            width: fit-content;
          }
          .slider:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="slider">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="inline-block px-12 min-w-[250px] flex items-center justify-center"
            >
              <Image 
                src={logo.src} 
                alt={logo.alt}
                className="w-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
