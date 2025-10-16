// https://www.figma.com/design/CgxmFLReJXu8togOjU9yWZ/Purpose-Design?node-id=613-447&m=dev

import Header from '@/components/shared/Header'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - First Screen */}
      <div className="relative w-full min-h-screen lg:h-[1054px] flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 sm:py-24 lg:py-0">
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

      {/* Companies Section */}
      <section id="companies" className="min-h-screen bg-gradient-to-b from-white to-[#F5F5F7] flex items-center justify-center px-4 sm:px-8 py-20">
        <div className="max-w-[1552px] w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dm-sans font-bold text-center text-[#454545] mb-8">
            For <span className="bg-radial-1 bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Companies</span>
          </h2>
          <p className="text-lg sm:text-xl text-center text-[#454545CC] font-poppins">
            Intelligent pre-screening that saves time and finds the perfect fit.
          </p>
          {/* Add more content here */}
        </div>
      </section>

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
