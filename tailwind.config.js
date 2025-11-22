/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'heading': ['Montserrat', 'Inter', 'sans-serif'],
            },
            colors: {
                'esf': {
                    'midnight': '#0B0C15',  // Deepest background (Rich Black/Blue)
                    'navy': '#1A1B2E',      // Secondary background
                    'blue': '#303151',      // Primary Brand Blue
                    'dark-navy': '#131422', // Card background
                    'light-blue': '#4A4B75', // Hover state
                    'accent': '#00D9FF',    // Electric Blue (Modern Accent)
                    'gold': '#D4AF37',      // Classic Gold (Secondary Accent)
                    'white': '#FFFFFF',
                    'silver': '#A8B2C1',    // Text secondary
                    'light': '#E8EBF0',     // Text primary
                }
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #0B0C15 0%, #1A1B2E 100%)',
                'gradient-glow': 'radial-gradient(circle at center, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
                'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'marquee': 'marquee 40s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            fontSize: {
                'display': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
                'title': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
            },
            letterSpacing: {
                'tighter': '-0.02em',
                'tight': '-0.01em',
                'wide': '0.1em',
            },
        },
    },
    plugins: [],
}
