'use strict';

const OAuth2Server = require('oauth2-server');

/**
 * egg-oauth default config
 * @member Config#oauth
 * @property {String} SOME_KEY - some description
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
