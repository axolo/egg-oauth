'use strict';

const OAuth = require('./lib/oauth');

const createOauth = (options, app) => {
  const oauth = new OAuth(options, app);
  return oauth;
};

module.exports = app => {
  app.addSingleton('oauth', createOauth);
};
