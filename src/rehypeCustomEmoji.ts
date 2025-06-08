import { h } from "hastscript";
import type { Text } from "mdast";
import type { Node, Parent } from "unist";
import { visit } from "unist-util-visit";

export type Emojis = Record<string, string>;
const emojis: Emojis = {
  T: "icon-[uim--triangle] text-blue-400 align-sub",
  R: "icon-[uim--square] text-yellow-400 align-sub",
  C: "icon-[uim--circle] text-purple-800 align-sub",
};

function createEmoji(name: string, emojis: Emojis) {
  const emoji = emojis[name];
  if (!emoji) return;
  const gridCss = "inline-grid items-center justify-items-center";
  const stackCss = "col-span-full row-span-full";
  return h("span", { class: `${gridCss} bg-white` }, [
    h("span", { class: `${stackCss} text-transparent` }, `;${name};`),
    h("span", { class: `${stackCss} ${emoji}` }),
  ]);
}

const visitor = (node: Text, index: number, parent: Parent) => {
  const regex = /:([a-zA-Z0-9_+-]+):/g;
  const matches = [...node.value.matchAll(regex)];

  if (matches.length === 0) return;

  const children: Node[] = [];
  let lastIndex = 0;

  for (const match of matches) {
    const [full, name] = match;
    const start = match.index;
    const end = start + full.length;
    const emoji = createEmoji(name, emojis);
    if (!emoji) continue;
    if (start > lastIndex) {
      const value = node.value.slice(lastIndex, start);
      children.push({ type: "text", value } as Text);
    }
    children.push(emoji);
    lastIndex = end;
  }
  if (lastIndex < node.value.length) {
    const value = node.value.slice(lastIndex);
    children.push({ type: "text", value } as Text);
  }
  parent.children.splice(index, 1, ...children);
};

export default () => (tree: Node) => visit(tree, "text", visitor);
