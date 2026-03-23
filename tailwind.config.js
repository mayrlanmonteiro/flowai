/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6C3AED',
                    light: '#8B5CF6',
                    dark: '#5B21B6',
                },
                accent: {
                    DEFAULT: '#06D6A0',
                    dark: '#05B384',
                },
                dark: {
                    DEFAULT: '#0B0F1A',
                    2: '#111827',
                    3: '#1F2937',
                    4: '#283044',
                },
                gray: {
                    DEFAULT: '#9CA3AF',
                    light: '#D1D5DB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                lg: '0 25px 60px rgba(0,0,0,0.3)',
                glow: '0 0 40px rgba(108,58,237,0.3)',
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #0B0F1A 0%, #1a1145 50%, #0B0F1A 100%)',
                'gradient-primary': 'linear-gradient(135deg, #6C3AED, #06D6A0)',
                'gradient-card': 'linear-gradient(145deg, rgba(108,58,237,0.08), rgba(6,214,160,0.05))',
            },
            animation: {
                'float-slow': 'floatBadge 4s ease-in-out infinite',
                'float-delayed': 'floatBadge 4s ease-in-out infinite 1.5s',
            },
            keyframes: {
                floatBadge: {
                    '0%, 100%': { transform: translateY(0) },
                    '50%': { transform: translateY(-12px) },
                }
            }
        },
    },
    plugins: [],
}
