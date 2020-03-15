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
    model: './mock/oauth/model', // default: './app/extend/oauth'
    accessTokenLifetime: 7200, // default: 3600
    requireClientAuthentication: { password: false },
  },
};
```

**必须**在配置中指定的`model`中自行实现[OAuth2 Model Specification][Model]。

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-oauth/issues) 异步交流。

## License

[MIT](LICENSE)

[Model]: https://oauth2-server.readthedocs.io/en/latest/model/overview.html
