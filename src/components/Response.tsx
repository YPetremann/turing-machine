import { memo } from "react";
import { Checkbox } from "./Checkbox";

export const Response = memo(({ name, value, onChange }) => {
  value ??= {};
  return (
    <>
      <Checkbox name={`${name}.A`} value={value.A} onChange={onChange} />
      <Checkbox name={`${name}.B`} value={value.B} onChange={onChange} />
      <Checkbox name={`${name}.C`} value={value.C} onChange={onChange} />
      <Checkbox name={`${name}.D`} value={value.D} onChange={onChange} />
      <Checkbox name={`${name}.E`} value={value.E} onChange={onChange} />
      <Checkbox name={`${name}.F`} value={value.F} onChange={onChange} />
    </>
  );
});
