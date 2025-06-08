import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

const defaultEmojis = {
  T: `icon-[uim--triangle] text-blue-400 align-sub`,
  R: `icon-[uim--square] text-yellow-400 align-sub`,
  C: `icon-[uim--circle] text-purple-800 align-sub`,
}

function createEmoji(name, emojis) {
  const emoji = emojis[name]
  if (!emoji) return
  return h("span", {class:"inline-grid items-center justify-items-center bg-white"}, [
    h("span", {class:"col-span-full row-span-full text-transparent"}, `;${name};`),
    h("span", {class:`col-span-full row-span-full ${emoji}`})
  ])
}

export default function rehypeCustomEmoji(options = {}) {
  const { emojis = defaultEmojis } = options

  return function transformer(tree) {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /:([a-zA-Z0-9_+-]+):/g
      const matches = [...node.value.matchAll(regex)]

      if (matches.length === 0) return

      const children = []
      let lastIndex = 0

      for (const match of matches) {
        console.log(match)
        const [full, name] = match
        const start = match.index
        const end = start + full.length
        const emoji = createEmoji(name, emojis)
        if (!emoji) continue
        if (start > lastIndex)
          children.push({ type: 'text', value: node.value.slice(lastIndex, start) })
        children.push(emoji)
        lastIndex = end
      }
      if (lastIndex < node.value.length)
        children.push({ type: 'text', value: node.value.slice(lastIndex) })
      parent.children.splice(index, 1, ...children)
    })
  }
}
