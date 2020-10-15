module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      boxshadow:{
        '2xl': '-17px 16px 35px 0px rgba(0,0,0,1)'

      },
      extend: {
        fontFamily: {
          'body': ['Poppins']
        },
        animation: {
                    'spin-slow': 'spin 3s linear infinite',
                    }
      },
      screens:{
          'sm':'360px',
          'lg':'800px'
      }
    },
    variants: {},
    plugins: [],
  }
  