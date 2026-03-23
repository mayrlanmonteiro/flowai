/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F172A',
                'primary-light': '#1E293B',
                accent: {
                    DEFAULT: '#22D3EE',
                    hover: '#06b6d4',
                },
                secondary: '#7C3AED',
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                glow: '0 0 20px rgba(34, 211, 238, 0.3)',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'bounce-delayed': 'bounce 3s infinite 1.5s',
            }
        },
    },
    plugins: [],
}
