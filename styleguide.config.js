const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Atoms',
      components: 'src/components/UI/atoms/**/[A-Z]*.jsx',
    },
    {
      name: 'Molecules',
      components: 'src/components/UI/molecules/**/[A-Z]*.jsx',
    },
    {
      name: 'Organisms',
      components: 'src/components/UI/organisms/**/[A-Z]*.jsx',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(
      __dirname,
      'src/styles/ThemeWrapper/index',
    ),
  },
};
