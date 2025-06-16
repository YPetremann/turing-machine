import { memo } from "react";
import { Code } from "./Code";
import { Insert } from "./Insert";

export const Codes = memo(({ name, value, onChange }) => {
  value ??= {};
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <Insert text=":T:">
        <span className="icon-[uim--triangle] text-4xl mb-1 text-blue-400" />
      </Insert>
      <Insert text=":R:">
        <span className="icon-[uim--square] text-4xl mb-1 text-yellow-400" />
      </Insert>
      <Insert text=":C:">
        <span className="icon-[uim--circle] text-4xl mb-1 text-purple-800" />
      </Insert>
      <Code name={`${name}.0`} value={value[0]} onChange={onChange} top={true} />
      <Code name={`${name}.1`} value={value[1]} onChange={onChange} />
      <Code name={`${name}.2`} value={value[2]} onChange={onChange} />
      <Code name={`${name}.3`} value={value[3]} onChange={onChange} />
      <Code name={`${name}.4`} value={value[4]} onChange={onChange} />
      <Code name={`${name}.5`} value={value[5]} onChange={onChange} />
      <Code name={`${name}.6`} value={value[6]} onChange={onChange} />
      <Code name={`${name}.7`} value={value[7]} onChange={onChange} />
      <Code name={`${name}.8`} value={value[8]} onChange={onChange} bottom={true} />
    </div>
  );
});
