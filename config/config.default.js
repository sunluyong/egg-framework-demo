'use strict';

module.exports = () => {
  const config = {};

  config.customLoader = {
    enum: {
      directory: 'app/enum',
      inject: 'app',
      loadunit: true,
    },
    util: {
      directory: 'app/util',
      inject: 'app',
      loadunit: true,
    },
  };

  config.view = {
    defaultViewEngine: 'handlebars',
    defaultExtension: '.hbs',
    mapping: {
      '.hbs': 'handlebars',
    },
  };

  return config;
};
