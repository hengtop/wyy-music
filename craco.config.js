const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

/* 配置文件路径别名 */
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    devServer: {
      historyApiFallback: true
    }
  }
};
