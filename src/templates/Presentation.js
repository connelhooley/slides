import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";

const Presentations = ({data}) => {
  const ref = useRef();
  useEffect(() => {
    const cb = async () => {
      if (window.navigator) {
        const Reveal = (await import("reveal.js")).default;
        const Highlight = (await import("reveal.js/plugin/highlight/highlight")).default;
        const Notes = (await import("reveal.js/plugin/notes/notes")).default;
        const deck = new Reveal(ref.current, { plugins: [Highlight, Notes] });
        deck.initialize();
        return () => deck.destroy();
      }
    };
    cb();
  }, []);
  return (
    <>
      <title>{data.markdownRemark.frontmatter.title}</title>
      <div ref={ref} className="reveal">
        <div className="slides" dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
      </div>
    </>
  );
};

export default Presentations;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {slug: {eq: $slug}}
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`;
