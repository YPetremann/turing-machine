import { Cell } from "./Cell";

const DATA = [
  ["T1", "T can be 1"],
  ["R1", "S can be 1"],
  ["C1", "C can be 1"],
  ["11", "can have strictly one 1"],
  ["21", "can have strictly two 1"],
  ["T2", "T can be 2"],
  ["R2", "S can be 2"],
  ["C2", "C can be 2"],
  ["12", "can have strictly one 2"],
  ["22", "can have strictly two 2"],
  ["T3", "T can be 3"],
  ["R3", "S can be 3"],
  ["C3", "C can be 3"],
  ["13", "can have strictly one 3"],
  ["23", "can have strictly two 3"],
  ["T4", "T can be 4"],
  ["R4", "S can be 4"],
  ["C4", "C can be 4"],
  ["14", "can have strictly one 4"],
  ["24", "can have strictly two 4"],
  ["T5", "T can be 5"],
  ["R5", "S can be 5"],
  ["C5", "C can be 5"],
  ["15", "can have strictly one 5"],
  ["25", "can have strictly two 5"],
]
const KEYS = DATA.map(([k]) => k);
const LABELS = Object.fromEntries(DATA) as Record<string, string>;
const OPTIONS = ["", "icon-[uil--times]", "icon-[uil--circle]"];

interface DeductProps {
  name: string;
  value?: Record<string, number>;
  onChange: (name: string, value: (prev: number) => number) => void;
}

export function Deduct({ name, value, onChange }: DeductProps) {
  value ??= {};


  return (
    <div key="deduct" className="grid grid-cols-6 grid-rows-3 items-center">
      <span className="col-1 row-1" />

      <span className="col-2 row-1 icon-[uim--triangle] text-blue-400" />
      <span className="col-3 row-1 icon-[uim--square] text-yellow-400" />
      <span className="col-4 row-1 icon-[uim--circle] text-purple-800" />
      <span className="col-5 row-1 icon-[mdi--numeric-1] text-emerald-600" />
      <span className="col-6 row-1 icon-[mdi--numeric-2] text-emerald-600" />

      <span className="col-1 row-2 icon-[mdi--numeric-1] text-emerald-600" />
      <span className="col-1 row-3 icon-[mdi--numeric-2] text-emerald-600" />
      <span className="col-1 row-4 icon-[mdi--numeric-3] text-emerald-600" />
      <span className="col-1 row-5 icon-[mdi--numeric-4] text-emerald-600" />
      <span className="col-1 row-6 icon-[mdi--numeric-5] text-emerald-600" />

      {KEYS.map((key) =>
        <Cell
          key={key} title={LABELS[key]} icon="icon-[mdi--dot] text-emerald-600" options={OPTIONS}
          name={`${name}.${key}`} value={value[key]} onChange={onChange}
        />
      )}
    </div>
  );
}
