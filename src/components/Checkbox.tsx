import { memo } from "react";
import { preventDefault } from "../utils/preventDefault";

interface Props {
  name: string;
  value?: number;
  onChange: (name: string, value: (prev: number) => number) => void;
}

export const Checkbox = memo(({ name, value = 0, onChange }: Props) => {
  const options = ["", "icon-[uil--check]", "icon-[uil--times]"];
  const m = options.length;

  const setState = (fn: (p: number) => number) =>
    onChange(name, (p: number) => fn((p ?? 0) + m) % m);
  const increment = () => setState((p: number) => p + 1);
  const decrement = () => setState((p: number) => p - 1);

  return (
    <button
      type="button"
      className={"w-12 h-10 ml-1 grid items-center justify-items-center"}
      onClick={increment}
      onContextMenu={preventDefault(decrement)}
    >
      <span
        className={"col-span-full row-span-full w-8 h-8 icon-[uil--square-shape] text-emerald-600"}
      />
      <span className={`col-span-full row-span-full w-8 h-8 ${options[value]}`} />
    </button>
  );
});
