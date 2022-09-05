const { defaultTheme } = require('vuepress');
const {
  registerComponentsPlugin
} = require('@vuepress/plugin-register-components');
const path = require('path');
const themeConfig = require('./theme-config');

module.exports = {
  title: 'Rule Engine',
  description: 'Documentations, API, and FAQ for Rule Engine',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  theme: defaultTheme(themeConfig),
  plugins: [
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components')
      })
    ]
  ]
};
