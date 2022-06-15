module.exports = {
  siteMetadata: {
    title: "Slides",
    siteUrl: "https://slides.connelhooley.uk",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: "Connel Hooley Slides",
        short_name: "{C.H}",
        background_color: "#f8bb15",
        theme_color: "#ffffff",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "presentations",
        path: `${__dirname}/src/presentations/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-mermaid",
            options: {
              theme: "dark",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [],
            },
          },
          "gatsby-remark-revealjs-sections",
        ],
      },
    },
  ],
};
