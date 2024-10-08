/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: `@gatsbyjs`,
    siteUrl: `https://tu_nombre_de_usuario.github.io/kucharski_portafolio`, // Cambia esto a tu URL de GitHub Pages
    pathPrefix: `/kucharski_portafolio`, // Cambia esto al nombre de tu repositorio
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Asegúrate de que este icono esté también en su lugar
      },
    },
  ],
}
