'use strict';

const assert = require('assert');

function isObject(obj) {
  const objType = Object.prototype.toString.call(obj);
  return objType === '[object Object]' || objType === '[object Array]' || objType === '[object Null]';
}

class ResultDto {
  constructor(result, code = 200, errorMsg = '', errorStack = null) {
    assert(isObject(result), '[ResultDto:constructor]: arg[0] must be an object or null!');

    this.result = result;
    this.success = code === 200;
    this.code = code;
    if (code !== 200) {
      this.errorMsg = errorMsg;
      this.errorStack = errorStack;
    }
  }
}

exports.ResultDto = ResultDto;
