module.exports = {
  logo: '/logo.png',
  navbar: [
    { text: 'Guide', link: '/guide/getting-started.md' },
    { text: 'API', link: '/api/' },
    { text: 'Examples', link: '/examples/' },
    { text: "GitHub", link: "https://github.com/ruleenginejs/ruleengine" }
  ],
  sidebar: [
    {
      text: 'Guide',
      collapsable: false,
      children: [
        '/guide/getting-started.md'
      ]
    }
  ]
};
