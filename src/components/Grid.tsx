import { Cell } from "./Cell";

const range = (n:number) => Array.from({ length: n }, (_, i) => i + 1);

const NUMBERS = [
  "",
  "icon-[mdi--numeric-1]",
  "icon-[mdi--numeric-2]",
  "icon-[mdi--numeric-3]",
  "icon-[mdi--numeric-4]",
  "icon-[mdi--numeric-5]",
];
const OPTIONS = ["", "icon-[uil--times]"];

const SETS = range(5).map(t => {
  const keys = range(5).flatMap(r => range(5).map(c => {
    const tn = `T${t}`
    const rn = `R${r}`
    const cn = `C${c}`
    const key = `${tn}-${rn}-${cn}`
    return { tn, rn, cn, key }
  }))
  return { x: NUMBERS[t], keys }
})

type GridProps = {
  deduct?: Record<string, number>;
  cross?: Record<string, number>;
  
  name: string;
  value?: Record<string, number>;
  onChange: (name: string, value: (prev: number) => number) => void;
};

export function Grid({ name, value, deduct, cross, onChange }: GridProps) {
  value ??= {};
  deduct ??= {};
  cross ??= {};

  return SETS.map(({ x, keys }) => (
    <div key={x} className="grid grid-cols-6 grid-flow-dense">
      <span className={`col-1 row-1 ${x} text-blue-400`} />

      <span className="col-2 row-1 icon-[mdi--numeric-1] text-yellow-400" />
      <span className="col-3 row-1 icon-[mdi--numeric-2] text-yellow-400" />
      <span className="col-4 row-1 icon-[mdi--numeric-3] text-yellow-400" />
      <span className="col-5 row-1 icon-[mdi--numeric-4] text-yellow-400" />
      <span className="col-6 row-1 icon-[mdi--numeric-5] text-yellow-400" />

      <span className="col-1 row-2 icon-[mdi--numeric-1] text-purple-800" />
      <span className="col-1 row-3 icon-[mdi--numeric-2] text-purple-800" />
      <span className="col-1 row-4 icon-[mdi--numeric-3] text-purple-800" />
      <span className="col-1 row-5 icon-[mdi--numeric-4] text-purple-800" />
      <span className="col-1 row-6 icon-[mdi--numeric-5] text-purple-800" />

      {keys.map(({ tn, rn, cn, key }) => (
        <Cell
          key={key} icon="icon-[mdi--dot] text-emerald-600" options={OPTIONS}
          auto={(
            deduct[tn] === 1 || 
            deduct[rn] === 1 || 
            deduct[cn] === 1 || 
            cross[`${cn}-${rn}`] === 1 || 
            cross[`${cn}-${tn}`] === 1 || 
            cross[`${tn}-${rn}`] === 1
          ) && "icon-[uil--times] text-gray-400"}
          name={`${name}.${key}`} value={value?.[key]} onChange={onChange}
        />
      ))}
    </div>
  ));
}
