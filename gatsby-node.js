/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      directus {
        cms_articles(filter: { status: { _eq: "published" } }) {
          id
          title
          title_it
          slug
          summary
          summary_it
          text
          text_it
          status
          template
        }
      }
    }
  `)

  data.directus.cms_articles.forEach(art => {
    actions.createPage({
      path: `it/${art.slug}`,
      component: require.resolve(`./src/templates/${art.template}.js`),
      context: {
        slug: art.slug,
        lang: "it",
      },
    })
    actions.createPage({
      path: `en/${art.slug}`,
      component: require.resolve(`./src/templates/${art.template}.js`),
      context: {
        slug: art.slug,
        lang: "en",
      },
    })
  })
}
