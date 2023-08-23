module.exports = {
  siteMetadata: {
    title: `The INscribed city: urban structures and interaction in imperial ROME`,
    description: `The Inscribed city urban structures and interaction in imperial ROME`,
    author: `@iacopini`,
    copyright: `© Scuola Normale Superiore 2023`,
  },
  pathPrefix: `/inrome`,
  plugins: [
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: `https://inrome.bdus.cloud`, // Fill with your Directus instance address
        auth: {
          token: "kLomRx_qlB0hfdr0g9w0DxC1TD3ccSGS", // You can use a static token from an user

          // Or you can use the credentials of an user
          // email: "johndoe@directus.cloud",
          // password: "mysecretpassword",
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
