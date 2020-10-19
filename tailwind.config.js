module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    colors:{
      blue: '#d9caa7',
      light:'#e7dec8',
      darkBlue: '#cbaf87',
      gray: '#edf2f7',
      white: '#fff'

    },
    boxShadow:{
      1: '-17px 16px 60px -15px rgba(0, 0, 0, 0.7)',


    },
    extend: {
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
        
    }
  },
  variants: {},
  plugins: [],
}
