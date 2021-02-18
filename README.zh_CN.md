# egg-oauth

[node-oauth2-server](https://github.com/oauthjs/node-oauth2-server) Egg.js 插件。

## 安装插件

```bash
npm i @axolo/egg-oauth --save
```

## 开启插件

```js
// config/plugin.js
exports.oauth = {
  enable: true,
  package: '@axolo/egg-oauth',
};
```

## 详细配置

```js
exports.oauth = {
  client: {
    OAuth2Sever: require('oauth2-server'), // user defined oauth2-server version
    model: require('./oauth-model'), // model require
    accessTokenLifetime: 7200, // default: 3600
    requireClientAuthentication: { password: false },
  },
};
```

**必须**在配置中指定的`model`中自行实现[OAuth2 Model Specification][Model]。

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 成员

|     成员     |           说明            |
| ------------ | ------------------------- |
| OAuth2Server | `OAuth2Server`类          |
| Response     | `OAuth2Server.Response`类 |
| Request      | `OAuth2Server.Request`类  |

## model

`model`样例

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

- 在`model`中获取`request`

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-oauth/issues) 异步交流。

## License

[MIT](LICENSE)

[Model]: https://oauth2-server.readthedocs.io/en/latest/model/overview.html
