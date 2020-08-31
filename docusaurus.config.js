module.exports = {
  title: 'Mol LeArt',
  tagline: 'The future of art sales.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Mol LeArt', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap",
    "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
  ],
  themeConfig: {
    navbar: {
      title: 'Mol LeArt',
      logo: {
        alt: 'Mol LeArt Logo',
        src: '',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Mol-LeArt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hxgBHZP',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MolLeArt',
            },
            {
              label: 'DAO',
              href: 'https://pokemol.com/dao/0x1ea84b986ee08b68d37bfe07c7564b84dee40bd6/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Mol-LeArt',
            },
          ],
        },
      ],
      copyright: `Content is licensed under CC BY-SA 4.0`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
