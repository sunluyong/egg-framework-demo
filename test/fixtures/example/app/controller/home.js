'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.service.test.get(123);
    this.ctx.body = data.name;
  }

  async render() {
    const { code, msg } = this.app.enum.error.ERR_SERVER;

    await this.ctx.render('test', {
      title: code,
      msg,
    });
  }
}

module.exports = HomeController;
