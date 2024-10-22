module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#C0990F',
        'custom-blue': '#1C2168',
      },
      fontFamily: {
        sitka: ['Sitka', 'serif']
      },
      animation: {
        'marquee-lr': 'marquee-lr 20s linear infinite',
        'marquee-rl': 'marquee-rl 20s linear infinite',
        'marquee-tb': 'marquee-tb 20s linear infinite',
        'marquee-bt': 'marquee-bt 20s linear infinite',
      },
      keyframes: {
        'marquee-lr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-rl': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-tb': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'marquee-bt': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}