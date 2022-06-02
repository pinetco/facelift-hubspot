module.exports = {
  // mode: 'jit',
  // purge:[
  //     './test-theme-from-theme-builder/modules/**/*.html',
  //   './test-theme-from-theme-builder/modules/**/*.js',
  // ],
  theme: {
    extend: {},
      colors:{
        "yellow" : {
          "100" : "#FFEB96",
          "200" : "#FFD200"
        },
        "orange" : {
          "100" : "#FFD9A3",
          "200" : "#FE9600",
          "300" : "#FF6600",
          "400" : "#920010"
        },
        "purple" : {
          "100" : "#FBA9FF",
          "200" : "#E000EE",
          "300" : "#9600A0",
          "400" : "#7C0084",
          "500" : "#5A0A5A"
        },
        "green" : {
          "100" : "#CCEAC6",
          "200" : "#5FB193"
        },
        "blue" : {
          "100" : "#E1FAFF",
          "200" : "#C4F5FF",
          "300" : "#38A5F8",
          "400" : "#001EBE",
          "500" : "#000F55",
          "600" : "#040A29"
        },
        "gray" : {
          "100" : "#E6E6EB",
          "200" : "#D8D9E2",
          "300" : "#A3A6B4",
          "400" : "#7D7D7D",
          "500" : "#535353",
          "600" : "#646A89",
          "700" : "#3D446C"
        },
        "white" : "#FFFFFF",
        "transparent" : "transparent",
        "black" : "#000000"
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundAttachment: false,
    backgroundBlendMode: false,
    backgroundClip: false,
    backgroundOrigin: false,
    blur: false,
    borderCollapse: false,
    boxDecorationBreak: false,
    caretColor: false,
    filter: false,
    divideColor: false,
    divideStyle: false,
    divideWidth: false,
    gradientColorStops: false,
    grayscale: false,
    divideOpacity: false,
    float: false,
    lineHeight:false,
    accessibility:false,
    alignContent:false,
    alignSelf:false,
    backgroundAttachment:false,
    backgroundClip:false,
    backgroundImage:false,
    backgroundOpacity:false,
    borderOpacity:false,
    clear:false,
    divideColor:false,
    divideOpacity:false,
    divideStyle:false,
    divideWidth:false,
    fontFamily:false,
    fontVariantNumeric:false,
    ringColor:false,
    ringOffsetColor:false,
    ringOffsetWidth:false,
    ringOpacity:false,
    ringWidth:false,
  }
}
