# egg-oauth

[node-oauth2-server](https://github.com/oauthjs/node-oauth2-server) plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-oauth --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.oauth = {
  enable: true,
  package: '@axolo/egg-oauth',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.oauth = {
  client: {
    OAuth2Sever: require('oauth2-server'), // user defined oauth2-server version
    model: require('./oauth-model'), // model require
    accessTokenLifetime: 7200, // default 3600
    requireClientAuthentication: {
      password: false,
    },
  },
};
```

**MUST** build [OAuth2 Model Specification][Model] at model in config by yourselves.

see [config/config.default.js](config/config.default.js) for more detail.

## props

|    props     |           description            |
| ------------ | -------------------------------- |
| OAuth2Server | class of `OAuth2Server`          |
| Response     | class of `OAuth2Server.Response` |
| Request      | class of `OAuth2Server.Request`  |

## model

A example of model.

```js
// app/config/oauth-model.js
module.exports = (options, app) => ({
  getClient: (clientId, clientSecret) => {
    return { clientId, clientSecret };
  },
  // ...
});
```

## TODO

- get `request` in `model`

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-oauth/issues).

## License

[MIT](LICENSE)

[Model]: https://oauth2-server.readthedocs.io/en/latest/model/overview.html
