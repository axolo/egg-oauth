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
    OAuth2Server: require('oauth2-server'), // change version to fit your app
    model: './app/extend/oauth', // relative path from app.baseDir
    allowBearerTokensInQueryString: true, // querystring params: access_token
    accessTokenLifetime: 3600, // 2 hours
    refreshTokenLifetime: 1209600, // 2 weeks
    // authorizationCodeLifetime: 300, // 5 minutes
    // allowEmptyState: false, // state required
  },
  // client: {},  // Please config `client` or `clients` in Egg.js
};
