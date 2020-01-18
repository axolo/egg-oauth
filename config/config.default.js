'use strict';

/**
 * **egg-@axolo/egg-oauth default config**
 *
 * @see https://oauth2-server.readthedocs.io/en/latest/api/oauth2-server.html
 * @see https://oauth2-server.readthedocs.io/en/latest/model/spec.html
 *
 * @member Config#oauth
 * @property {String | Object} model - Model Specification
 */
exports.oauth = {
  default: {
    model: './app/extend/oauth', // relative path from app.baseDir
    allowBearerTokensInQueryString: true,
  },
  // client: {},
};
