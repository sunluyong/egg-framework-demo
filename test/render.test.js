'use strict';

const mock = require('egg-mock');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('test/render.test.js', () => {
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

  it('should GET /render', async () => {
    const expected = fs.readFileSync(path.join(__dirname, './tpl/test.html')).toString();

    const result = await app.httpRequest()
      .get('/render')
      .expect(expected)
      .expect(200);

    assert(/\d+ms/.test(result.headers['x-response-time']));
  });
});

