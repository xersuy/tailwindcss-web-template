module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // gray: colors.blueGray,
        'common-orange': '#f97316',
        'common-orange-300': '#fdba74',
        'common-green': '#22c55e',
        'common-green-300': '#86efac',
        'common-red': '#ef4444',
        'common-red-300': '#fca5a5',
        'common-yellow': '#eab308',
        'common-yellow-300': '#fde047',
        'common-blue': '#0ea5e9',
        'common-blue-300': '#7dd3fc',
        disabled: '#d8d8d8',
      },
      zIndex: {
        top: 9999,
        header: 9998,
        'header-alarm': 8999,
        footer: 9998,
        'bottom-alarm': 9997,
        panel: 8000,
        'panel-active': 9000,
        'form-modal': 9100,
        alert: 9200,
      },

      fontFamily: {
        inter: [
          'Noto Sans',
          'Noto Sans KR',
          'Noto Sans Medium',
          'Noto Sans Light',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      screens: {
        xs: '480px',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
