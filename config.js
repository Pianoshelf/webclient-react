
module.exports = {

  ports: {
    webpack: 8080,
    express: 5092,
  },

  files: {
    client: {
      entry: './app/client.jsx',
      src: ['./app/**/*.js', './app/**/*.jsx'],
      out: 'static/js/bundle.js',
    },
    css: {
      entry: './assets/css/main.sass',
      src: './assets/css/**/**/*.sass',
      out: 'css',
    },
    images: {
      src: './assets/images/*',
      out: 'img',
    },
    server: {
      src: ['app/**/*.js', 'app/**/*.jsx'],
      out: 'build',
    },
    staticAssets: 'build/static/',
  },

  api: {
    prod: {
      prefix: 'https://www.pianoshelf.com/api',
      authPrefix: 'https://www.pianoshelf.com/api-auth',
    },
    dev: {
      prefix: 'http://localhost:5000/api',
      authPrefix: 'http://localhost:5000/api-auth',
    },
  },


  cookie: {
    authtoken: 'pianoshelf-authtoken',
    csrf: 'csrftoken',
  },

};

