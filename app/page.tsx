// https://www.figma.com/design/CgxmFLReJXu8togOjU9yWZ/Purpose-Design?node-id=613-447&m=dev

'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'

export default function Home() {
  const [unfilteredApplicantsOpen, setUnfilteredApplicantsOpen] = useState(false)
  const [dualLayerMatchingOpen, setDualLayerMatchingOpen] = useState(false)
  const [filteredCandidatesOpen, setFilteredCandidatesOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section - First Screen */}
      <div className="relative w-full min-h-screen lg:h-[1054px] flex items-center justify-center px-4 sm:px-8 py-20 sm:py-24 lg:py-0">
        {/* Hero content container - Responsive */}
        <div className="relative w-full max-w-[1552px] min-h-[600px] sm:min-h-[700px] lg:h-[1054px]">
          {/* Header inside 1552px container */}
          <Header />
            {/* Decorative circles on the right - hidden on mobile */}
            {/* Upper right circle */}
            <div
              className="hidden lg:block absolute w-[668.371px] h-[668.371px] rounded-full bg-circle-gradient -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow"
              style={{
                left: '1023px',
                bottom: '654px',
                transform: 'rotate(134.213deg)'
              }}
            />
            {/* Lower right circle */}
            <div
              className="hidden lg:block absolute w-[668.371px] h-[668.371px] rounded-full bg-circle-gradient -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-1"
              style={{
                left: '1184px',
                bottom: '320.87px',
                transform: 'rotate(134.213deg)'
              }}
            />

            {/* Decorative circles on the left - hidden on mobile */}
            {/* Top left circle - largest */}
            <div
              className="hidden lg:block absolute w-[862.444px] h-[862.444px] rounded-full bg-circle-gradient-reverse -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-2"
              style={{
                top: '251px',
                right: '1067px',
                transform: 'rotate(134.213deg)'
              }}
            />
            {/* Middle left circle - smallest */}
            <div
              className="hidden lg:block absolute w-[619.355px] h-[619.355px] rounded-full bg-circle-gradient-reverse -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-3"
              style={{
                top: '533px',
                right: '810px',
                transform: 'rotate(134.213deg)'
              }}
            />
            {/* Lower left circle - medium */}
            <div
              className="hidden lg:block absolute w-[668.371px] h-[668.371px] rounded-full bg-circle-gradient-reverse -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-4"
              style={{
                top: '683px',
                right: '495px',
                transform: 'rotate(134.213deg)'
              }}
            />

            {/* SVG gradient dashed ellipse border - responsive */}
            <svg
              className="hidden lg:block absolute flex-shrink-0"
              width="1327"
              height="257"
              style={{
                left: '112px',
                top: '399px',
                overflow: 'visible'
              }}
            >
              <defs>
                <radialGradient id="borderGradient" cx="17.79%" cy="0%" r="136.3%" fx="17.79%" fy="0%">
                  <stop offset="0%" stopColor="#5323E5" />
                  <stop offset="38.13%" stopColor="#5472FF" />
                  <stop offset="81.27%" stopColor="#6DC9D8" />
                  <stop offset="92.1%" stopColor="#72E0DA" />
                  <stop offset="100%" stopColor="#6DECD3" />
                </radialGradient>
                <mask id="ellipseMask">
                  <ellipse
                    cx="663.5"
                    cy="128.5"
                    rx="662.5"
                    ry="127.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    pathLength="2500"
                    className="animate-draw-ellipse"
                    style={{
                      strokeDasharray: '2500',
                      strokeDashoffset: 2500
                    }}
                  />
                </mask>
              </defs>
              <ellipse
                cx="663.5"
                cy="128.5"
                rx="662.5"
                ry="127.5"
                fill="none"
                stroke="url(#borderGradient)"
                strokeWidth="2"
                strokeDasharray="8 8"
                mask="url(#ellipseMask)"
              />
            </svg>

            {/* Main headline - Responsive positioning */}
            <h1 className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-[209px] lg:right-auto lg:w-[1134px] top-32 sm:top-40 lg:top-[482px] text-center font-dm-sans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-[120%] text-[#454545] z-10 opacity-0 animate-fade-in-delay-3 px-4 lg:px-0">
              Discover{' '}
              <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                next-generation
              </span>{' '}
              recruiting technology.
            </h1>

            {/* Description text - Responsive positioning */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-[448px] lg:right-auto top-[420px] sm:top-[500px] lg:top-[689px] z-10 flex justify-center lg:justify-start">
              <p className="text-center font-poppins text-sm sm:text-base font-semibold leading-normal text-[#454545CC] overflow-hidden border-r-2 border-transparent animate-typewriter w-0 whitespace-nowrap max-w-full">
                Automated job search for candidates, intelligent pre-screening for companies.
              </p>
            </div>

          {/* Separator line at bottom of first screen */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" />
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" style={{ zIndex: 10 }} />

      {/* Summary Screen - Below Hero */}
      <div className="relative w-full min-h-screen lg:h-[1054px] flex items-center justify-center px-4 sm:px-8 py-20 sm:py-24 lg:py-0">
        {/* Summary content container - Same dimensions as hero */}
        <div className="relative w-full max-w-[1552px] min-h-[600px] sm:min-h-[700px] lg:h-[1054px]">
          {/* Decorative circles on the right - continuing from hero */}
          {/* Upper right circle */}
          <div
            className="hidden lg:block absolute w-[620px] h-[620px] rounded-full bg-circle-gradient -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow"
            style={{
              left: '1100px',
              top: '150px',
              transform: 'rotate(134.213deg)'
            }}
          />
          {/* Lower right circle */}
          <div
            className="hidden lg:block absolute w-[550px] h-[550px] rounded-full bg-circle-gradient -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-1"
            style={{
              left: '1250px',
              bottom: '200px',
              transform: 'rotate(134.213deg)'
            }}
          />

          {/* Decorative circles on the left - continuing from hero */}
          {/* Top left circle */}
          <div
            className="hidden lg:block absolute w-[700px] h-[700px] rounded-full bg-circle-gradient-reverse -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-2"
            style={{
              top: '200px',
              right: '1150px',
              transform: 'rotate(134.213deg)'
            }}
          />
          {/* Lower left circle */}
          <div
            className="hidden lg:block absolute w-[580px] h-[580px] rounded-full bg-circle-gradient-reverse -z-10 flex-shrink-0 opacity-0 animate-fade-in-slow-3"
            style={{
              bottom: '100px',
              right: '900px',
              transform: 'rotate(134.213deg)'
            }}
          />

          {/* Heading text above boxes */}
          <h2
            className="hidden lg:block absolute w-[1018px] h-[56px] flex-shrink-0 text-center font-dm-sans text-[48px] font-bold leading-[120%] text-[#454545]"
            style={{
              top: '221.5px',
              left: '267px'
            }}
          >
            Powered by intelligent{' '}
            <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              automation
            </span>.
          </h2>

          {/* First rectangle */}
          <div
            className="hidden lg:block absolute w-[358px] h-[425px] flex-shrink-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:-translate-y-3"
            style={{
              top: '340px',
              left: '189px',
              borderRadius: '50px',
              border: '2px solid var(--glass-stroke, #FFF)',
              background: 'linear-gradient(180deg, #3783AC 0%, #1D0A6F 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.50)',
              backdropFilter: 'blur(2px)'
            }}
          >
            {/* Icon inside first box */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 88 88"
              fill="none"
              className="absolute flex-shrink-0"
              style={{
                top: '45px',
                left: '139px',
                filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            >
              <g filter="url(#filter0_d_2657_8383)">
                <path d="M9.31239 36.0015C2.29426 41.715 2.16445 50.9209 9.31239 57.7924C9.31239 65.8622 14.5121 71.0135 22.0588 71.0135C23.0849 76.7761 28.3571 80 32.9555 80C37.5539 80 44.0001 77.1601 44.0001 69.6722V61.8187H59.4914C60.3594 61.8187 61.1988 62.1292 61.8579 62.6941L67.7593 67.7522C67.6785 68.1862 67.6363 68.6337 67.6363 69.0911C67.6363 73.1076 70.8924 76.3636 74.9091 76.3636C78.9257 76.3636 82.1818 73.1076 82.1818 69.0911C82.1818 65.0747 78.9257 61.8187 74.9091 61.8187C74.0616 61.8187 73.2481 61.9636 72.4918 62.23L66.591 57.1724C64.6137 55.4777 62.0955 54.5462 59.4914 54.5462H44.0001V43.6375H70.4275C71.685 45.8112 74.0353 47.2737 76.7272 47.2737C80.7439 47.2737 84 44.0177 84 40.0013C84 35.9848 80.7439 32.7288 76.7272 32.7288C74.0353 32.7288 71.685 34.1913 70.4275 36.365H44.0001V25.4563H59.4914C62.0955 25.4563 64.6137 24.5248 66.591 22.8301L72.4918 17.7725C73.248 18.0389 74.0616 18.1838 74.9091 18.1838C78.9257 18.1838 82.1818 14.9278 82.1818 10.9114C82.1818 6.8949 78.9257 3.6389 74.9091 3.6389C70.8924 3.6389 67.6363 6.8949 67.6363 10.9114C67.6363 11.3688 67.6785 11.8163 67.7593 12.2503L61.8579 17.3084C61.1988 17.8733 60.3594 18.1838 59.4914 18.1838H44.0001V9.00038C44.0001 5.00021 39.9556 0 33.9552 0C27.9547 0 23.9542 5.00799 23.9543 9.00038C18.9717 10.5707 15.299 14.2298 15.299 19.9362C9.8792 22.6147 6.44597 29.1399 9.31239 36.0015Z" fill="url(#paint0_linear_2657_8383)"/>
              </g>
              <defs>
                <filter id="filter0_d_2657_8383" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2657_8383"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2657_8383" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_2657_8383" x1="84" y1="40" x2="4" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Title inside first box */}
            <h3
              className="absolute text-center font-dm-sans text-[24px] font-bold leading-[120%] text-white"
              style={{
                top: '170px',
                left: '66px'
              }}
            >
              AI Matching Engine
            </h3>

            {/* Text inside first box */}
            <p
              className="absolute w-[318px] text-center font-dm-sans text-[22px] font-medium leading-[120%]"
              style={{
                bottom: '73.98px',
                left: '20px',
                color: 'rgba(255, 255, 255, 0.80)'
              }}
            >
              Deep learning algorithms connect job seekers with relevant opportunities and employers with qualified candidates.
            </p>
          </div>

          {/* Second rectangle */}
          <div
            className="hidden lg:block absolute w-[358px] h-[425px] flex-shrink-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:-translate-y-3"
            style={{
              top: '340px',
              left: '597px',
              borderRadius: '50px',
              border: '2px solid var(--glass-stroke, #FFF)',
              background: 'linear-gradient(180deg, #3783AC 0%, #1D0A6F 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.50)',
              backdropFilter: 'blur(2px)'
            }}
          >
            {/* Icon inside second box */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="absolute flex-shrink-0"
              style={{
                top: '45px',
                left: '139px',
                filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            >
              <path d="M41.2597 5.34055C40.4813 4.88648 39.5187 4.88648 38.7403 5.34055L10 22.1057L40 39.6057L70 22.1057L41.2597 5.34055Z" fill="url(#paint0_linear_2657_8393)"/>
              <path d="M72.5 26.4359L42.5 43.9359V73.9359L71.2597 57.1594C72.0277 56.7114 72.5 55.8892 72.5 55V26.4359Z" fill="url(#paint1_linear_2657_8393)"/>
              <path d="M37.5 73.9359V43.9359L7.5 26.4359V55C7.5 55.8892 7.97228 56.7114 8.74032 57.1594L37.5 73.9359Z" fill="url(#paint2_linear_2657_8393)"/>
              <defs>
                <linearGradient id="paint0_linear_2657_8393" x1="7.5" y1="39.468" x2="72.5" y2="39.468" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2657_8393" x1="7.5" y1="39.468" x2="72.5" y2="39.468" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
                <linearGradient id="paint2_linear_2657_8393" x1="7.5" y1="39.468" x2="72.5" y2="39.468" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Title inside second box */}
            <h3
              className="absolute text-center font-dm-sans text-[24px] font-bold leading-[120%] text-white"
              style={{
                top: '170px',
                left: '66px'
              }}
            >
              Automated System
            </h3>

            {/* Text inside second box */}
            <p
              className="absolute w-[309px] text-center font-dm-sans text-[22px] font-medium leading-[120%]"
              style={{
                bottom: '73.99px',
                left: '24.5px',
                color: 'rgba(255, 255, 255, 0.80)'
              }}
            >
              Candidates apply to perfect-fit positions with one click. Employers receive pre-screened applications automatically.
            </p>
          </div>

          {/* Third rectangle */}
          <div
            className="hidden lg:block absolute w-[358px] h-[425px] flex-shrink-0 transition-all duration-300 opacity-50 hover:opacity-100 hover:-translate-y-3"
            style={{
              top: '340px',
              left: '1005px',
              borderRadius: '50px',
              border: '2px solid var(--glass-stroke, #FFF)',
              background: 'linear-gradient(180deg, #3783AC 0%, #1D0A6F 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.50)',
              backdropFilter: 'blur(2px)'
            }}
          >
            {/* Icon inside third box */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="85"
              viewBox="0 0 80 85"
              fill="none"
              className="absolute flex-shrink-0"
              style={{
                top: '45px',
                left: '139px',
                filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            >
              <g filter="url(#filter0_d_2657_8388)">
                <path fillRule="evenodd" clipRule="evenodd" d="M41.6667 3.33337C42.5871 3.33337 43.3333 4.07957 43.3333 5.00004V20C43.3333 25.5229 47.8105 30 53.3333 30H68.3333C69.2538 30 70 30.7462 70 31.6667V63.3334C70 70.6972 64.0305 76.6667 56.6667 76.6667H23.3333C15.9695 76.6667 10 70.6972 10 63.3334V16.6667C10 9.30291 15.9695 3.33337 23.3333 3.33337H41.6667ZM35.6904 44.857C36.9921 43.5553 36.9921 41.4447 35.6904 40.143C34.3886 38.8412 32.2781 38.8413 30.9763 40.143L23.4763 47.643C22.1746 48.9448 22.1746 51.0553 23.4763 52.3571L30.9763 59.857C32.2781 61.1588 34.3886 61.1588 35.6904 59.857C36.9921 58.5553 36.9921 56.4447 35.6904 55.143L30.5474 50L35.6904 44.857ZM49.0237 40.143C47.7219 38.8413 45.6114 38.8413 44.3096 40.143C43.0079 41.4447 43.0079 43.5553 44.3096 44.857L49.4526 50L44.3096 55.143C43.0079 56.4447 43.0079 58.5553 44.3096 59.857C45.6114 61.1588 47.7219 61.1588 49.0237 59.857L56.5237 52.3571C57.1488 51.7319 57.5 50.8841 57.5 50C57.5 49.116 57.1488 48.2681 56.5237 47.643L49.0237 40.143Z" fill="url(#paint0_linear_2657_8388)"/>
                <path d="M65.2022 20.4882C66.2521 21.5381 65.5085 23.3334 64.0237 23.3334H53.3333C51.4924 23.3334 50 21.841 50 20V9.30969C50 7.82484 51.7952 7.08123 52.8452 8.13117L65.2022 20.4882Z" fill="url(#paint1_linear_2657_8388)"/>
              </g>
              <defs>
                <filter id="filter0_d_2657_8388" x="-4" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2657_8388"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2657_8388" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_2657_8388" x1="40" y1="3.33337" x2="40" y2="76.6667" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2657_8388" x1="40" y1="3.33337" x2="40" y2="76.6667" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="1" stopColor="#1909FE"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Title inside third box */}
            <h3
              className="absolute text-center font-dm-sans text-[24px] font-bold leading-[120%] text-white"
              style={{
                top: '170px',
                left: '66px'
              }}
            >
              CV Intelligence
            </h3>

            {/* Text inside third box */}
            <p
              className="absolute w-[309px] text-center font-dm-sans text-[22px] font-medium leading-[120%]"
              style={{
                bottom: '73.99px',
                left: '24.5px',
                color: 'rgba(255, 255, 255, 0.80)'
              }}
            >
              AI extracts and interprets all relevant information from resumes and other documents without manual form-filling.
            </p>
          </div>

          {/* Separator line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" style={{ zIndex: 10 }} />
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" style={{ zIndex: 10 }} />

      {/* Individuals Section */}
      <section id="individuals" className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-20">
        <div className="max-w-[1552px] w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dm-sans font-bold text-center text-[#454545] mb-8">
            For <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Individuals</span>
          </h2>
          <p className="text-lg sm:text-xl text-center text-[#454545CC] font-poppins">
            Your dream job finds you. Stop searching, start discovering.
          </p>
          {/* Add more content here */}
        </div>
      </section>

      {/* Separator line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" style={{ zIndex: 10 }} />

      {/* Companies Section */}
      <section id="companies" className="relative w-full min-h-screen lg:h-[1054px] flex items-center justify-center bg-gradient-to-b from-white to-[#F5F5F7] px-4 sm:px-8 py-20 sm:py-24 lg:py-0">
        {/* Companies content container - Same dimensions as hero */}
        <div className="relative w-full max-w-[1552px] min-h-[600px] sm:min-h-[700px] lg:h-[1054px]">
          {/* Central gradient box */}
          <div
            className="hidden lg:block absolute w-[1360px] h-[927px] flex-shrink-0"
            style={{
              top: '63.5px',
              left: '96px',
              borderRadius: '134px',
              background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)'
            }}
          />

          {/* "Companies" text inside gradient box */}
          <h3
            className="hidden lg:block absolute w-[173px] h-[29px] flex-shrink-0 font-dm-sans text-[30px] font-bold leading-[120%] text-[#454545]"
            style={{
              top: 'calc(63.5px + 64px)',
              left: 'calc(96px + 95px)'
            }}
          >
            Companies
          </h3>

          {/* "Unfiltered Applicants" text inside gradient box */}
          <p
            className="hidden lg:block absolute w-[232px] flex-shrink-0 font-poppins text-[16px] font-bold leading-normal text-[#454545]"
            style={{
              top: 'calc(63.5px + 283px)',
              left: 'calc(96px + 95px)'
            }}
          >
            Unfiltered Applicants
          </p>

          {/* Arrow next to "Unfiltered Applicants" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0 cursor-pointer hover:opacity-70 transition-all duration-300"
            style={{
              top: 'calc(63.5px + 283px)',
              left: 'calc(96px + 95px + 232px - 8px)',
              transform: unfilteredApplicantsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            onClick={() => setUnfilteredApplicantsOpen(!unfilteredApplicantsOpen)}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M3.4301 7.5968C3.83689 7.19001 4.49644 7.19001 4.90324 7.5968L12.5 15.1936L20.0968 7.5968C20.5036 7.19001 21.1631 7.19001 21.5699 7.5968C21.9767 8.0036 21.9767 8.66315 21.5699 9.06994L13.2366 17.4033C12.8298 17.8101 12.1702 17.8101 11.7634 17.4033L3.4301 9.06994C3.0233 8.66315 3.0233 8.0036 3.4301 7.5968Z" fill="#454545"/>
          </svg>

          {/* Dropdown box for "Unfiltered Applicants" */}
          {unfilteredApplicantsOpen && (
            <div
              className="hidden lg:flex absolute flex-shrink-0"
              style={{
                top: 'calc(63.5px + 283px + 16px + 20px)',
                left: 'calc(96px + 95px)',
                width: '306px',
                height: '72px',
                padding: '12px 7px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '18px',
                border: '1px solid #FFF',
                background: 'linear-gradient(90deg, rgba(42, 23, 92, 0.50) 0%, rgba(4, 23, 72, 0.50) 100%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                zIndex: 30
              }}
            >
              <p
                className="font-poppins"
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}
              >
                Purpose integrates with your existing ATS in just a few clicks.
              </p>
            </div>
          )}

          {/* "Dual-layer Matching & Automated Screening" text - same level as Unfiltered Applicants */}
          <p
            className="hidden lg:block absolute w-[232px] flex-shrink-0 font-poppins text-[16px] font-bold leading-normal text-[#454545] whitespace-nowrap"
            style={{
              top: 'calc(63.5px + 283px)',
              left: 'calc(96px + 470px)'
            }}
          >
            Dual-layer Matching & Automated Screening
          </p>

          {/* Arrow next to "Dual-layer Matching & Automated Screening" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0 cursor-pointer hover:opacity-70 transition-all duration-300"
            style={{
              top: 'calc(63.5px + 283px)',
              left: 'calc(96px + 470px + 370px + 8px)',
              transform: dualLayerMatchingOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            onClick={() => setDualLayerMatchingOpen(!dualLayerMatchingOpen)}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M3.4301 7.5968C3.83689 7.19001 4.49644 7.19001 4.90324 7.5968L12.5 15.1936L20.0968 7.5968C20.5036 7.19001 21.1631 7.19001 21.5699 7.5968C21.9767 8.0036 21.9767 8.66315 21.5699 9.06994L13.2366 17.4033C12.8298 17.8101 12.1702 17.8101 11.7634 17.4033L3.4301 9.06994C3.0233 8.66315 3.0233 8.0036 3.4301 7.5968Z" fill="#454545"/>
          </svg>

          {/* Dropdown box for "Dual-layer Matching & Automated Screening" */}
          {dualLayerMatchingOpen && (
            <div
              className="hidden lg:flex absolute flex-shrink-0"
              style={{
                top: 'calc(63.5px + 283px + 16px + 20px)',
                left: 'calc(96px + 470px)',
                width: '306px',
                height: '72px',
                padding: '12px 7px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '18px',
                border: '1px solid #FFF',
                background: 'linear-gradient(90deg, rgba(42, 23, 92, 0.50) 0%, rgba(4, 23, 72, 0.50) 100%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                zIndex: 30
              }}
            >
              <p
                className="font-poppins"
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}
              >
                Select which positions to publish & define ideal candidate criteria.
              </p>
            </div>
          )}

          {/* Central logo in circle */}
          <img
            src="/logo.png"
            alt="Purpose Logo"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 429px + 129.5px - 41px)',
              left: 'calc(96px + 550.5px + 129.5px - 37px)',
              width: '74px',
              height: '82px',
              aspectRatio: '37/41',
              objectFit: 'contain',
              zIndex: 20
            }}
          />

          {/* New horizontal line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="23"
            viewBox="0 0 430 23"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 575px)',
              left: 'calc(96px + 130px)',
              fill: '#120C2B'
            }}
          >
            <path d="M430 22.3331C430 22.7014 429.701 23 429.333 23H253.356C250.357 23 247.395 22.3252 244.692 21.0256L207.834 3.30822C205.13 2.00858 202.169 1.33377 199.169 1.33377H0.666884C0.298572 1.33377 0 1.0352 0 0.666887C0 0.298575 0.298576 0 0.666887 0H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H429.333C429.701 21.6662 430 21.9648 430 22.3331Z" fill="#120C2B"/>
          </svg>

          {/* Animated icon on new line */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 'calc(63.5px + 575px)',
              left: 'calc(96px + 130px)',
              width: '430px',
              height: '23px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-6.png"
              alt="Line icon 6"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 0.666887H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H430")',
                animation: 'moveAlongPath6Left 8s linear 40s infinite',
                animationDelay: '1.5s',
                zIndex: 10
              }}
            />
          </div>

          {/* Curved line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="461"
            height="55"
            viewBox="0 0 461 55"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 437px)',
              left: 'calc(96px + 130px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M1 1L129.407 52.5597C131.777 53.5111 134.306 54 136.86 54H461" stroke="url(#flowGradient1)" strokeWidth="1.5" strokeMiterlimit="10"/>
          </svg>

          {/* Animated icon on top-left line */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 'calc(63.5px + 437px)',
              left: 'calc(96px + 130px)',
              width: '461px',
              height: '55px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-1.png"
              alt="Line icon"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M1 1L129.407 52.5597C131.777 53.5111 134.306 54 136.86 54H461")',
                animation: 'moveAlongPath1Left 8s linear 40s infinite',
                animationDelay: '0s'
              }}
            />
          </div>

          {/* Horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="426"
            height="14"
            viewBox="0 0 426 14"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 526px)',
              left: 'calc(96px + 130px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M0.793915 14C0.355469 14 3.05176e-05 13.6445 3.05176e-05 13.2061C3.05176e-05 12.7676 0.355469 12.4122 0.793945 12.4122H221.341C223.533 12.4122 225.709 12.0519 227.784 11.3459L257.992 1.06626C260.067 0.360224 262.243 0 264.435 0H425.206C425.645 0 426 0.355444 426 0.793907C426 1.23237 425.645 1.58781 425.206 1.58781H266.37C264.178 1.58781 262.001 1.94804 259.927 2.65408L229.719 12.9337C227.644 13.6398 225.467 14 223.276 14H0.793915Z" fill="url(#flowGradient2)"/>
          </svg>

          {/* Animated icon on second line */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 'calc(63.5px + 526px)',
              left: 'calc(96px + 130px)',
              width: '426px',
              height: '14px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-2.png"
              alt="Line icon 2"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 12.4122H221.341C223.533 12.4122 225.709 12.0519 227.784 11.3459L257.992 1.06626C260.067 0.360224 262.243 0 264.435 0H426")',
                animation: 'moveAlongPath2Left 8s linear 40s infinite',
                animationDelay: '0.6s'
              }}
            />
          </div>

          {/* Second horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="352"
            height="14"
            viewBox="0 0 352 14"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 552px)',
              left: 'calc(96px + 204px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M0.793915 14C0.355438 14 0 13.6445 0 13.2061C0 12.7676 0.355438 12.4122 0.793915 12.4122H181.67C184.283 12.4122 186.87 11.9002 189.286 10.9052L212.106 1.50691C214.522 0.511948 217.11 0 219.723 0H351.206C351.645 0 352 0.355444 352 0.793907C352 1.23237 351.645 1.58781 351.206 1.58781H221.321C218.708 1.58781 216.121 2.09976 213.705 3.09473L190.885 12.4931C188.469 13.4881 185.881 14 183.268 14H0.793915Z" fill="url(#flowGradient3)"/>
          </svg>

          {/* Animated icon on third line */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 'calc(63.5px + 552px)',
              left: 'calc(96px + 204px)',
              width: '352px',
              height: '14px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-3.png"
              alt="Line icon 3"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 12.4122H181.67C184.283 12.4122 186.87 11.9002 189.286 10.9052L212.106 1.50691C214.522 0.511948 217.11 0 219.723 0H352")',
                animation: 'moveAlongPath3Left 8s linear 40s infinite',
                animationDelay: '1.2s'
              }}
            />
          </div>

          {/* Third horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="23"
            viewBox="0 0 430 23"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 294px)',
              right: 'calc(1552px - 96px - 1360px + 786px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient4" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M430 22.3331C430 22.7014 429.701 23 429.333 23H253.356C250.357 23 247.395 22.3252 244.692 21.0256L207.834 3.30822C205.13 2.00858 202.169 1.33377 199.169 1.33377H0.666884C0.298572 1.33377 0 1.0352 0 0.666887C0 0.298575 0.298576 0 0.666887 0H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H429.333C429.701 21.6662 430 21.9648 430 22.3331Z" fill="url(#flowGradient4)"/>
          </svg>

          {/* Animated icon on fourth line */}
          <div
            className="hidden lg:block absolute"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 294px)',
              right: 'calc(1552px - 96px - 1360px + 786px)',
              width: '430px',
              height: '23px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-4.png"
              alt="Line icon 4"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 0.666887H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H430")',
                animation: 'moveAlongPath4Left 8s linear 40s infinite',
                animationDelay: '1.8s'
              }}
            />
          </div>

          {/* Fourth horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="480"
            height="59"
            viewBox="0 0 480 59"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 216px)',
              right: 'calc(1552px - 96px - 1360px + 767px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient5" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M479.868 0.905625C479.868 1.37337 479.539 1.82244 479.071 1.82244H249.502C245.506 1.82244 241.602 3.01912 238.293 5.25821L204.596 28.06C201.287 30.2991 197.383 31.4957 193.387 31.4957H48.6802C44.6834 31.4957 40.7784 32.6932 37.4687 34.9336L2.51873 58.5925C2.15513 58.8386 1.67834 58.8387 1.31469 58.5926C0.685141 58.1666 0.685135 57.2394 1.31468 56.8135L36.3462 33.1091C39.6553 30.87 43.5591 29.6733 47.5545 29.6733H192.264C196.259 29.6733 200.163 28.4766 203.472 26.2375L237.17 3.43577C240.479 1.19668 244.383 0 248.378 0H479.071C479.539 0 479.868 0.449069 479.868 0.916817V0.905625Z" fill="url(#flowGradient5)"/>
          </svg>

          {/* Animated icon on fifth line */}
          <div
            className="hidden lg:block absolute"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 216px)',
              right: 'calc(1552px - 96px - 1360px + 767px)',
              width: '480px',
              height: '59px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-5.png"
              alt="Line icon 5"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M1.31468 56.8135L36.3462 33.1091C39.6553 30.87 43.5591 29.6733 47.5545 29.6733H192.264C196.259 29.6733 200.163 28.4766 203.472 26.2375L237.17 3.43577C240.479 1.19668 244.383 0 248.378 0H480")',
                animation: 'moveAlongPath5Left 8s linear 40s infinite',
                animationDelay: '0.4s'
              }}
            />
          </div>

          {/* Fifth horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="489"
            height="14"
            viewBox="0 0 489 14"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 401px)',
              right: 'calc(1552px - 96px - 1360px + 278px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient6" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M0.793945 14C0.355469 14 0 13.6445 0 13.2061C0 12.7676 0.355469 12.4122 0.793945 12.4122H254.972C256.896 12.4122 258.811 12.1343 260.656 11.5873L296.96 0.824871C298.805 0.277822 300.72 0 302.644 0H488.206C488.645 0 489 0.355444 489 0.793907C489 1.23237 488.645 1.58781 488.206 1.58781H304.865C302.941 1.58781 301.026 1.86564 299.181 2.41269L262.877 13.1751C261.032 13.7222 259.117 14 257.192 14H0.793945Z" fill="url(#flowGradient6)"/>
          </svg>

          {/* Animated icon on upper right branch to SmartRecruiters */}
          <div
            className="hidden lg:block absolute"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 401px)',
              right: 'calc(1552px - 96px - 1360px + 278px)',
              width: '489px',
              height: '14px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-3.png"
              alt="Line icon 7"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 12.4122H254.972C256.896 12.4122 258.811 12.1343 260.656 11.5873L296.96 0.824871C298.805 0.277822 300.72 0 302.644 0H489")',
                animation: 'moveAlongPath7 8s linear 40s infinite',
                animationDelay: '9.8s'
              }}
            />
          </div>

          {/* Sixth horizontal wavy line vector */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="430"
            height="23"
            viewBox="0 0 430 23"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 317px)',
              right: 'calc(1552px - 96px - 1360px + 265px)'
            }}
          >
            <defs>
              <linearGradient id="flowGradient7" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" stopColor="#120C2B"/>
                <stop offset="25%" stopColor="#120C2B"/>
                <stop offset="40%" stopColor="#5323E5" stopOpacity="0.6"/>
                <stop offset="45%" stopColor="#63C1ED" stopOpacity="0.7"/>
                <stop offset="50%" stopColor="#76F4DC" stopOpacity="0.6"/>
                <stop offset="60%" stopColor="#120C2B"/>
                <stop offset="100%" stopColor="#120C2B"/>
                <animate attributeName="x1" values="-100%;100%" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="0%;200%" dur="2.5s" begin="0.8s" repeatCount="indefinite"/>
              </linearGradient>
            </defs>
            <path d="M430 22.3331C430 22.7014 429.701 23 429.333 23H253.356C250.357 23 247.395 22.3252 244.692 21.0256L207.834 3.30822C205.13 2.00858 202.169 1.33377 199.169 1.33377H0.666884C0.298572 1.33377 0 1.0352 0 0.666887C0 0.298575 0.298576 0 0.666887 0H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H429.333C429.701 21.6662 430 21.9648 430 22.3331Z" fill="url(#flowGradient7)"/>
          </svg>

          {/* Animated head-4 on flowGradient7 line to Personio */}
          <div
            className="hidden lg:block absolute"
            style={{
              bottom: 'calc(1054px - 63.5px - 927px + 317px)',
              right: 'calc(1552px - 96px - 1360px + 265px)',
              width: '430px',
              height: '23px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/head-4.png"
              alt="Line icon 8"
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                offsetPath: 'path("M0 0.666887H200.314C203.313 0 206.275 0.674809 208.978 1.97446L245.836 19.6918C248.539 20.9914 251.501 21.6662 254.501 21.6662H430")',
                animation: 'moveAlongPath8 8s linear 40s infinite',
                animationDelay: '9.8s'
              }}
            />
          </div>

          {/* Gradient border box with SmartRecruiters logo */}
          <div
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 485px)',
              left: 'calc(96px + 1360px - 38px - 289px)',
              width: '289px',
              height: '53px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '18px',
              border: '2px solid transparent',
              background: `linear-gradient(#C0CDEE, #C0CDEE) padding-box,
                           linear-gradient(to bottom, #5323E5, #63C1ED, #76F4DC) border-box`,
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* SmartRecruiters logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="229" height="38" viewBox="0 0 229 38" fill="none" style={{ marginTop: '4px' }}>
              <path d="M88.7656 21.5035V0.759399H97.2436C101.389 0.759399 104.038 3.44736 104.038 6.89496C104.038 9.67058 102.417 11.4236 99.4876 12.3001L107.435 21.5035H101.981L94.4072 12.7676H93.2851V21.5035H88.7656ZM93.2851 9.14468H96.7134C98.3965 9.14468 99.5498 8.29737 99.5498 6.89496C99.5498 5.46334 98.3965 4.64528 96.7134 4.64528H93.2851V9.14468Z" fill="#37B971"/>
              <path d="M106.375 14.1991C106.375 9.875 109.835 6.57349 114.573 6.57349C118.656 6.57349 122.24 9.02773 122.24 13.7609C122.24 14.1115 122.24 14.5205 122.178 15.1341H110.521C110.77 17.0916 112.609 18.1726 114.666 18.1726C116.599 18.1726 118.001 17.3254 118.687 16.332L121.866 18.5525C120.432 20.51 117.908 21.8248 114.635 21.8248C109.991 21.8248 106.375 18.8154 106.375 14.1991ZM114.448 9.875C112.858 9.875 111.082 10.6347 110.677 12.4169H117.97C117.596 10.6931 116.038 9.875 114.448 9.875Z" fill="#37B971"/>
              <path d="M139.164 17.6175C137.824 20.1302 135.019 21.8248 131.777 21.8248C127.165 21.8248 123.518 18.6109 123.518 14.1991C123.518 9.78738 127.165 6.57349 131.777 6.57349C135.019 6.57349 137.824 8.26807 139.164 10.7808L135.455 12.6506C134.832 11.3067 133.492 10.3133 131.777 10.3133C129.533 10.3133 127.819 11.9494 127.819 14.1991C127.819 16.4489 129.533 18.085 131.777 18.085C133.492 18.085 134.832 17.0916 135.455 15.7476L139.164 17.6175Z" fill="#37B971"/>
              <path d="M141.035 21.5033V6.89479H145.304V9.23213C145.835 7.80052 147.424 6.71948 149.17 6.71948C149.606 6.71948 150.073 6.74869 150.603 6.89479V10.956C149.949 10.7514 149.356 10.6346 148.67 10.6346C146.645 10.6346 145.304 12.1247 145.304 14.5204V21.5033H141.035Z" fill="#37B971"/>
              <path d="M166.779 6.89502V21.5036H162.509V20.3349C161.511 21.299 159.984 21.8249 158.675 21.8249C154.686 21.8249 152.38 19.2538 152.38 15.368V6.89502H156.649V14.696C156.649 16.7704 157.553 18.1728 159.579 18.1728C160.67 18.1728 161.823 17.53 162.509 16.5074V6.89502H166.779Z" fill="#37B971"/>
              <path d="M174.571 2.54188C174.571 3.94431 173.355 5.08375 171.828 5.08375C170.363 5.08375 169.116 3.94431 169.116 2.54188C169.116 1.13946 170.363 0 171.828 0C173.355 0 174.571 1.13946 174.571 2.54188ZM169.709 21.5037V6.89523H173.979V21.5037H169.709Z" fill="#37B971"/>
              <path d="M188.939 20.8315C188.191 21.2113 186.508 21.6788 184.919 21.6788C181.428 21.6788 178.872 19.955 178.872 16.3905V10.5471H175.724V6.89502H178.872V2.51245H183.142V6.89502H187.849V10.5471H183.142V15.6017C183.142 17.3839 183.953 18.0559 185.511 18.0559C186.353 18.0559 187.194 17.793 187.661 17.5592L188.939 20.8315Z" fill="#37B971"/>
              <path d="M188.347 14.1991C188.347 9.875 191.807 6.57349 196.544 6.57349C200.627 6.57349 204.212 9.02773 204.212 13.7609C204.212 14.1115 204.212 14.5205 204.149 15.1341H192.492C192.742 17.0916 194.581 18.1726 196.638 18.1726C198.57 18.1726 199.973 17.3254 200.658 16.332L203.837 18.5525C202.404 20.51 199.879 21.8248 196.607 21.8248C191.963 21.8248 188.347 18.8154 188.347 14.1991ZM196.42 9.875C194.83 9.875 193.054 10.6347 192.648 12.4169H199.942C199.568 10.6931 198.009 9.875 196.42 9.875Z" fill="#37B971"/>
              <path d="M206.331 21.5033V6.89479H210.601V9.23213C211.131 7.80052 212.72 6.71948 214.466 6.71948C214.902 6.71948 215.37 6.74869 215.9 6.89479V10.956C215.245 10.7514 214.653 10.6346 213.967 10.6346C211.941 10.6346 210.601 12.1247 210.601 14.5204V21.5033H206.331Z" fill="#37B971"/>
              <path d="M228.865 17.0627C228.865 19.8968 226.278 21.8251 222.943 21.8251C220.201 21.8251 217.863 20.9194 216.522 19.0203L219.453 16.6829C220.138 17.7639 221.447 18.3775 222.943 18.3775C223.816 18.3775 224.657 18.0561 224.657 17.3257C224.657 16.7121 224.284 16.3615 222.569 15.9233L221.416 15.6603C218.549 14.9591 217.053 13.2353 217.115 10.9856C217.177 8.29764 219.671 6.57385 222.974 6.57385C225.343 6.57385 227.182 7.42112 228.367 9.02805L225.561 11.1609C224.844 10.3136 223.941 9.87536 222.912 9.87536C222.164 9.87536 221.354 10.1967 221.354 10.8687C221.354 11.307 221.572 11.8037 222.881 12.1251L224.346 12.5341C227.151 13.2353 228.865 14.5209 228.865 17.0627Z" fill="#37B971"/>
              <path d="M0 18.1438L3.4908 15.4266C4.58166 16.9751 6.45174 17.8808 8.25947 17.8808C10.036 17.8808 11.2516 17.0628 11.2516 15.8648C11.2516 14.6962 10.3166 13.8781 8.13481 13.1769L6.26473 12.5633C2.7116 11.3946 0.810365 9.46633 0.810365 6.63227C0.810365 2.7172 3.98948 0.409058 8.29063 0.409058C11.0022 0.409058 13.371 1.28557 15.3034 3.27233L12.2801 6.16482C11.2516 4.96693 9.84903 4.38258 8.35298 4.38258C6.82578 4.38258 5.39204 4.99613 5.39204 6.22323C5.39204 7.47958 6.45174 8.03472 8.78933 8.82358L10.5659 9.43713C13.8074 10.5474 15.8644 12.4757 15.8333 15.6019C15.8021 19.3125 12.6542 21.8544 8.10365 21.8544C4.58166 21.8544 1.58956 20.4227 0 18.1438Z" fill="#11314A"/>
              <path d="M37.4014 21.5037V13.7904C37.4014 11.7745 36.6845 10.2552 34.721 10.2552C33.4431 10.2552 32.321 10.9272 31.7288 11.979C31.8223 12.388 31.8535 12.6802 31.8535 13.0892V21.5037H27.5835V13.7904C27.5835 11.7745 26.8666 10.2552 24.9031 10.2552C23.6875 10.2552 22.5655 10.8979 22.0356 11.8037V21.5037H17.7656V6.89523H22.0356V8.03467C22.846 7.15816 24.4044 6.57385 25.8381 6.57385C27.677 6.57385 29.1731 7.30426 30.2328 8.50216C31.199 7.45033 32.9755 6.57385 35.3131 6.57385C39.7078 6.57385 41.6714 9.46633 41.6714 13.0892V21.5037H37.4014Z" fill="#11314A"/>
              <path d="M43.261 14.1995C43.261 10.0507 46.44 6.57385 50.5853 6.57385C52.7359 6.57385 54.3878 7.59644 55.0736 8.53136V6.89523H59.3437V21.5037H55.0736V19.8676C54.3878 20.8025 52.7359 21.8251 50.5853 21.8251C46.44 21.8251 43.261 18.3483 43.261 14.1995ZM55.4162 14.1995C55.4162 11.9205 53.8269 10.2259 51.4892 10.2259C49.1515 10.2259 47.5622 11.9205 47.5622 14.1995C47.5622 16.4784 49.1515 18.173 51.4892 18.173C53.8269 18.173 55.4162 16.4784 55.4162 14.1995Z" fill="#11314A"/>
              <path d="M62.0237 21.5035V6.89504H66.2938V9.23238C66.8236 7.80076 68.4133 6.71973 70.1586 6.71973C70.595 6.71973 71.0625 6.74893 71.5923 6.89504V10.9562C70.9377 10.7517 70.3457 10.6348 69.6599 10.6348C67.6338 10.6348 66.2938 12.1249 66.2938 14.5207V21.5035H62.0237Z" fill="#11314A"/>
              <path d="M86.2413 20.8318C85.4933 21.2116 83.8103 21.6791 82.2206 21.6791C78.73 21.6791 76.174 19.9553 76.174 16.3908V10.6934H73.0261V6.89525H76.174V2.5127H80.4441V6.89525H85.1507V10.6934H80.4441V15.6019C80.4441 17.3842 81.2544 18.0562 82.813 18.0562C83.6543 18.0562 84.496 17.7932 84.9636 17.5595L86.2413 20.8318Z" fill="#11314A"/>
            </svg>
          </div>

          {/* New styled box with Personio logo - 38px from right, 295px from bottom of gradient box */}
          <div
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 927px - 295px - 53px)',
              left: 'calc(96px + 1360px - 38px - 289px)',
              width: '289px',
              height: '53px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '18px',
              border: '2px solid transparent',
              background: `linear-gradient(#C0CDEE, #C0CDEE) padding-box,
                           linear-gradient(to bottom, #5323E5, #63C1ED, #76F4DC) border-box`,
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#11314A', fontFamily: 'DM Sans, sans-serif' }}>Personio</span>
          </div>

          {/* "Automated Transfer to ATS" text - same level, 67px from right of box */}
          <p
            className="hidden lg:block absolute w-[232px] flex-shrink-0 font-poppins text-[16px] font-bold leading-normal text-[#454545]"
            style={{
              top: 'calc(63.5px + 283px)',
              right: 'calc(96px + 67px)'
            }}
          >
            Automated Transfer to ATS
          </p>

          {/* Arrow next to "Automated Transfer to ATS" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0 cursor-pointer hover:opacity-70 transition-all duration-300"
            style={{
              top: 'calc(63.5px + 283px)',
              right: 'calc(96px + 67px - 25px - 4px)',
              transform: filteredCandidatesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            onClick={() => setFilteredCandidatesOpen(!filteredCandidatesOpen)}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M3.4301 7.5968C3.83689 7.19001 4.49644 7.19001 4.90324 7.5968L12.5 15.1936L20.0968 7.5968C20.5036 7.19001 21.1631 7.19001 21.5699 7.5968C21.9767 8.0036 21.9767 8.66315 21.5699 9.06994L13.2366 17.4033C12.8298 17.8101 12.1702 17.8101 11.7634 17.4033L3.4301 9.06994C3.0233 8.66315 3.0233 8.0036 3.4301 7.5968Z" fill="#454545"/>
          </svg>

          {/* Dropdown box for "Automated Transfer to ATS" */}
          {filteredCandidatesOpen && (
            <div
              className="hidden lg:flex absolute flex-shrink-0"
              style={{
                top: 'calc(63.5px + 283px + 16px + 20px)',
                right: 'calc(96px + 67px)',
                width: '306px',
                height: '72px',
                padding: '12px 7px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '18px',
                border: '1px solid #FFF',
                background: 'linear-gradient(90deg, rgba(42, 23, 92, 0.50) 0%, rgba(4, 23, 72, 0.50) 100%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                zIndex: 30
              }}
            >
              <p
                className="font-poppins"
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}
              >
                Purpose delivers pre-screened candidates directly to your ATS.
              </p>
            </div>
          )}

          {/* Heading inside gradient box */}
          <h2
            className="hidden lg:block absolute w-[688px] h-[140px] flex-shrink-0 text-center font-dm-sans text-[52px] font-bold leading-[120%] text-[#454545]"
            style={{
              top: 'calc(63.5px + 114px)',
              left: 'calc(96px + 336px)'
            }}
          >
            Pre-Screened{' '}
            <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              talent
            </span>,<br />
            <span className="whitespace-nowrap">
              seamlessly{' '}
              <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                integrated
              </span>.
            </span>
          </h2>

          {/* Circle inside gradient box */}
          <div
            className="hidden lg:block absolute w-[259px] h-[259px] flex-shrink-0 rounded-full"
            style={{
              top: 'calc(63.5px + 429px)',
              left: 'calc(96px + 550.5px)',
              border: '3px solid transparent',
              background: `linear-gradient(#C0CDEE, #C0CDEE) padding-box,
                           linear-gradient(to bottom, #5323E5, #63C1ED, #76F4DC) border-box`,
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
            }}
          />

          {/* Text above circle */}
          <p
            className="hidden lg:block absolute w-[233px] h-[43px] flex-shrink-0 text-[#454545] leading-[120%]"
            style={{
              top: 'calc(63.5px + 807px)',
              left: 'calc(96px + 563.5px)',
              fontFamily: 'Helvetica',
              fontSize: '16px',
              fontWeight: 700
            }}
          >
            Official Partner of
          </p>

          {/* Logo SVG at bottom */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="233"
            height="43"
            viewBox="0 0 233 43"
            fill="none"
            className="hidden lg:block absolute flex-shrink-0"
            style={{
              top: 'calc(63.5px + 835px)',
              left: 'calc(96px + 563.5px)'
            }}
          >
            <path d="M90.3162 22.0155V0.777466H98.9423C103.16 0.777466 105.855 3.52943 105.855 7.05911C105.855 9.90082 104.206 11.6956 101.225 12.593L109.312 22.0155H103.762L96.0564 13.0715H94.9146V22.0155H90.3162ZM94.9146 9.3624H98.4028C100.115 9.3624 101.289 8.49491 101.289 7.05911C101.289 5.59341 100.115 4.75587 98.4028 4.75587H94.9146V9.3624Z" fill="#37B971"/>
            <path d="M108.234 14.5372C108.234 10.1101 111.754 6.72998 116.574 6.72998C120.728 6.72998 124.375 9.24265 124.375 14.0885C124.375 14.4474 124.375 14.8662 124.312 15.4944H112.452C112.705 17.4985 114.576 18.6053 116.669 18.6053C118.635 18.6053 120.063 17.7379 120.76 16.7208L123.995 18.9942C122.536 20.9983 119.967 22.3444 116.638 22.3444C111.912 22.3444 108.234 19.2634 108.234 14.5372ZM116.447 10.1101C114.83 10.1101 113.022 10.8878 112.61 12.7125H120.031C119.65 10.9477 118.065 10.1101 116.447 10.1101Z" fill="#37B971"/>
            <path d="M141.595 18.037C140.231 20.6095 137.377 22.3444 134.079 22.3444C129.386 22.3444 125.676 19.054 125.676 14.5372C125.676 10.0204 129.386 6.72998 134.079 6.72998C137.377 6.72998 140.231 8.46491 141.595 11.0374L137.821 12.9518C137.187 11.5758 135.823 10.5588 134.079 10.5588C131.796 10.5588 130.052 12.2339 130.052 14.5372C130.052 16.8405 131.796 18.5156 134.079 18.5156C135.823 18.5156 137.187 17.4985 137.821 16.1226L141.595 18.037Z" fill="#37B971"/>
            <path d="M143.498 22.0153V7.059H147.842V9.45199C148.382 7.98629 149.999 6.87952 151.775 6.87952C152.219 6.87952 152.694 6.90942 153.233 7.059V11.2169C152.568 11.0075 151.965 10.8878 151.267 10.8878C149.206 10.8878 147.842 12.4134 147.842 14.8662V22.0153H143.498Z" fill="#37B971"/>
            <path d="M169.692 7.0592V22.0156H165.348V20.819C164.333 21.8061 162.779 22.3446 161.447 22.3446C157.388 22.3446 155.041 19.7123 155.041 15.7339V7.0592H159.386V15.0459C159.386 17.1697 160.305 18.6055 162.366 18.6055C163.477 18.6055 164.65 17.9474 165.348 16.9005V7.0592H169.692Z" fill="#37B971"/>
            <path d="M177.62 2.6024C177.62 4.03822 176.384 5.20479 174.829 5.20479C173.339 5.20479 172.07 4.03822 172.07 2.6024C172.07 1.16659 173.339 0 174.829 0C176.384 0 177.62 1.16659 177.62 2.6024ZM172.673 22.0157V7.05941H177.018V22.0157H172.673Z" fill="#37B971"/>
            <path d="M192.239 21.3275C191.478 21.7164 189.766 22.195 188.149 22.195C184.597 22.195 181.997 20.4301 181.997 16.7808V10.7983H178.794V7.05918H181.997V2.57227H186.341V7.05918H191.13V10.7983H186.341V15.9732C186.341 17.7978 187.166 18.4858 188.751 18.4858C189.608 18.4858 190.464 18.2166 190.939 17.9773L192.239 21.3275Z" fill="#37B971"/>
            <path d="M191.637 14.5372C191.637 10.1101 195.157 6.72998 199.977 6.72998C204.132 6.72998 207.779 9.24265 207.779 14.0885C207.779 14.4474 207.779 14.8662 207.715 15.4944H195.855C196.108 17.4985 197.98 18.6053 200.073 18.6053C202.039 18.6053 203.466 17.7379 204.163 16.7208L207.398 18.9942C205.939 20.9983 203.371 22.3444 200.041 22.3444C195.316 22.3444 191.637 19.2634 191.637 14.5372ZM199.851 10.1101C198.233 10.1101 196.426 10.8878 196.013 12.7125H203.434C203.054 10.9477 201.468 10.1101 199.851 10.1101Z" fill="#37B971"/>
            <path d="M209.935 22.0153V7.059H214.28V9.45199C214.819 7.98629 216.436 6.87952 218.212 6.87952C218.656 6.87952 219.131 6.90942 219.671 7.059V11.2169C219.005 11.0075 218.402 10.8878 217.705 10.8878C215.643 10.8878 214.28 12.4134 214.28 14.8662V22.0153H209.935Z" fill="#37B971"/>
            <path d="M232.863 17.469C232.863 20.3705 230.231 22.3447 226.837 22.3447C224.047 22.3447 221.668 21.4174 220.304 19.4731L223.286 17.0801C223.983 18.1869 225.315 18.8151 226.837 18.8151C227.725 18.8151 228.581 18.486 228.581 17.7382C228.581 17.11 228.201 16.7511 226.457 16.3024L225.284 16.0332C222.366 15.3153 220.844 13.5504 220.907 11.2471C220.971 8.49518 223.508 6.73035 226.869 6.73035C229.279 6.73035 231.15 7.59779 232.355 9.24298L229.501 11.4266C228.772 10.5591 227.852 10.1105 226.806 10.1105C226.045 10.1105 225.22 10.4395 225.22 11.1275C225.22 11.5762 225.442 12.0847 226.774 12.4138L228.264 12.8325C231.119 13.5504 232.863 14.8666 232.863 17.469Z" fill="#37B971"/>
            <path d="M0 18.5757L3.55177 15.7938C4.66169 17.3792 6.56444 18.3065 8.40374 18.3065C10.2114 18.3065 11.4481 17.4689 11.4481 16.2425C11.4481 15.046 10.4968 14.2085 8.2769 13.4905L6.37415 12.8624C2.75896 11.6658 0.82452 9.69163 0.82452 6.79008C0.82452 2.7818 4.05917 0.418701 8.43544 0.418701C11.1944 0.418701 13.6045 1.31608 15.5707 3.35014L12.4946 6.31151C11.4481 5.08509 10.0211 4.48684 8.49889 4.48684C6.945 4.48684 5.48622 5.11499 5.48622 6.37131C5.48622 7.65757 6.56444 8.22592 8.94285 9.03357L10.7505 9.66173C14.0485 10.7984 16.1415 12.7726 16.1098 15.9733C16.0781 19.7722 12.8752 22.3746 8.2452 22.3746C4.66169 22.3746 1.61732 20.9089 0 18.5757Z" fill="#11314A"/>
            <path d="M38.0546 22.0157V14.1187C38.0546 12.0548 37.3252 10.4993 35.3274 10.4993C34.0272 10.4993 32.8855 11.1873 32.283 12.2642C32.3781 12.6829 32.4099 12.9821 32.4099 13.4008V22.0157H28.0653V14.1187C28.0653 12.0548 27.3359 10.4993 25.338 10.4993C24.1012 10.4993 22.9596 11.1574 22.4205 12.0847V22.0157H18.0759V7.05938H22.4205V8.22595C23.245 7.32856 24.8306 6.73035 26.2894 6.73035C28.1604 6.73035 29.6826 7.47815 30.7608 8.70456C31.7439 7.62769 33.5515 6.73035 35.9299 6.73035C40.4014 6.73035 42.3992 9.69169 42.3992 13.4008V22.0157H38.0546Z" fill="#11314A"/>
            <path d="M44.0167 14.5375C44.0167 10.2899 47.2513 6.73035 51.4689 6.73035C53.6571 6.73035 55.3379 7.77728 56.0357 8.73447V7.05938H60.3803V22.0157H56.0357V20.3406C55.3379 21.2978 53.6571 22.3447 51.4689 22.3447C47.2513 22.3447 44.0167 18.7851 44.0167 14.5375ZM56.3843 14.5375C56.3843 12.2043 54.7672 10.4694 52.3887 10.4694C50.0102 10.4694 48.3931 12.2043 48.3931 14.5375C48.3931 16.8707 50.0102 18.6056 52.3887 18.6056C54.7672 18.6056 56.3843 16.8707 56.3843 14.5375Z" fill="#11314A"/>
            <path d="M63.1071 22.0156V7.05925H67.4518V9.45224C67.9908 7.98653 69.6083 6.87976 71.3841 6.87976C71.8282 6.87976 72.3039 6.90966 72.8429 7.05925V11.2171C72.1768 11.0077 71.5745 10.888 70.8767 10.888C68.8152 10.888 67.4518 12.4136 67.4518 14.8665V22.0156H63.1071Z" fill="#11314A"/>
            <path d="M87.7477 21.3278C86.9867 21.7166 85.2742 22.1952 83.6567 22.1952C80.1051 22.1952 77.5046 20.4304 77.5046 16.781V10.948H74.3017V7.05941H77.5046V2.57251H81.8493V7.05941H86.638V10.948H81.8493V15.9734C81.8493 17.7981 82.6736 18.4861 84.2595 18.4861C85.1155 18.4861 85.9719 18.2168 86.4476 17.9775L87.7477 21.3278Z" fill="#11314A"/>
            <path d="M0.176331 38.9523L4.94155 28.6578H6.50944L11.2747 38.9523H9.39932L8.1542 36.2554H3.26603L2.0363 38.9523H0.176331ZM5.71011 30.9487L3.95775 34.7475H7.46251L5.71011 30.9487ZM12.0965 38.9523V31.7026H13.7874V32.4711C14.3101 31.8621 15.0633 31.5576 16.0471 31.5576C16.9591 31.5576 17.6867 31.8379 18.2298 32.3986C18.7832 32.9496 19.0599 33.689 19.0599 34.617V38.9523H17.369V34.8779C17.369 34.2883 17.2204 33.8292 16.9232 33.5005C16.6363 33.1719 16.2213 33.0076 15.6782 33.0076C14.7763 33.0076 14.1461 33.3894 13.7874 34.153V38.9523H12.0965ZM27.316 39.1263C26.445 39.1263 25.6559 38.9571 24.9488 38.6188C24.252 38.2805 23.7396 37.831 23.4116 37.2703L24.8258 36.2119C25.4304 37.0915 26.2759 37.5313 27.3621 37.5313C27.8848 37.5313 28.3101 37.4153 28.638 37.1833C28.9659 36.9514 29.1299 36.6421 29.1299 36.2554C29.1299 35.5691 28.6124 35.0471 27.5774 34.6895L26.3783 34.2835C25.5073 33.9838 24.8617 33.602 24.4415 33.138C24.0214 32.6644 23.8113 32.0796 23.8113 31.3836C23.8113 30.504 24.1392 29.8032 24.7951 29.2812C25.4612 28.7496 26.3117 28.4838 27.3468 28.4838C28.7302 28.4838 29.8319 28.9526 30.6517 29.8902L29.4066 31.0357C28.8532 30.3977 28.1666 30.0787 27.3468 30.0787C26.8651 30.0787 26.4552 30.185 26.1171 30.3977C25.7891 30.6103 25.6252 30.9003 25.6252 31.2676C25.6252 31.6253 25.7481 31.9104 25.9941 32.1231C26.2503 32.3357 26.6807 32.5436 27.2853 32.7466L28.3921 33.138C30.1034 33.747 30.9591 34.7523 30.9591 36.1539C30.9591 37.0432 30.6209 37.7633 29.9446 38.3143C29.2682 38.8556 28.3921 39.1263 27.316 39.1263ZM31.0187 38.9523L35.7839 28.6578H37.3518L42.117 38.9523H40.2417L38.9966 36.2554H34.1084L32.8786 38.9523H31.0187ZM36.5525 30.9487L34.8001 34.7475H38.3048L36.5525 30.9487ZM49.3335 29.6292C50.0406 30.2672 50.3943 31.0646 50.3943 32.0216C50.3943 32.9785 50.0406 33.7808 49.3335 34.4285C48.6265 35.0665 47.7194 35.3854 46.6127 35.3854H44.9373V38.9523H43.1388V28.6578H46.6127C47.7194 28.6578 48.6265 28.9816 49.3335 29.6292ZM48.0731 33.2975C48.4421 32.9592 48.6265 32.5339 48.6265 32.0216C48.6265 31.5093 48.4421 31.0888 48.0731 30.7601C47.7144 30.4218 47.2226 30.2527 46.5975 30.2527H44.9373V33.7905H46.5975C47.2226 33.7905 47.7144 33.6262 48.0731 33.2975ZM57.8494 39.0973C56.6912 39.0973 55.7229 38.7396 54.9441 38.0243C54.1755 37.2994 53.7913 36.4004 53.7913 35.3275C53.7913 34.2545 54.1755 33.3604 54.9441 32.6451C55.7229 31.9201 56.6912 31.5576 57.8494 31.5576C58.6383 31.5576 59.3454 31.7364 59.9705 32.0941C60.6058 32.4518 61.0929 32.9399 61.431 33.5585L59.9553 34.3125C59.7603 33.9259 59.4787 33.6165 59.1098 33.3845C58.7409 33.1525 58.3205 33.0366 57.8494 33.0366C57.1728 33.0366 56.6144 33.2589 56.1737 33.7035C55.733 34.1385 55.5127 34.6798 55.5127 35.3275C55.5127 35.9751 55.733 36.5212 56.1737 36.9659C56.6144 37.4009 57.1728 37.6183 57.8494 37.6183C58.3205 37.6183 58.7409 37.5023 59.1098 37.2703C59.4787 37.0384 59.7603 36.7291 59.9553 36.3424L61.431 37.0963C61.0929 37.715 60.6058 38.2032 59.9705 38.5608C59.3454 38.9184 58.6383 39.0973 57.8494 39.0973ZM68.9249 38.0098C68.1563 38.7348 67.2032 39.0973 66.0656 39.0973C64.9281 39.0973 63.9699 38.7348 63.1911 38.0098C62.4225 37.2752 62.0384 36.3811 62.0384 35.3275C62.0384 34.2738 62.4225 33.3845 63.1911 32.6596C63.9699 31.9249 64.9281 31.5576 66.0656 31.5576C67.2032 31.5576 68.1563 31.9249 68.9249 32.6596C69.7037 33.3845 70.0933 34.2738 70.0933 35.3275C70.0933 36.3811 69.7037 37.2752 68.9249 38.0098ZM66.0656 37.6183C66.7317 37.6183 67.28 37.4009 67.7106 36.9659C68.1512 36.5212 68.3716 35.9751 68.3716 35.3275C68.3716 34.6798 68.1512 34.1385 67.7106 33.7035C67.28 33.2589 66.7317 33.0366 66.0656 33.0366C65.3894 33.0366 64.831 33.2589 64.3903 33.7035C63.9598 34.1385 63.7445 34.6798 63.7445 35.3275C63.7445 35.9751 63.9598 36.5212 64.3903 36.9659C64.831 37.4009 65.3894 37.6183 66.0656 37.6183ZM81.2013 38.9523V34.907C81.2013 34.3173 81.073 33.8582 80.8168 33.5295C80.5606 33.1912 80.1765 33.0221 79.6641 33.0221C79.2745 33.0221 78.9313 33.1284 78.6341 33.341C78.337 33.544 78.1116 33.8195 77.9579 34.1675C77.9883 34.3222 78.0039 34.4768 78.0039 34.6315V38.9523H76.313V34.907C76.313 34.3173 76.1796 33.8582 75.9133 33.5295C75.657 33.1912 75.2729 33.0221 74.7605 33.0221C74.3916 33.0221 74.0585 33.1139 73.7614 33.2975C73.4642 33.4812 73.2439 33.7325 73.1004 34.0515V38.9523H71.4094V31.7026H73.1004V32.3841C73.5613 31.8331 74.243 31.5576 75.1446 31.5576C76.0876 31.5576 76.8254 31.9152 77.3581 32.6306C77.9115 31.9152 78.757 31.5576 79.8945 31.5576C80.8476 31.5576 81.5855 31.8428 82.108 32.4131C82.6306 32.9737 82.8919 33.7132 82.8919 34.6315V38.9523H81.2013ZM84.6706 41.765V31.7026H86.3615V32.3696C86.9149 31.8283 87.6629 31.5576 88.6054 31.5576C89.7227 31.5576 90.64 31.9249 91.3571 32.6596C92.0848 33.3942 92.4487 34.2835 92.4487 35.3275C92.4487 36.3714 92.0848 37.2607 91.3571 37.9953C90.64 38.7299 89.7227 39.0973 88.6054 39.0973C87.6629 39.0973 86.9149 38.8218 86.3615 38.2708V41.765H84.6706ZM88.421 37.6473C89.0875 37.6473 89.6354 37.425 90.0659 36.9804C90.4964 36.526 90.7117 35.9751 90.7117 35.3275C90.7117 34.6798 90.4964 34.1336 90.0659 33.689C89.6354 33.2347 89.0875 33.0076 88.421 33.0076C87.54 33.0076 86.8533 33.341 86.3615 34.008V36.6324C86.8432 37.309 87.5295 37.6473 88.421 37.6473ZM97.093 39.0973C95.9757 39.0973 95.0589 38.7299 94.3414 37.9953C93.6242 37.2607 93.2654 36.3714 93.2654 35.3275C93.2654 34.2835 93.6242 33.3942 94.3414 32.6596C95.0589 31.9249 95.9757 31.5576 97.093 31.5576C98.0356 31.5576 98.784 31.8283 99.3374 32.3696V31.7026H101.028V38.9523H99.3374V38.2708C98.784 38.8218 98.0356 39.0973 97.093 39.0973ZM97.2927 37.6473C98.174 37.6473 98.8557 37.309 99.3374 36.6324V34.008C98.8452 33.341 98.1639 33.0076 97.2927 33.0076C96.6266 33.0076 96.0783 33.2347 95.6482 33.689C95.2177 34.1336 95.0024 34.6798 95.0024 35.3275C95.0024 35.9751 95.2177 36.526 95.6482 36.9804C96.0783 37.425 96.6266 37.6473 97.2927 37.6473ZM102.936 38.9523V31.7026H104.627V32.4711C105.15 31.8621 105.903 31.5576 106.887 31.5576C107.799 31.5576 108.527 31.8379 109.07 32.3986C109.623 32.9496 109.9 33.689 109.9 34.617V38.9523H108.209V34.8779C108.209 34.2883 108.06 33.8292 107.763 33.5005C107.476 33.1719 107.061 33.0076 106.518 33.0076C105.616 33.0076 104.986 33.3894 104.627 34.153V38.9523H102.936ZM114.051 41.765H112.191L113.728 38.5608L110.423 31.7026H112.283L114.635 36.8354L117.002 31.7026H118.878L114.051 41.765Z" fill="#11314A"/>
          </svg>

        </div>
      </section>

      {/* Separator line */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5323E5]/30 to-transparent" style={{ zIndex: 10 }} />

      {/* About Section */}
      <section id="about" className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4 sm:px-8 py-20">
        <div className="max-w-[1552px] w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dm-sans font-bold text-center text-[#454545] mb-8">
            <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">About</span> Purpose
          </h2>
          <p className="text-lg sm:text-xl text-center text-[#454545CC] font-poppins">
            Revolutionizing recruitment with next-generation technology.
          </p>
          {/* Add more content here */}
        </div>
      </section>
    </div>
  )
}
