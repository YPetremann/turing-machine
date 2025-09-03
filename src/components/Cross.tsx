import { Cell } from "./Cell";

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

const COLORS: Record<string, string> = {
  "T": "text-blue-400",
  "R": "text-yellow-400",
  "C": "text-purple-800"
}
type Key = { lx: string, ly: string, key: string }
const SETS: { x: string; y: string; className: string, keys: Key[] }[] = [
  { x: "C", y: "R", className: "col-1 row-1" },
  { x: "C", y: "T", className: "col-2 row-1" },
  { x: "T", y: "R", className: "col-1 row-2" }
].map((set) => {
  const keys = range(5).flatMap(x => range(5).map(y => {
    const lx = set.x + x
    const ly = set.y + y
    const key = `${lx}-${ly}`

    return { lx, ly, key }
  }))

  return { ...set, keys }
})

const OPTIONS = ["", "icon-[uil--times]"]

type CrossProps = {
  name: string;
  value?: Record<string, number>;
  deduct?: Record<string, number>;
  onChange: (name: string, fn: (p: number) => number) => void;
};

export function Cross({ name, value, deduct, onChange }: CrossProps) {
  value ??= {};
  deduct ??= {};
  return SETS.map((set) => (
    <div key={set.x + set.y} className={`grid grid-cols-6 grid-flow-dense ${set.className}`}>
      <span className="col-1 row-1" />

      <span className={`col-2 row-1 icon-[mdi--numeric-1] ${COLORS[set.x]}`} />
      <span className={`col-3 row-1 icon-[mdi--numeric-2] ${COLORS[set.x]}`} />
      <span className={`col-4 row-1 icon-[mdi--numeric-3] ${COLORS[set.x]}`} />
      <span className={`col-5 row-1 icon-[mdi--numeric-4] ${COLORS[set.x]}`} />
      <span className={`col-6 row-1 icon-[mdi--numeric-5] ${COLORS[set.x]}`} />

      <span className={`col-1 row-2 icon-[mdi--numeric-1] ${COLORS[set.y]}`} />
      <span className={`col-1 row-3 icon-[mdi--numeric-2] ${COLORS[set.y]}`} />
      <span className={`col-1 row-4 icon-[mdi--numeric-3] ${COLORS[set.y]}`} />
      <span className={`col-1 row-5 icon-[mdi--numeric-4] ${COLORS[set.y]}`} />
      <span className={`col-1 row-6 icon-[mdi--numeric-5] ${COLORS[set.y]}`} />

      {set.keys.map(({ lx, ly, key }) => {
        return <Cell
          key={key} title={key} icon="icon-[uil--square-shape] text-emerald-600" options={OPTIONS}
          auto={(deduct[lx] === 1 || deduct[ly] === 1) && "icon-[uil--times] text-gray-400"}
          name={`${name}.${key}`} value={value?.[key]} onChange={onChange}
        />
      })}
    </div>
  ));
}
