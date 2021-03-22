const config = {
  siteMetadata: {
    title: 'Maturitní Projekt',
    siteUrl: 'https://www.a2017brebfi.delta-www.cz/maturita',
  },
  assetPrefix: '/maturita',
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-typescript',
    'gatsby-plugin-asset-path',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    `gatsby-plugin-split-css`,
    `gatsby-plugin-tsconfig-paths`,
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-preact',

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Inter`,
              variants: ['500', '700', '900'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.a2017brebfi.delta-www.cz/maturita',
        sitemap: 'https://www.a2017brebfi.delta-www.cz/maturita/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-seo',
      options: {
        siteName: 'Maturitní projekt',
        defaultSiteImage: '/icon.png',
        siteUrl: 'https://www.a2017brebfi.delta-www.cz/maturita',
        twitterCreator: '@tvujdezert',
        htmlLanguage: 'cs',
        locale: 'cs_CZ',
        twitterSite: '@tvujdezert',
      },
    },
  ],
};

export default config;
