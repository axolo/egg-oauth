'use strict';

const mock = require('egg-mock');

describe('test/@axolo/egg-oauth.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/@axolo/egg-oauth-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, oauth')
      .expect(200);
  });
});
