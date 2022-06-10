const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "thematicBreak", (node) => {
    node.type = "html"
    node.value = "</section><section>";
  });
  visit(markdownAST, "root", (node) => {
    const opening = {
      type: "html",
      value: "<section>",
    };
    const closing = {
      type: "html",
      value: "</section>",
    };
    node.children = [opening, ...node.children, closing];
  });
  return markdownAST;
};
