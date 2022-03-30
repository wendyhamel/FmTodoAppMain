tailwind.config = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['Josefin Sans', 'sans-serif'],
        },
        colors: {
            blue: 'hsl(220, 98%, 61%)',
            'check-start': 'hsl(192, 100%, 67%)',
            'check-stop': 'hsl(280, 87%, 65%)',

            // light theme
            'l-blue-100': 'hsl(0, 0%, 98%)', // very light gray
            'l-blue-200': 'hsl(236, 33%, 92%)', // very light gray-blue
            'l-blue-300': 'hsl(233,11%, 84%)', // light gray-blue
            'l-blue-400': 'hsl(236, 9%, 61%)', // dark gray-blue
            'l-blue-500': 'hsl(235, 19%, 35%)',  // Very dark gray-blue

            // dark theme
            'd-blue-100': 'hsl(234, 39%, 85%)', // light gray-blue
            'd-blue-200': 'hsl(236,33%,92%)', // light gray-blue (hover)
            'd-blue-300' : 'hsl(234, 11%, 52%)', // dark gray-blue
            'd-blue-400' : 'hsl(233, 14%, 35%)', // very dark gray-blue
            'd-blue-500' : 'hsl(237, 14%, 26%)', // very very dark gray-blue
            'd-blue-600': 'hsl(235, 24%, 19%)', // very dark desaturated blue
            'd-blue-700': 'hsl(235, 21%, 11%)', // very dark blue



        }
    }
}