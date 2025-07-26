module.exports = {
  title: 'My Docusaurus Website',
  tagline: 'A website to list events',
  url: 'https://yourwebsite.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-github-username',
  projectName: 'my-docusaurus-website',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/your-github-username/my-docusaurus-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/my-docusaurus-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'My Docusaurus Website',
      items: [
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {to: 'events', label: 'Events', position: 'left'},
        {to: 'https://github.com/your-github-username/my-docusaurus-website', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-github-username/my-docusaurus-website',
            },
          ],
        },
      ],
    },
  },
};