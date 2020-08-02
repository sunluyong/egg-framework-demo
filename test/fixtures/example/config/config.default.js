'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_123456';

  // config.customLoader = {
  //   enum: {
  //     directory: 'app/enum',
  //     inject: 'app',
  //   },
  //   util: {
  //     directory: 'app/util',
  //     inject: 'app',
  //   },
  // };

  // config.view = {
  //   defaultViewEngine: 'handlebars',
  //   defaultExtension: '.hbs',
  //   mapping: {
  //     '.hbs': 'handlebars',
  //   },
  // };

  return config;
};
