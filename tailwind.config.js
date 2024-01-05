/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {

                'Very-dark-blue': 'hsl(233, 47%, 7%)',
                'Dark-desaturated-blue': 'hsl(244, 38%, 16%)',
                'Soft-violet': 'hsl(277, 64%, 61%)',

                'White': ' hsl(0, 0%, 100%)',
                'Slightly-transparent-white': 
                'hsla(0, 0%, 100%, 0.75)',
            },

            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'lexend': ['Lexend Deca', 'sans-serif'],
            }

        },
        screens: {
            'xs': '325px',
            'sm': '640px',
            'md': '768px',
        },
    },
    plugins: [],
}

