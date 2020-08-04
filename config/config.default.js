'use strict';

const OAuth2Server = require('oauth2-server');

/**
 * **egg-oauth default config**
 *
 * @see https://oauth2-server.readthedocs.io
 * @member Config#oauth
 * @property {Object} OAuth2Server class OAuth2Server
 * @property {String | Object} model OAuth2Server model Object or path
 * @property {Boolean} allowBearerTokensInQueryString see docs
 * @property {Number} accessTokenLifetime see docs
 * @property {Number} refreshTokenLifetime see docs
 */
exports.oauth = {
  default: {
    OAuth2Server, // change version to fit your app
    model: './app/extend/oauth', // relative path from app.baseDir
    allowBearerTokensInQueryString: true, // querystring params: access_token
    accessTokenLifetime: 3600, // 2 hours
    refreshTokenLifetime: 1209600, // 2 weeks
    // authorizationCodeLifetime: 300, // 5 minutes
    // allowEmptyState: false, // state required
  },
};
