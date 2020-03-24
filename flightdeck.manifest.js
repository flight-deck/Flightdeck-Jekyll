module.exports = {
  port: 4000,

  tasks: {
    browsersync: true,
    eslint: true,
    imagemin: true,
    sass: true,
    watch: true,
    webpack: true,
    deploy: false,
  },

  assets: './assets',

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // "Google Chrome",
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ],
  },

  deploy: {
    // Server IP ie: root@192.168.0.1 OR ServerName if you use agentforwarding
    remote: '',
    // Path to web root ie: /var/www/html
    root: '',
    exclude: [
      // Excluding files/folders inside of the _site folder
      '.DS_Store',
      '*.lock',
      '.git',
    ],
    // set to false if deploying to production
    dryrun: true,
  },

  eslintLoader: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  },

  imagemin: {
    src: '_images',
    dest: 'images',
    interlaced: false,
    mozjpeg: [
      {
        quality: 75,
        progressive: true,
      },
    ],
    optimizationLevel: 5,
    svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
  },

  svgSprite: {
    src: '_images/svg',
    dest: 'images/svg',
    settings: [
      {
        shape: {
          dimension: {
            // Set maximum dimensions
            maxWidth: 32,
            maxHeight: 32,
          },
          spacing: {
            // Add padding
            padding: 10,
          },
        },
        mode: {
          view: {
            // Activate the «view» mode
            bust: false,
            render: {
              scss: true, // Activate Sass output (with default options)
            },
          },
          symbol: true, // Activate the «symbol» mode
        },
      },
    ],
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: '',
    },
    dest: '_site',
    data: '_data',
  },

  js: {
    src: '_js',
    dest: 'js',
    entry: ['bundle.js'],
  },

  sass: {
    src: '_sass',
    dest: 'css',
    outputStyle: 'compressed', //nested, expanded, compact, compressed
  },

  webpack: {
    mode: 'production',
    // makes debuggin easier - options found -> https://webpack.js.org/configuration/devtool/
    devtool: 'source-map',
    module: {
      rules: [],
    },
  },
};
