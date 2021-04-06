const path = require(`path`)
const chunk = require(`lodash/chunk`)

exports.createPages = async gatsbyUtilities  => {
  const { graphql, actions, reporter } = gatsbyUtilities
  const { createPage } = actions
  const posts = await getNodes(graphql, reporter)

  await createBlogPostArchive(posts, gatsbyUtilities)

  // query content for WordPress pages
  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const homeTemplate = path.resolve(`./src/templates/home.js`);
  const pageTemplate = path.resolve(`./src/templates/page.js`);
  // const postTemplate = path.resolve(`./src/templates/post.js`)

  const getTemplate = (uri) => {
    if (uri === '/') {
      return homeTemplate;
    }

    return pageTemplate;
  };

  allPages.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.uri,
      // specify the component template of your choice
      component: getTemplate(page.uri),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    });
  })
}


/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
 async function getNodes(graphql, reporter) {
  const graphqlResult = await graphql(/* GraphQL */ `
  query WpPosts {
    allWpPost(sort: {fields: [date], order: DESC}) {
      edges {
        post: node {
          __typename
          id
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
              altText
            }
          }
          title
          seo {
            title
            metaDesc
            canonical
          }
          content
          excerpt
        }
      }
    }
  }  
`)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return [
    ...graphqlResult.data.allWpPost.edges,
  ]
}


/**
 * This function creates all the individual blog pages in this site
 */
 async function createBlogPostArchive(posts, gatsbyUtilities) {
   try {
    const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
      {
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `)

    const { postsPerPage } = graphqlResult.data.wp.readingSettings;
    const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);
    const totalPages = postsChunkedIntoArchivePages.length;
    const blogTemplate = path.resolve(`./src/templates/blog.js`);

    return Promise.all(
      postsChunkedIntoArchivePages.map(async (_posts, index) => {
        const pageNumber = index + 1;

        const getPagePath = page => {
          if (page > 0 && page <= totalPages) {
            // Since our homepage is our blog page
            // we want the first page to be "/" and any additional pages
            // to be numbered.
            // "/blog/2" for example
            return page === 1 ? `/blog/` : `/blog/${page}`
          }

          return null
        }

        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        await gatsbyUtilities.actions.createPage({
          path: getPagePath(pageNumber),

          // use the blog post archive template as the page component
          component: blogTemplate,

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // the index of our loop is the offset of which posts we want to display
            // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
            // etc
            offset: index * postsPerPage,

            // We need to tell the template how many posts to display too
            postsPerPage,

            nextPagePath: getPagePath(pageNumber + 1),
            previousPagePath: getPagePath(pageNumber - 1),
          },
        })
      })
    )
   } catch(e) {
    console.log(e);
   }
}
