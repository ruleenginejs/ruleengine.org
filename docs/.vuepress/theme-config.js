module.exports = {
  logo: '/logo.png',
  navbar: [
    { text: 'Guide', link: '/guide/getting-started.md' },
    { text: 'API', link: '/api/' },
    { text: 'Examples', link: '/examples/' },
    { text: "GitHub", link: "https://github.com/ruleenginejs" }
  ],
  sidebar: {
    '/guide/': [
      {
        text: 'Guide',
        collapsable: true,
        children: [
          '/guide/getting-started.md'
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
