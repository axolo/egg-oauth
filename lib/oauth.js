'use strict';

const path = require('path');

class OAuth {
  constructor(options, app) {
    this.app = app;
    this.options = options;
    this.OAuth2Server = options.OAuth2Server;
    const serverOptions = { ...options };
    if (typeof options.model === 'string') {
      const model = require(path.join(app.baseDir, options.model))(options, app);
      Object.assign(serverOptions, { model });
    }
    this.server = new this.OAuth2Server(serverOptions);
  }
}

module.exports = OAuth;
