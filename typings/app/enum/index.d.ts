// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportError = require('../../../app/enum/error');

declare module 'egg' {
  interface Application {
    enum: T_enum;
  }

  interface T_enum {
    error: ExportError;
  }
}
