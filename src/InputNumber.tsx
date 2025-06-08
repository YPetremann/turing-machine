import { memo } from "react";
import { preventDefault } from "./preventDefault";

interface Props {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  name: string;
  value?: number;
  onChange: (name: string, value: (prev: number) => number) => void;
}
export const InputNumber = memo(
  ({
    top = false,
    bottom = false,
    left = false,
    right = false,
    name,
    value = 0,
    onChange,
  }: Props) => {
    const borderV = top ? "border-b-1" : bottom ? "border-t-1" : "border-y-1";
    const borderH = left ? "border-r-1" : right ? "border-l-1" : "border-x-1";

    const options = [
      "",
      "icon-[mdi--numeric-1]",
      "icon-[mdi--numeric-2]",
      "icon-[mdi--numeric-3]",
      "icon-[mdi--numeric-4]",
      "icon-[mdi--numeric-5]",
    ];
    const m = options.length;
    const setState = (fn: (p: number) => number) =>
      onChange(name, (p: number) => fn((p ?? 0) + m) % m);
    const increment = () => setState((p: number) => p + 1);
    const decrement = () => setState((p: number) => p - 1);

    return (
      <button
        type="button"
        className={`w-12.25 h-10 flex items-center justify-center border-emerald-500 ${borderV} ${borderH}`}
        onClick={increment}
        onContextMenu={preventDefault(decrement)}
      >
        <span
          className={`col-span-full row-span-full w-8 h-8 ${options[value]}`}
        />
      </button>
    );
  },
);
