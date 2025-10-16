// https://www.figma.com/design/CgxmFLReJXu8togOjU9yWZ/Purpose-Design?node-id=613-447&m=dev

import Header from '@/components/shared/Header'

export default function Home() {
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
