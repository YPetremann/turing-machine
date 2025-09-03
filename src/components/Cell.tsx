import { memo } from "react";
import { preventDefault } from "../utils/preventDefault";

interface Props {
  icon:string;
  options: string[];
  title?: string;
  auto?: string|false

  name: string;
  value?: number;
  onChange: (name: string, value: (prev: number) => number) => void;
}
export const Cell = memo(({ title, icon, options, auto, name, value = 0, onChange }: Props) => {
  const m = options.length;
  const setState = (fn: (p: number) => number) =>
    onChange(name, (p: number) => fn((p ?? 0) + m) % m);
  const increment = () => setState((p: number) => p + 1);
  const decrement = () => setState((p: number) => p - 1);

  return (
    <button
      type="button"
      className="grid items-center justify-center"
      onClick={increment}
      onContextMenu={preventDefault(decrement)}
      title={title}
    >
      <span className={`col-span-full row-span-full ${icon}`} />
      <span className={`col-span-full row-span-full ${options[value] || auto || ""}`} />
    </button>
  );
});
