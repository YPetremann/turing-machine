import { CheckNumber } from "./CheckNumber";
import { Insert } from "./Insert";

export function Deduct({ name, value: save, onChange }) {
  save ??= {};
  return (
    <div className="mt-3 grid grid-cols-3 justify-items-center p-3 border-2 border-emerald-500 rounded-xl">
      <Insert text=":T:">
        <span className="icon-[uim--triangle] text-4xl m-1 text-blue-400" />
      </Insert>
      <Insert text=":R:">
        <span className="icon-[uim--square] text-4xl m-1 text-yellow-400" />
      </Insert>
      <Insert text=":C:">
        <span className="icon-[uim--circle] text-4xl m-1 text-purple-800" />
      </Insert>

      <CheckNumber title="5" name={`${name}.T5`} value={save.T5} onChange={onChange} />
      <CheckNumber title="5" name={`${name}.R5`} value={save.R5} onChange={onChange} />
      <CheckNumber title="5" name={`${name}.C5`} value={save.C5} onChange={onChange} />

      <CheckNumber title="4" name={`${name}.T4`} value={save.T4} onChange={onChange} />
      <CheckNumber title="4" name={`${name}.R4`} value={save.R4} onChange={onChange} />
      <CheckNumber title="4" name={`${name}.C4`} value={save.C4} onChange={onChange} />

      <CheckNumber title="3" name={`${name}.T3`} value={save.T3} onChange={onChange} />
      <CheckNumber title="3" name={`${name}.R3`} value={save.R3} onChange={onChange} />
      <CheckNumber title="3" name={`${name}.C3`} value={save.C3} onChange={onChange} />

      <CheckNumber title="2" name={`${name}.T2`} value={save.T2} onChange={onChange} />
      <CheckNumber title="2" name={`${name}.R2`} value={save.R2} onChange={onChange} />
      <CheckNumber title="2" name={`${name}.C2`} value={save.C2} onChange={onChange} />

      <CheckNumber title="1" name={`${name}.T1`} value={save.T1} onChange={onChange} />
      <CheckNumber title="1" name={`${name}.R1`} value={save.R1} onChange={onChange} />
      <CheckNumber title="1" name={`${name}.C1`} value={save.C1} onChange={onChange} />
    </div>
  );
}
