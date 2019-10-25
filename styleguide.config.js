const path = require('path');
const commonWebpackConfig = require('./webpack/common');

module.exports = {
  webpackConfig: Object.assign({}, commonWebpackConfig, {}),
  sections: [
    {
      name: 'Atoms',
      components: 'src/components/ui/atoms/**/[A-Z]*.jsx',
    },
    {
      name: 'Molecules',
      components: 'src/components/ui/molecules/**/[A-Z]*.jsx',
    },
    {
      name: 'Organisms',
      components: 'src/components/ui/organisms/**/[A-Z]*.jsx',
    },
    {
      name: 'Layout',
      components: 'src/components/ui/Layout/[A-Z]*.jsx',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(
      __dirname,
      'src/styles/ThemeWrapper/index',
    ),
  },
};
