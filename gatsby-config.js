/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `scrtstsh-develop`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // plugins: ["gatsby-plugin-sass"]
  plugins: [
    {
      resolve: "gatsby-plugin-sass"
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/scripts.js',
      },
    },
  ]
};