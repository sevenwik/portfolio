module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      extend: {
        animation: {
                    'spin-slow': 'spin 3s linear infinite',
                    }
      },
    },
    variants: {},
    plugins: [],
  }
  