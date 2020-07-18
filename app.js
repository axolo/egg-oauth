'use strict';

const path = require('path');

const createOauth = (options, app) => {
  const { OAuth2Server } = options;
  if (typeof options.model === 'string') {
    const model = require(path.join(app.baseDir, options.model))(options, app);
    options.model = model;
  }
  const oauth = new OAuth2Server(options);
  oauth.OAuth2Server = OAuth2Server;
  return oauth;
};

module.exports = app => {
  app.addSingleton('oauth', createOauth);
};
