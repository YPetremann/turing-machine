import { memo } from "react";
import { preventDefault } from "./preventDefault";

interface Props {
  title: string;
  name: string;
  value?: number;
  onChange: (name: string, value: (prev: number) => number) => void;
}
export const CheckNumber = memo(({ title, name, value = 0, onChange }:Props) => {
  const options = ["", "icon-[uil--times]", "icon-[uil--circle]"];
  const m = options.length;
  const setState = (fn: (p:number) => number) =>
    onChange(name, (p: number) => fn((p ?? 0) + m) % m);
  const increment = () => setState((p: number) => p + 1);
  const decrement = () => setState((p: number) => p - 1);

  return (
    <button
      type="button"
      className="w-13 h-11 items-center justify-center grid"
      onClick={increment}
      onContextMenu={preventDefault(decrement)}
    >
      <span
        className={`col-span-full row-span-full w-12 h-12 icon-[mdi--numeric-${title}] text-emerald-600`}
      />
      <span
        className={`col-span-full row-span-full w-12 h-12 ${options[value]}`}
      />
    </button>
  );
});
