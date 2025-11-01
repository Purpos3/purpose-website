export default function CTAPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Top left decorative circle - left one */}
      <div
        className="absolute rounded-full opacity-0 animate-fade-in-slow-1"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-280px',
          left: '-450px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top left decorative circle - right one */}
      <div
        className="absolute rounded-full opacity-0 animate-fade-in-slow"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-300px',
          left: '0px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top right decorative circle - left one */}
      <div
        className="absolute rounded-full opacity-0 animate-fade-in-slow-2"
        style={{
          width: '668.371px',
          height: '668.371px',
          top: '-400px',
          right: '-200px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Top right decorative circle - right one (larger) */}
      <div
        className="absolute rounded-full opacity-0 animate-fade-in-slow-3"
        style={{
          width: '783.367px',
          height: '783.367px',
          top: '-80px',
          right: '-580px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      {/* Bottom left decorative circle */}
      <div
        className="absolute rounded-full opacity-0 animate-fade-in-slow-4"
        style={{
          width: '668.371px',
          height: '668.371px',
          bottom: '-400px',
          left: '-350px',
          transform: 'rotate(134.213deg)',
          flexShrink: 0,
          background: 'linear-gradient(90deg, rgba(118, 244, 220, 0.60) 0%, rgba(83, 124, 255, 0.60) 51%, rgba(83, 35, 229, 0.60) 100%)',
          filter: 'blur(2px)',
          zIndex: -10,
          willChange: 'transform'
        }}
      />

      <h1
        className="font-dm-sans absolute"
        style={{
          top: '291px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1281px',
          height: '206px',
          flexShrink: 0,
          textAlign: 'center',
          fontSize: '96px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '120%'
        }}
      >
        <span style={{ color: '#454545' }}>Experience </span>
        <span
          style={{
            background: 'var(--radial-1, radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          effortless recruiting
        </span>
        .
      </h1>

      <div
        className="absolute transition-all duration-300 cursor-pointer hover:scale-[1.02] flex items-center gap-3"
        style={{
          top: '550px',
          left: 'calc(50% - 130px - 127.5px)',
          width: '255px',
          height: '53.115px',
          flexShrink: 0,
          borderRadius: '18px',
          border: '1px solid var(--glass-stroke, #FFF)',
          background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
          boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
          paddingLeft: '20px'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.8295 22.1705C8.26884 22.6098 8.98116 22.6098 9.4205 22.1705L20.25 11.341V19.875C20.25 20.4963 20.7537 21 21.375 21C21.9963 21 22.5 20.4963 22.5 19.875V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H10.125C9.50368 7.5 9 8.00368 9 8.625C9 9.24632 9.50368 9.75 10.125 9.75H18.659L7.8295 20.5795C7.39017 21.0188 7.39017 21.7312 7.8295 22.1705Z" fill="white"/>
        </svg>
        <span
          className="font-poppins"
          style={{
            flexShrink: 0,
            color: '#FFF',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal'
          }}
        >
          Get Demo
        </span>
      </div>

      <div
        className="absolute transition-all duration-300 cursor-pointer hover:scale-[1.02] flex items-center gap-3"
        style={{
          top: '550px',
          left: 'calc(50% - 130px - 127.5px + 255px + 31px)',
          width: '255px',
          height: '53.115px',
          flexShrink: 0,
          borderRadius: '18px',
          border: '1px solid var(--glass-stroke, #FFF)',
          background: 'linear-gradient(90deg, #213D83 0%, #4F647D 100%)',
          boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.25)',
          paddingLeft: '20px'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" style={{ flexShrink: 0 }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.8295 22.1705C8.26884 22.6098 8.98116 22.6098 9.4205 22.1705L20.25 11.341V19.875C20.25 20.4963 20.7537 21 21.375 21C21.9963 21 22.5 20.4963 22.5 19.875V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H10.125C9.50368 7.5 9 8.00368 9 8.625C9 9.24632 9.50368 9.75 10.125 9.75H18.659L7.8295 20.5795C7.39017 21.0188 7.39017 21.7312 7.8295 22.1705Z" fill="white"/>
        </svg>
        <span
          className="font-poppins"
          style={{
            flexShrink: 0,
            color: '#FFF',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal'
          }}
        >
          Join Beta
        </span>
      </div>

      {/* Testimonial cards container */}
      <div
        className="absolute"
        style={{
          bottom: '30px',
          left: '0',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '47px',
            animation: 'testimonialScroll 40s linear infinite',
            paddingLeft: '100px',
            willChange: 'transform'
          }}
        >
          {/* First set of cards */}
          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;We&apos;ve tried Purpose for entry positions and it works perfect. We were able to reduce manual screening as well as active sourcing. All transfered candidates fit our set criteria.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              HR Manager, IT-Consultancy
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;With entry-mid level talent being scarce these days, Purpose really helped us get exactly what we search for in candidates without huge administration effort.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Head of HR, Automotive Supplier
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;The candidate transfer to our ATS really helps our recruiters to stay focused and skip juggling multiple platforms at once.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiter, Marketing Agency
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;It&apos;s fair to say that in our opinion Purpose focuses on quality over quantity. We&apos;ve managed to increase our hiring ration significantly.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiting Lead, Banking Sector
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;Even though we primarily focus on senior level roles, this system helped us with our more mid-level vacancies.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Junior Recruiter, Cybersecurity
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;In times of uncertainty and doubt in the labor market platforms like Purpose leave job seekers as well as companies encouraged for the future.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              TA Specialist, Manufacturing
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;Our requirements are generally quite high due to the field we operate in. The automated screening based on our criteria is a huge game-changer for our hiring performance.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiter, Healthcare &amp; Pharma
            </div>
          </div>

          {/* Duplicate set for seamless infinite scroll */}
          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;We&apos;ve tried Purpose for entry positions and it works perfect. We were able to reduce manual screening as well as active sourcing. All transfered candidates fit our set criteria.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              HR Manager, IT-Consultancy
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;With entry-mid level talent being scarce these days, Purpose really helped us get exactly what we search for in candidates without huge administration effort.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Head of HR, Automotive Supplier
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;The candidate transfer to our ATS really helps our recruiters to stay focused and skip juggling multiple platforms at once.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiter, Marketing Agency
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;It&apos;s fair to say that in our opinion Purpose focuses on quality over quantity. We&apos;ve managed to increase our hiring ration significantly.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiting Lead, Banking Sector
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;Even though we primarily focus on senior level roles, this system helped us with our more mid-level vacancies.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Junior Recruiter, Cybersecurity
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;In times of uncertainty and doubt in the labor market platforms like Purpose leave job seekers as well as companies encouraged for the future.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              TA Specialist, Manufacturing
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              width: '279px',
              minWidth: '279px',
              height: '267px',
              padding: '23px 18px 15px 19px',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderRadius: '18px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(153, 153, 153, 0.20) 100%)',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div style={{ width: '242px' }}>
              &quot;Our requirements are generally quite high due to the field we operate in. The automated screening based on our criteria is a huge game-changer for our hiring performance.&quot;
            </div>
            <div
              className="font-poppins"
              style={{
                width: '242px',
                color: '#454545',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Recruiter, Healthcare &amp; Pharma
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}