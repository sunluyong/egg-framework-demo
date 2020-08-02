'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  constructor(ctx) {
    super(ctx);
    this.config = this.app.config;
  }

  async get(id) {
    return { id, name: this.config.keys };
  }

  async dto() {
    const { code, msg } = this.app.enum.error.ERR_AUTH;
    return new this.app.util.dto.ResultDto(null, code, msg);
  }
}

module.exports = TestService;
