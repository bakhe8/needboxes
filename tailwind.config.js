module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        //todo:: inject it via the plugin or easier way
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend: {
            colors: {
                brand: { dark: '#0D2C6C', blue: '#0D2C6C', coral: '#FF9E1B', orange: '#F36C21' },
                navy: '#11224E', blue: '#0046FF', cyan: '#73C8D2', orange: '#FA812F', gold: '#FCC61D',
                neutral: { light: '#f8f9fa', ink: '#333333' },
                success: '#22c55e', danger: '#ef4444', grayx: '#E9E9E9', inky: '#111827'
            },
            boxShadow: {
                nb: '0 10px 30px rgba(13,44,108,0.18)',
                coral: '0 10px 28px rgba(255,158,27,.30)',
                glow: '0 10px 30px rgba(0,70,255,.22)',
                soft: '0 10px 30px rgba(0,0,0,.10)'
            },
            backgroundImage: {
                'nb-hero': 'linear-gradient(135deg, #0D2C6C 0%, #1E40AF 65%)',
                'nb-coral': 'linear-gradient(135deg, #FF9E1B, #F36C21)',
                'nb-glass': 'linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.05))',
                hero: 'linear-gradient(135deg, #0046FF 0%, #11224E 75%)',
                stripe: 'repeating-linear-gradient(135deg, rgba(255,255,255,.10) 0 6px, rgba(255,255,255,.04) 6px 16px)'
            },
            keyframes: {
                shimmer: { '0%': {transform: 'translateX(-100%)'}, '100%': {transform:'translateX(100%)'} },
                cartJiggle: { '0%': { transform: 'scale(1)' }, '25%': { transform: 'scale(1.1) rotate(5deg)' }, '50%': { transform: 'scale(1.1) rotate(-5deg)' }, '75%': { transform: 'scale(1.1) rotate(5deg)' }, '100%': { transform: 'scale(1)' } },
                spin: { 'to': { transform: 'rotate(360deg)' } },
                bump: { '0%':{transform:'scale(1)'}, '50%':{transform:'scale(1.06)'}, '100%':{transform:'scale(1)'} },
                elementRise: { '0%': { transform: 'translateY(20px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
                pulse: { '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' }, '70%': { boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' } },
                fadeIn: { 'from': { opacity: 0, transform: 'translateY(10px)' }, 'to': { opacity: 1, transform: 'translateY(0)' } },
                loading: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } }
            },
            animation: {
                'cart-jiggle': 'cartJiggle .5s ease',
                spin: 'spin 1s ease-in-out infinite',
                bump:'bump .35s ease',
                pulse:'pulse 2s infinite',
                fadeIn: 'fadeIn 0.3s ease',
                loading: 'loading 1.5s infinite'
            },
            borderRadius: { 'xl': '1rem', '2xl': '1.25rem', '3xl': '1.5rem' }
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}