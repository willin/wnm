# wnm

一个好用的网易云音乐 Node.js SDK。

[![npm](https://img.shields.io/npm/v/wnm.svg)](https://npmjs.org/package/wnm) [![npm](https://img.shields.io/npm/dm/wnm.svg)](https://npmjs.org/package/wnm) [![npm](https://img.shields.io/npm/dt/wnm.svg)](https://npmjs.org/package/wnm) [![codebeat badge](https://codebeat.co/badges/e383cce6-b9ed-4486-bb67-49d6480b1647)](https://codebeat.co/projects/github-com-willin-wnm-master) [![Maintainability](https://api.codeclimate.com/v1/badges/23af50d6727b51e82425/maintainability)](https://codeclimate.com/github/willin/wnm/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/23af50d6727b51e82425/test_coverage)](https://codeclimate.com/github/willin/wnm/test_coverage) [![Build Status](https://travis-ci.org/willin/wnm.svg?branch=master)](https://travis-ci.org/willin/wnm)

## 安装使用

国际惯例：

```bash
npm install wnm --save
# 或者
yarn add wnm
```

示例：

```js
const SDK = require('wnm');

// 请求： comment/hot
SDK.comment.hot({
  id: 400162138,
  type: 0
}).then(console.log);

// 请求： user/detail
SDK.user.detail({
  uid: 32953014
}).then(console.log);

// 请求： toplist
SDK.toplist({
  cookie: { os: 'pc' }
}).then(console.log);
```

## 接口文档

参考： <https://binaryify.github.io/NeteaseCloudMusicApi>

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
