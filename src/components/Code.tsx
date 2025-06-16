import { memo } from "react";
import { InputNumber } from "./InputNumber";

export const Code = memo(({ name, value, onChange, top, bottom }) => {
  value ??= {};
  return (
    <>
      <InputNumber
        name={`${name}.T`}
        value={value.T as number}
        onChange={onChange}
        top={top}
        bottom={bottom}
        left={true}
      />
      <InputNumber
        name={`${name}.R`}
        value={value.R as number}
        onChange={onChange}
        top={top}
        bottom={bottom}
      />
      <InputNumber
        name={`${name}.C`}
        value={value.C as number}
        onChange={onChange}
        top={top}
        bottom={bottom}
        right={true}
      />
    </>
  );
});
