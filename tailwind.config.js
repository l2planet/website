/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gris: {
                    0: 'rgb(248 250 252)',
                    1: 'rgb(241 245 249)',
                    2: 'rgb(226 232 240)',
                    3: 'rgb(203 213 225)',
                    4: 'rgb(148 163 184)',
                    5: 'rgb(100 116 139)',
                    6: 'rgb(71 85 105)',
                    7: 'rgb(51 65 85)',
                    8: 'rgb(30 41 59)',
                    9: 'rgb(15 23 42)',
                },
                pri: {
                    0: 'rgb(238 242 255)',
                    1: 'rgb(224 231 255)',
                    2: 'rgb(199 210 254)',
                    3: 'rgb(165 180 252)',
                    4: 'rgb(129 140 248)',
                    5: 'rgb(59 130 246)',
                    6: 'rgb(37 99 235)',
                    7: 'rgb(29 78 216)',
                    8: 'rgb(30 64 175)',
                    9: 'rgb(30 58 138)',
                },
                sec: {
                    0: 'rgb(240 249 255)',
                    1: 'rgb(224 242 254)',
                    2: 'rgb(186 230 253)',
                    3: 'rgb(125 211 252)',
                    4: 'rgb(56 189 248)',
                    5: 'rgb(14 165 233)',
                    6: 'rgb(2 132 199)',
                    7: 'rgb(3 105 161)',
                    8: 'rgb(7 89 133)',
                    9: 'rgb(12 74 110)',
                },
            },
            width: {
                18: '4.5rem',
                26: '6.5rem',
                34: '8.5rem',
                37: '9.25rem',
                38: '9.5rem',
            },
            fontSize: {
                '2.5xl': ['1.625rem', { lineHeight: '2.125rem' }],
                none: ['0px'],
                '4xl2': ['2.5rem'],
                xl2: ['1.375rem'],
            },
            borderRadius: {
                lg2: '0.625rem',
            },
            height: {
                22: '5.5rem',
                18: '4.5rem',
                13: '3.25rem',
            },
        },
    },
    plugins: [],
}
