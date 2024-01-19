/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html", "./build/js/*.js"],
    theme: {
        extend: {
            colors: {
                papayawhip: {
                    light: '#fef4e4',
                    DEFAULT: '#ffefd5',
                    dark: '#fee5bc'
                }
            },
            spacing: {
                '13': '3.25rem',
                '15': '3.75rem',
                '128': '32rem',
                '144': '36rem',
                'mad': '50rem',
            },
            screens: {
                'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
                'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
            },
            keyframes: {
                'open-menu': {
                    '0%:': { transform: 'scaleY(0)' },
                    '80%:': { transform: 'scaleY(1.2)' },
                    '100%:': { transform: 'scaleY(1)' },
                },
            },
            animation: {
                'open-menu': 'open-menu 0.5s ease-in-out forwards',
            }
        },
    },
    plugins: [],
}

