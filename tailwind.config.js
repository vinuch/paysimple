module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '80': '35rem'
      },
      backgroundColor: {
        'primary': '#FFFCF3',
        'secondary': '#002E54',
        'simplifyYellow': '#FEBD11'
      },
      textColor: {
        'secondary': '#002E54',
        'tgrey': '#4B5D68',
        'simplifyYellow': '#FEBD11'
      },
      borderColor: {
        'simplifyYellow': '#FEBD11'
      }
    }
  },
  variants: {},
  plugins: []
}
