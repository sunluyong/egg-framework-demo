// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCost = require('../../../app/middleware/cost');

declare module 'egg' {
  interface IMiddleware {
    cost: typeof ExportCost;
  }
}
