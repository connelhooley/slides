import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Notes from "reveal.js/plugin/notes/notes";

const Presentations = ({data}) => {
  const ref = useRef();
  useEffect(() => {
    const deck = new Reveal(ref.current, { plugins: [Highlight, Notes] });
    deck.initialize();
    return () => deck.destroy();
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
