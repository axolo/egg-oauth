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
    model: './mock/oauth/model', // default './app/extend/oauth'
    accessTokenLifetime: 7200, // default 3600
    requireClientAuthentication: { password: false },
  },
};
```

**MUST** build [OAuth2 Model Specification][Model] at model in config by yourselves.

see [config/config.default.js](config/config.default.js) for more detail.

## OAuth2Server

`this.app.oauth.OAuth2Server` is the class of `OAuth2Server`.

## model

A example of model.

```js
class Model {
  constructor(options, app) {
    this.options = options;
    this.app = app;
  }

  async getClient(clientId, clientSecret) {
    return { clientId, clientSecret };
  }

  // ...
}

module.exports = Model;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-oauth/issues).

## License

[MIT](LICENSE)

[Model]: https://oauth2-server.readthedocs.io/en/latest/model/overview.html
