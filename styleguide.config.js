const path = require('path');

module.exports = {
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
  ],
  styleguideComponents: {
    Wrapper: path.join(
      __dirname,
      'src/styles/ThemeWrapper/index',
    ),
  },
};
