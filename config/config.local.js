

const path = require('path');

module.exports = app => {
  const exports = {};

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: [ 'plugins' ], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: [ 'app/web', 'public', 'config' ] // 指定过滤的目录（包括子目录）
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  exports.vuewebpackdev = {
    build: {
      port: 8090,
      commonsChunk: [ 'vendor' ]
    },
    env: {
      dev: {
        uglifyJs: false
      },
      test: {
        uglifyJs: false,
        uglifyJsConfig: {
          compress: {
            drop_console: false,
            drop_debugger: false
          }
        }
      },
      prod: {
        uglifyJs: true,
        serverBundleExclude: []
      }
    }
  };

  return exports;
};
