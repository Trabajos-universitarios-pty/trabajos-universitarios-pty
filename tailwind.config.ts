import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {

            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                marquee: 'marquee 10s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },




            colors: {
                amber: {
                    DEFAULT: '#f2bb16',
                    100: '#322603',
                    200: '#644d06',
                    300: '#967309',
                    400: '#c8990c',
                    500: '#f2bb16',
                    600: '#f4c946',
                    700: '#f7d674',
                    800: '#fae4a2',
                    900: '#fcf1d1'
                },
                carrot_orange: {
                    DEFAULT: '#f28c0f',
                    100: '#301c03',
                    200: '#613805',
                    300: '#915308',
                    400: '#c26f0a',
                    500: '#f28c0f',
                    600: '#f5a23d',
                    700: '#f7b96e',
                    800: '#fad19e',
                    900: '#fce8cf'
                },
                rust: {
                    DEFAULT: '#b63d12',
                    100: '#240c04',
                    200: '#481907',
                    300: '#6d250b',
                    400: '#91310e',
                    500: '#b63d12',
                    600: '#e9531d',
                    700: '#ee7e55',
                    800: '#f4a98e',
                    900: '#f9d4c6'
                },
                rufous: {
                    DEFAULT: '#a62014',
                    100: '#210604',
                    200: '#410d08',
                    300: '#62130c',
                    400: '#831a10',
                    500: '#a62014',
                    600: '#de2c1b',
                    700: '#e95d51',
                    800: '#f1938b',
                    900: '#f8c9c5'
                },
                jasper: {
                    DEFAULT: '#bc533c',
                    100: '#26110c',
                    200: '#4c2218',
                    300: '#723224',
                    400: '#984330',
                    500: '#bc533c',
                    600: '#cd7561',
                    700: '#da9788',
                    800: '#e6bab0',
                    900: '#f3dcd7'
                }
            }

        }
    },
    plugins: []
} satisfies Config;
