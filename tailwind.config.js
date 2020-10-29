module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    
    boxShadow:{
      1: '-17px 16px 60px -15px rgba(0, 0, 0, 0.7)',


    },
    extend: {
      colors:{
        coffee: '#d9caa7',
        light:'#e7dec8',
        darkCoffee: '#cbaf87',
        white: '#fff',
        blue: {
          "100": "#ebf8ff",
          "200": "#bee3f8",
          "300": "#90cdf4",
          "400": "#63b3ed",
          "500": "#4299e1",
          "600": "#3182ce",
          "700": "#2b6cb0",
          "800": "#2c5282",
          "900": "#2a4365"
        },
      },
      borderRadius:{
        'full':'9999px',
        2:'9990px'
      },
  
      fontFamily: {
        'name': ['Abril Fatface'],
        'role': ['Playfair Display'],          
      },
      animation: {
                  'spin-slow': 'spin 3s linear infinite',
                  },
      margin:{
        '30':'30%',
        '50':'50%'
      },
      height:{
        '50':'20%',
        '90':'30rem'
      },
      padding:{
        '50':'5%'
      }
      
    },
    screens:{
        'xs':'320px',
        'sm':'640px',
        'md':'641px',
        'lg':'1024px'
        
    },
    
  },
  variants: {},
  plugins: [],
}
