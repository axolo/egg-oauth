'use strict';

const path = require('path');
const OAuth2Server = require('oauth2-server');

class OAuth {
  constructor(options, app) {
    this.app = app;
    this.options = options;
    this.OAuth2Server = OAuth2Server;
    const serverOptions = { ...options };
    if (typeof options.model === 'string') {
      const model = require(path.join(app.baseDir, options.model))(options, app);
      Object.assign(serverOptions, { model });
    }
    this.server = new OAuth2Server(serverOptions);
  }
}

module.exports = OAuth;
