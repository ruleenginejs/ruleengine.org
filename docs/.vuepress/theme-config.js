module.exports = {
  logo: '/logo.png',
  navbar: [
    { text: 'Guide', link: '/guide/quick-start.md' },
    { text: 'API', link: '/api/' },
    { text: 'Examples', link: '/examples/' },
    { text: 'GitHub', link: 'https://github.com/ruleenginejs' }
  ],
  sidebar: {
    '/guide/': [
      {
        text: 'Getting Started',
        collapsable: true,
        children: ['/guide/introduction.md', '/guide/quick-start.md']
      },
      {
        text: 'Essentials',
        collapsable: true,
        children: [
          '/guide/essentials/pipelines.md',
          '/guide/essentials/rule-editor.md',
          '/guide/essentials/compilation.md',
          '/guide/essentials/rule-file.md',
          '/guide/essentials/webpack-loader.md',
          '/guide/essentials/rollup-plugin.md'
        ]
      }
    ],
    '/api/': [
      {
        text: 'API Reference',
        collapsable: true,
        children: []
      }
    ],
    '/examples/': [
      {
        text: 'Examples',
        collapsable: true,
        children: []
      }
    ]
  }
};
