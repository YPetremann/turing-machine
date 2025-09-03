import { Textarea } from "./Textarea";

export function Notes({ name, value, onChange }) {
  value ??= {};
  return (
    <div className="grid grid-cols-3">
      <Textarea name={`${name}.A`} value={value.A} onChange={onChange} title="A" top left />
      <Textarea name={`${name}.B`} value={value.B} onChange={onChange} title="B" top />
      <Textarea name={`${name}.C`} value={value.C} onChange={onChange} title="C" top right />

      <Textarea name={`${name}.D`} value={value.D} onChange={onChange} title="D" bottom left />
      <Textarea name={`${name}.E`} value={value.E} onChange={onChange} title="E" bottom />
      <Textarea name={`${name}.F`} value={value.F} onChange={onChange} title="F" bottom right />
    </div>
  );
}
