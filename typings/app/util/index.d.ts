// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDto = require('../../../app/util/dto');

declare module 'egg' {
  interface Application {
    util: T_util;
  }

  interface T_util {
    dto: ExportDto;
  }
}
