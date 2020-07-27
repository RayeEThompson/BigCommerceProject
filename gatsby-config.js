require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Rachael's BigCommerce Store Front`,
    description: `Rachael's Developer Advocate Project`,
    author: `Rachael E Thompson`,
  },
  plugins: [
    `gatsby-source-bigcommerce`,
    {
      resolve: "gatsby-source-bigcommerce",
      options: {
        // REQUIRED
        clientId: `${process.env.BC_CLIENTID}`,
        secret: `${process.env.BC_CLIENTSECRET}`,
        accessToken: `${process.env.BC_ACCESSTOKEN}`,
        storeHash: `${process.env.BC_STOREHASH}`,
        authToken: `${process.env.BC_AUTHTOKEN}`,
        endpoints: {
          BigCommerceProducts:
            "/catalog/products?include=images,variants,custom_fields,options,modifiers,videos",
          BigCommerceCategories: "/catalog/categories",
          BigCommerceBrands: "/catalog/brands"
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Epilogue`,
          `source sans pro\:200,400,500,800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
     `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
