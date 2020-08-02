'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('util', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'example',
      framework: true,
    });
    return app.ready();
  });

  after(() => app && app.close());

  afterEach(mock.restore);

  it('should return dto error', async () => {
    const ctx = app.mockContext();
    const result = await ctx.service.test.dto();
    const { code } = app.enum.error.ERR_AUTH;
    assert(result.code, code);
  });
});
