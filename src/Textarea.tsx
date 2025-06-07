import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Icon } from "@iconify/react";
import remarkDirective from "remark-directive";
import { iconDirectivePlugin } from "./iconDirectivePlugin";

export function Textarea({
  name = "",
  title,
  top = false,
  middle = false,
  bottom = false,
  left = false,
  right = false
}) {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const borderV = top ? "border-b-1" : bottom ? "border-t-1" : "border-y-1"
  const borderH = left ? "border-r-1" : "border-l-1"
  let side = "pl-10"
  if (left) side = "pl-7"
  if (right) side = "pl-12"
  return <td className={`border-emerald-500 ${borderV} ${borderH}`}>
    <label className="grid gap-2">
      <span className="col-span-full row-span-full pl-1 text-emerald-600">{title}</span>
      {!focused && (
        <div className="col-span-full row-span-full prose pl-5">
          <ReactMarkdown
            remarkPlugins={[
              remarkGfm,
              remarkDirective,
              iconDirectivePlugin
            ]}
          >
            {input}
          </ReactMarkdown>
        </div>
      )}
      <textarea
        className={`col-span-full row-span-full w-full pl-5 resize-none ${focused ? '' : 'opacity-0'}`}
        rows={6}
        name={name}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </label>
  </td>
}
