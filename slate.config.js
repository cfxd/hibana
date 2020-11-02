const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  'webpack.extend': config => {
    return {
      plugins: [
        new CopyWebpackPlugin([
          {
            from: path.resolve(('src'), 'svgs'),
            to: `${path.resolve('./dist/snippets')}/[name].liquid`,
          },
        ]),
      ],
    };
  },
};
