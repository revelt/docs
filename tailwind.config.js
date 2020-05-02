const defaultTheme = require('tailwindcss/defaultTheme')

let gradients = {
  'ocean-light': ['#4398ee', '#5f54f1'],
  'ocean-dark': ['#4398ee', '#4f45d6'],
  'grey-dark': ['#b8c2cc', '#8795a1'],
  'vscode': ['#2c303b', '#414758'],
  'grey-code': ['#fff', '#f0f0f0'],
  'code': ['#fff', '#f7fafc'],
  'red-dark': ['#f05252', '#c81e1e'],
  'orange-dark': ['#f6993f', '#de751f'],
  'yellow-dark': ['#ffed4a', '#f2d024'],
  'green-dark': ['#38c172', '#1f9d55'],
  'teal-dark': ['#4dc0b5', '#38a89d'],
  'blue-dark': ['#3490dc', '#2779bd'],
  'indigo-dark': ['#6574cd', '#5661b3'],
  'purple-dark': ['#9561e2', '#794acf'],
  'pink-dark': ['#f66d9b', '#eb5286'],
}

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    content: [
      './src/assets/**/*.css',
      './content/**/*.md',
      './src/**/*.vue',
      './src/**/*.js'
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/:.%]+(?<!:)/g) || [],
      whitelistPatterns: [/a(lgoli)?a/, /anchor/],
    }
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        transparent: 'transparent',
        inherit: 'inherit',

        black: '#22292f',
        white: '#fff',

        ocean: {
          default: '#4398ee',
          dark: '#5f54f1',
          darker: '#4f45d6',
        },

        code: {
          default: '#f9fcfd',
        },
        'gray-codeblock': '#fbfcfd',
        'gray-default': '#b8c2cc',
        'yellow-450': '#ffed4a',
        'yellow-markdown-highlight': '#ff9',
      },
      cursor: {
        help: 'help',
      },
      spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
      },
      boxShadow: {
        'lg-soft': '0 10px 20px rgba(91,107,174,.2)',
        'xl-cards': '0 20px 25px -5px rgba(67, 152, 238, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        inter: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxxs: '.625rem',
        xxs: '.75rem',
      },
      height: theme => ({
        quickies: 'calc(100vh - 6rem)',
      }),
      inset: {
        '0': '0',
        '16': '3.5rem',
        '24': '6rem',
        auto: 'auto',
      },
      linearBorderGradients: {
        colors: gradients,
        directions: {
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
      },
      linearGradientColors: {
        ...gradients,
      },
      linearGradientDirections: {
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      lineHeight: {
        code: '1.75',
      },
      margin: (theme, { negative }) => ({
        '1/6': '16.66667%',
      }),
      maxHeight: {
        sm: '30rem',
      },
      minHeight: {
        '128': '32rem',
      },
      minWidth: {
        '24': '6rem',
      },
      opacity: {
        '90': 0.90,
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    linearBorderGradients: ['responsive', 'hover'],
    linearGradients: ['responsive', 'hover'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'group-hover'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'group-hover'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-gradients'),
    require('tailwindcss-border-gradients')(),
  ],
}
