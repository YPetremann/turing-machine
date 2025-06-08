import { Icon } from "@iconify/react/dist/iconify.js";
import React, { memo } from "react";
import { preventDefault } from "./preventDefault";

export const CheckNumber=memo(({ title="", name, value = 0, onChange }) =>{
  const options=["","icon-[uil--times]","icon-[uil--circle]"]
  const m=options.length;
  const setState = (fn)=>onChange(name,(p)=>fn((p??0) + m) % m);
  const increment = () => setState((p) => p + 1);
  const decrement = () => setState((p) => p - 1);

  return <button
      type="button"
      className="w-13 h-11 flex items-center justify-center grid"
      onClick={increment}
      onContextMenu={preventDefault(decrement)}
    >
      <span className={`col-span-full row-span-full w-12 h-12 icon-[mdi--numeric-${title}] text-emerald-600`} />
      <span className={`col-span-full row-span-full w-12 h-12 ${options[value]}`} />
    </button>
})
