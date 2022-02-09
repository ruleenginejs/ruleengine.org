const { path } = require('@vuepress/utils')
const themeConfig = require('./theme-config');

module.exports = {
  title: 'Rule Engine',
  description: 'Documentations, API, and FAQ for Rule Engine',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  themeConfig,
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      }
    ]
  ]
}
