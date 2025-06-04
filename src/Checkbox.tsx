import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { preventDefault } from "./preventDefault";

export function Checkbox({ name = "" }) {
  const input = React.useRef<HTMLInputElement>(null);
  const setState = (fn: (p: number) => number) => {
    if (!input.current) return;
    input.current.value = `${fn(+input.current.value + 3) % 3}`;
  };

  const cycle = () => setState((p: number) => p + 1);
  const counterCycle = () => setState((p: number) => p - 1);
  return <button
    type="button"
    className="w-12 h-9.75 flex items-center justify-center"
    onClick={cycle}
    onContextMenu={preventDefault(counterCycle)}
  >
    <input ref={input} type="hidden" name={name} />
    <Icon className="display-1" icon="uil:check" width="30" height="30" />
    <Icon className="display-2" icon="uil:times" width="30" height="30" />
  </button>;
}
