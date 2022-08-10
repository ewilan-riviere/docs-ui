module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // 'storybook-dark-mode', // https://github.com/hipstersmoothie/storybook-dark-mode
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite', // https://github.com/storybookjs/builder-vite
  },
  features: {
    storyStoreV7: true,
  },
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },
}
