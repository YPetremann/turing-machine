import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { preventDefault } from "./preventDefault";

export function CheckNumber({ name = "",title="" }) {
  const input = React.useRef<HTMLInputElement>(null);
  const setState = (fn: (p: number) => number) => {
    if (!input.current) return;
    input.current.value = `${fn(+input.current.value + 3) % 3}`;
  };

  const cycle = () => setState((p: number) => p + 1);
  const counterCycle = () => setState((p: number) => p - 1);

  return <button
      type="button"
      className="w-13 h-12.75 flex items-center justify-center grid"
      onClick={cycle}
      onContextMenu={preventDefault(counterCycle)}
    >
      <Icon icon={`mdi:numeric-${title}`} width="50" height="50" className="col-span-full row-span-full text-emerald-600"/>
      <input ref={input} type="hidden" name={name} />
      <Icon icon="uil:times" width="50" height="50" className="col-span-full row-span-full display-1" />
      <Icon icon="uil:circle" width="50" height="50" className="col-span-full row-span-full display-2" />
    </button>
}
