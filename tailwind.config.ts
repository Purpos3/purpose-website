import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'radial-1':
          'radial-gradient(169.11% 136.3% at 17.79% 0%, #5323E5 0%, #5472FF 38.13%, #6DC9D8 81.27%, #72E0DA 92.1%, #6DECD3 100%)',
        'circle-gradient':
          'linear-gradient(90deg, rgba(83, 35, 229, 0.60) 0%, rgba(83, 124, 255, 0.60) 49%, rgba(118, 244, 220, 0.60) 100%)',
        'circle-gradient-reverse':
          'linear-gradient(90deg, rgba(118, 244, 220, 0.60) 0%, rgba(83, 124, 255, 0.60) 51%, rgba(83, 35, 229, 0.60) 100%)',
      },
      boxShadow: {
        cta: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'slide-infinite': 'slide 30s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.8s ease-out 0.1s forwards',
        'fade-in-delay-2': 'fadeIn 0.8s ease-out 0.2s forwards',
        'fade-in-delay-3': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-in-slow': 'fadeInSlow 1.5s ease-out forwards',
        'fade-in-slow-1': 'fadeInSlow 1.5s ease-out 0.1s forwards',
        'fade-in-slow-2': 'fadeInSlow 1.5s ease-out 0.2s forwards',
        'fade-in-slow-3': 'fadeInSlow 1.5s ease-out 0.3s forwards',
        'fade-in-slow-4': 'fadeInSlow 1.5s ease-out 0.4s forwards',
        'draw-ellipse': 'drawEllipse 1.2s ease-out 0.2s forwards',
        'typewriter': 'typewriter 1.2s steps(80) 0.3s forwards, blinkCursor 0.8s step-end infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawEllipse: {
          '0%': { strokeDashoffset: '2500' },
          '100%': { strokeDashoffset: '0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blinkCursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#5E60FF' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
