module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: '#fa8072',
        'medium-purple': '#9370db',
      },
      animation: {
        marquee: 'marquee 1s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradientY: {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'center top',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'center center',
          },
        },
        gradientX: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        gradientXY: {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
