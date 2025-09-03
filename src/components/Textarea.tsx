import React from "react";
import { useFocus } from "../contexts/FocusContext";
import { customEmoji } from "../transformers/customEmoji";
import { keepSpaces } from "../transformers/keepSpaces";
import { lineBreak } from "../transformers/lineBreak";
import { Transformer } from "./Transformer";
interface Props {
  title: string;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}
export const Textarea = React.memo(
  ({
    title,
    top = false,
    bottom = false,
    left = false,
    right = false,
    name,
    value = "",
    onChange,
  }: Props) => {
    const [, onFocus, onBlur] = useFocus();
    const [focused, setFocused] = React.useState(false);
    const borderV = top ? "border-b-1" : bottom ? "border-t-1" : "border-y-1";
    const borderH = left ? "border-r-1" : right ? "border-l-1" : "border-x-1";

    return (
      <div className={`border-emerald-500 ${borderV} ${borderH}`}>
        <label className="grid gap-2">
          <span className="col-span-full row-span-full pl-1 text-emerald-600">{title}</span>
          <div
            className={`col-span-full row-span-full prose pl-5 pointer-events-none ${focused ? "opacity-75 text-transparent" : ""}`}
          >
            <Transformer plugins={[lineBreak, keepSpaces, customEmoji]} value={value}/>
          </div>
          <textarea
            className={`col-span-full row-span-full w-full pl-5 resize-none ${focused ? "" : "opacity-0"}`}
            rows={9}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            onFocus={(e) => {
              setFocused(true);
              onFocus(e.target.name);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur(e.target.name);
            }}
            placeholder="Ecrit :T: :R: :C: pour triangles, carrés et cercles."
          />
        </label>
      </div>
    );
  },
);
