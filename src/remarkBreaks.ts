import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

// Custom plugin to insert <br /> on single newlines
export default function remarkBreaks() {
  return (tree: any) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || parent.type === 'inlineCode') return;

      const parts = node.value.split('\n');
      if (parts.length > 1) {
        const newNodes = [];

        parts.forEach((part, i) => {
          newNodes.push({ type: 'text', value: part });
          if (i !== parts.length - 1) {
            newNodes.push({ type: 'break' });
          }
        });

        parent.children.splice(index, 1, ...newNodes);
      }
    });
  };
}