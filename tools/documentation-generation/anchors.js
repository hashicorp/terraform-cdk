const unified = require("unified").unified;
const remarkParse = require("remark-parse").default;
const visit = require("unist-util-visit").visit;
const remarkStringify = require("remark-stringify").default;

function getAnchors(content) {
  const anchors = [];

  function findAllAnchors() {
    return function (tree) {
      // This assumes we visit the tree in order
      visit(tree, function (node) {
        console.log(node);
      });
    };
  }

  unified()
    .use(remarkParse)
    .use(findAllAnchors)
    .use(remarkStringify) // This is just needed so that the process run works fine
    .processSync(content);
  return anchors;
}

function replaceAnchorsWithLinks(content, anchorMap) {}

module.exports = {
  getAnchors,
  replaceAnchorsWithLinks,
};
