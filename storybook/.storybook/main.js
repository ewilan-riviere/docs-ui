module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    // '../../libs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    'storybook-dark-mode', // https://github.com/hipstersmoothie/storybook-dark-mode
  ],
  core: {
    builder: '@storybook/builder-vite', // https://github.com/storybookjs/builder-vite
  },
  framework: '@storybook/vue3',
}
