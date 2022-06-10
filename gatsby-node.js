const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const path = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: path,
    });
  }
};

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach((edge) => {
    const { slug } = edge.node.fields;
    createPage({
      path: slug,
      component: require.resolve("./src/templates/Presentation.js"),
      context: { slug },
    });
  });
};
