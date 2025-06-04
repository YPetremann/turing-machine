import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { preventDefault } from "./preventDefault";

export function InputNumber({ name = "" }) {
  const input = React.useRef<HTMLInputElement>(null);
  const setState = (fn: (p: number) => number) => {
    if (!input.current) return;
    input.current.value = `${fn(+input.current.value + 6) % 6}`;
  };
  const cycle = () => setState((p: number) => p + 1);
  const counterCycle = () => setState((p: number) => p - 1);
  return <button
    type="button"
    className="w-12.25 h-9.75 flex items-center justify-center"
    onClick={cycle}
    onContextMenu={preventDefault(counterCycle)}
  >
    <input ref={input} type="hidden" name={name} />
    <Icon className="display-1" icon="mdi:numeric-one" width="30" height="30" />
    <Icon className="display-2" icon="mdi:numeric-two" width="30" height="30" />
    <Icon className="display-3" icon="mdi:numeric-three" width="30" height="30" />
    <Icon className="display-4" icon="mdi:numeric-four" width="30" height="30" />
    <Icon className="display-5" icon="mdi:numeric-five" width="30" height="30" />
  </button>;
}
