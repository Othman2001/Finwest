const cache = new Map();

const generateVersatile = (to, from = 1, negative = false, unit) => {
  const key = `${to}:${from}:${negative}:${unit}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  const result = Array.from(Array(to - from + 1)).reduce((result, _, i) => {
    const value = `${negative ? '-' : ''}${String(i + from)}${unit}`;
    result[value] = value;

    return result;
  }, {});

  cache.set(key, result);

  return result;
};

const generateVersatilePxs = (to, from = 1, negative = false) =>
  generateVersatile(to, from, negative, 'px');

const generateVersatileNegativePxs = (to, from = 1) =>
  generateVersatilePxs(to, from, true);

module.exports = {

  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        brown:"#FFC492",
        grays:"#B8B8B8",
        black: "#2E2D33",
        extragold:"#FFB577",
        blues: "#C4E4EA",
        browngold:"#251D1E",
        blacks:"#151217",
        cardblack:"#1F1D21",
        black:"#333",

      },
      width: {
        ...generateVersatilePxs(100),
      },
      height: {
        ...generateVersatilePxs(100),
      },
      maxHeight: {
        ...generateVersatilePxs(100),
      },
      padding: {
        ...generateVersatilePxs(300),
      },
      borderWidth: {
        ...generateVersatilePxs(10),
      },
      margin: {
        ...generateVersatilePxs(100),
        ...generateVersatilePxs(70, 1, true),
      },
      space: {
        ...generateVersatilePxs(30),
      },
      inset: {
        ...generateVersatilePxs(400),
        ...generateVersatileNegativePxs(400),
      },
      borderRadius: {
        ...generateVersatilePxs(20),
        buttonRounded: '28px',
        boxRounded:'35px'
      },
      fontSize: {
        ...generateVersatilePxs(90, 10),
      },
      lineHeight: {
        ...generateVersatilePxs(100, 8),
      },

    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: []
}
