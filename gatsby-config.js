module.exports = {
  siteMetadata: {
    title: `CO2TAL - Constructions`,
    description: `Provide you The Best Climate Solutions in Constructions`,
    author: `@webexpress`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#033068`,
        theme_color: `#033068`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Archivo`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        fonts: [
          `Archivo Black`,
          `source sans pro\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
