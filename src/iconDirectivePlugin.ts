// iconDirectivePlugin.js
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import { Icon } from "@iconify/react";

const iconMap = {
  T: "icon-[uim--triangle] text-blue-400",
  B: "icon-[uim--triangle] text-blue-400",
  S: "icon-[uim--square] text-yellow-400",
  R: "icon-[uim--square] text-yellow-400",
  Y: "icon-[uim--square] text-yellow-400",
  J: "icon-[uim--square] text-yellow-400",
  C: "icon-[uim--circle] text-purple-800",
  P: "icon-[uim--circle] text-purple-800",
  V: "icon-[uim--circle] text-purple-800",
};

export function iconDirectivePlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if(node.type!=='textDirective') return;
      if(Object.keys(node.attributes).length>0) return
      if(Object.keys(node.children).length>0) return
      const icon = iconMap[node.name];
      if (!icon) return
      console.log(node)

      node.data = {
        hName: "span",
        hProperties: {className: icon+" align-sub"},
      };
    });
  };
}
