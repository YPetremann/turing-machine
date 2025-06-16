import { memo } from "react";
import { Response } from "./Response";

export const Responses = memo(({ name, value, onChange }) => {
  value ??= {};
  return (
    <div className="grid grid-cols-6 justify-items-center">
      <span className="icon-[mdi--letter-a] text-4xl mb-1 text-gree-600" />
      <span className="icon-[mdi--letter-b] text-4xl mb-1 text-gree-600" />
      <span className="icon-[mdi--letter-c] text-4xl mb-1 text-gree-600" />
      <span className="icon-[mdi--letter-d] text-4xl mb-1 text-gree-600" />
      <span className="icon-[mdi--letter-e] text-4xl mb-1 text-gree-600" />
      <span className="icon-[mdi--letter-f] text-4xl mb-1 text-gree-600" />
      <Response name={`${name}.0`} value={value[0]} onChange={onChange} />
      <Response name={`${name}.1`} value={value[1]} onChange={onChange} />
      <Response name={`${name}.2`} value={value[2]} onChange={onChange} />
      <Response name={`${name}.3`} value={value[3]} onChange={onChange} />
      <Response name={`${name}.4`} value={value[4]} onChange={onChange} />
      <Response name={`${name}.5`} value={value[5]} onChange={onChange} />
      <Response name={`${name}.6`} value={value[6]} onChange={onChange} />
      <Response name={`${name}.7`} value={value[7]} onChange={onChange} />
      <Response name={`${name}.8`} value={value[8]} onChange={onChange} />
    </div>
  );
});
