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
    model: './mock/oauth/model', // default: './app/extend/oauth'
    accessTokenLifetime: 7200, // default: 3600
    requireClientAuthentication: { password: false },
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-oauth/issues).

## License

[MIT](LICENSE)
