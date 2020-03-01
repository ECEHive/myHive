const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', proxy({
    target: 'https://api.dev.ecehive.org',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  }));
};
