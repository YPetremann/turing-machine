import { Icon } from "@iconify/react/dist/iconify.js";
import React, { memo } from "react";
import { preventDefault } from "./preventDefault";

export const Checkbox=memo(({ fill, name, value = 0, onChange }) => {
  const options=["","icon-[uil--check]","icon-[uil--times]"]
  const m=options.length;
  const setState = (fn)=>onChange(name,(p)=>fn((p??0) + m) % m);
  const increment = () => setState((p) => p + 1);
  const decrement = () => setState((p) => p - 1);

  return <button
    type="button"
    className={`w-12 h-10 ml-1 grid items-center justify-items-center`}
    onClick={increment}
    onContextMenu={preventDefault(decrement)}
  >
    <span className={`col-span-full row-span-full w-8 h-8 icon-[uil--square-shape] text-emerald-600`} />
    <span className={`col-span-full row-span-full w-8 h-8 ${options[value]}`} />
  </button>;
})
