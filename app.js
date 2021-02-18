'use strict';

const createOauth = (options, app) => {
  const { OAuth2Server } = options;
  if (typeof options.model === 'function') {
    const model = options.model({ ...options }, app);
    options.model = model;
  }
  const oauth = new OAuth2Server({ ...options });
  oauth.OAuth2Server = OAuth2Server;
  oauth.Request = OAuth2Server.Request;
  oauth.Response = OAuth2Server.Response;
  return oauth;
};

module.exports = app => {
  app.addSingleton('oauth', createOauth);
};
