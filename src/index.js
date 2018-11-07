const request = require('NeteaseCloudMusicApi/util/request');

const { join } = require('path');
const { existsSync, readdirSync } = require('fs');

// 可用模块分析
const j = path => join(__dirname, `../${path}/NeteaseCloudMusicApi/module`);
const [modulePath = ''] = [
  j('..'),
  j('node_modules')
].filter(p => existsSync(p));
const modules = readdirSync(modulePath).filter(p => p.endsWith('.js')).map(p => p.replace(/.js$/, ''));

// 加载模块方法
const makeFn = (module) => {
  if (modules.includes(module)) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const mod = require(join(modulePath, module));
    return (data = {}) => {
      if (!data.cookie) {
        Object.assign(data, { cookie: {} });
      }
      return mod(data, request);
    };
  }
  return () => undefined;
};

const makeProxy = module => new Proxy({}, {
  get: (_, subModule) => makeFn(`${module}_${subModule}`)
});

module.exports = new Proxy({}, {
  get: (_, property) => {
    const fn = makeFn(property);
    Object.setPrototypeOf(fn, makeProxy(property));
    return fn;
  }
});
