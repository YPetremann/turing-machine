import React, { memo, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Icon } from "@iconify/react"
import rehypeCustomEmoji from "./rehypeCustomEmoji"
import { useFocus } from "./FocusContext"
import remarkBreaks from "./remarkBreaks"

export const Textarea = memo(({
  title,
  top = false,
  middle = false,
  bottom = false,
  left = false,
  right = false,
  name, value="", onChange
}) => {
  const [, onFocus, onBlur] = useFocus()
  const [focused, setFocused] = useState(false)
  const borderV = top ? "border-b-1" : bottom ? "border-t-1" : "border-y-1"
  const borderH = left ? "border-r-1" : right ? "border-l-1" : "border-x-1"

  return <div className={`border-emerald-500 ${borderV} ${borderH}`}>
    <label className="grid gap-2">
      <span className="col-span-full row-span-full pl-1 text-emerald-600">{title}</span>
      <div className={`col-span-full row-span-full prose pl-5 pointer-events-none ${focused ? 'opacity-75 text-transparent' : ''}`}>
        <ReactMarkdown
          remarkPlugins={[
            remarkBreaks,
            remarkGfm,
          ]}
          rehypePlugins={[
            rehypeCustomEmoji,
          ]}
        >
          {value}
        </ReactMarkdown>
      </div>
      <textarea
        className={`col-span-full row-span-full w-full pl-5 resize-none ${focused ? '' : 'opacity-0'}`}
        rows={10}
        name={name} value={value} onChange={(e) => onChange(name, e.target.value)}
        onFocus={(e) => { setFocused(true); onFocus(e.target) }}
        onBlur={(e) => { setFocused(false); onBlur(e.target) }}
        placeholder="Ecrit :T: :R: :C: pour triangles, carrés et cercles."
      />
    </label>
  </div>
})
