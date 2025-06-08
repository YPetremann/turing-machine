import type { Break, Text } from "mdast";
import type { Node, Parent } from "unist";
import { visit } from "unist-util-visit";

const br: Break = { type: "break" };
export default () => (tree: Node) =>
  visit(tree, "text", (node: Text, index: number, parent: Parent) => {
    if (!parent || parent.type === "inlineCode") return;
    const parts: Text[] = node.value
      .split("\n")
      .map((value) => ({ type: "text", value }));
    const newNodes: Node[] = [];
    let first = true;
    for (const part of parts) {
      if (first) first = false;
      else newNodes.push(br);
      newNodes.push(part);
    }
    parent.children.splice(index, 1, ...newNodes);
  });
