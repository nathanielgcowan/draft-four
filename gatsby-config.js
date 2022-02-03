require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Nathaniel`,
    siteTitleAlt: `Nathaniel - Full Stack Web Developer`,
    siteHeadline: `Nathaniel - Full Stack Web Developer`,
    siteUrl: `https://draftfourmain.gatsbyjs.io/`,
    siteDescription: `Portfolio site of my work.`,
    siteLanguage: `en`,
    siteImage: `/bannerreplace.jpg`,
    author: `@Nathani28979817`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nathaniel - @lNathani28979817/PersonalPortfolio`,
        short_name: `Nathaniel`,
        description: `Hi everybody. This is my portfolio.`,
        start_url: `/`,
        background_color: `#7DDB7D`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/Nlogo.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/Nlogo.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
