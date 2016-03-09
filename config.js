
module.exports = {

  ports: {
    webpack: 8000,
    express: 5092,
    django: 8001,
  },

  files: {
    client: {
      entry: './app/client.jsx',
      src: './app/**/**/**/**/*.{js,jsx}',
      out: 'js',
      outFile: 'bundle.js',
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
      src: './app/**/**/**/*.{js,jsx}',
      out: 'build',
    },
    tests: {
      src: './test/**/**/**/*.{js,jsx}',
    },
    staticAssets: 'build/static/',
  },

  api: {
    // The reason this is separated is so that later on, we can switch to a dedicated API subdomain
    // easily, i.e https://api.pianoshelf.com.
    prod: {
      prefix: '/api',
      authPrefix: '/api-auth',
    },
    dev: {
      prefix: '/api',
      authPrefix: '/api-auth',
    },
  },

  facebook: {
    appId: '1549195551980295',
  },

  cookie: {
    authtoken: 'pianoshelf-authtoken',
    csrf: 'csrftoken',
  },

  build: {
    babel: {
      client: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-decorators-legacy', 'jsx-control-statements'],
      },
      server: {
        presets: ['react', 'node5', 'stage-0'],
        plugins: ['transform-decorators-legacy', 'jsx-control-statements'],
      },
    },
    sass: {
      style: 'compact',
      includePaths: ['./assets/css', './node_modules'],
    },
    autoprefixer: {
      browsers: ['> 5%'],
    },
  },

  googleAnalytics: {
    trackingId: 'UA-58120482-1',
  },

};

