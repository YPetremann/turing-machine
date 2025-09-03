import { Fragment, memo } from "react";
import { InputNumber } from "./InputNumber";
import { Checkbox } from "./Checkbox";

const range = (n:number) => Array.from({ length: n }, (_, i) => i);

type ResponsesProps = {
  className?: string;
  codes?: Record<string, number>;
  res?: Record<string, number>;
  lines: number;
  onChange: (name: string, value: (prev: number) => number) => void;
};

export const Responses = memo(({ codes, className, res, lines, onChange }: ResponsesProps) => {
  codes ??= {};
  res ??= {};
  return (
      <div className={`grid ${className}`}>
        <span className="mx-auto my-1 icon-[uim--triangle] text-blue-400 col-1" />
        <span className="mx-auto my-1 icon-[uim--square] text-yellow-400 col-2" />
        <span className="mx-auto my-1 icon-[uim--circle] text-purple-800 col-3" />
        <span className="w-3 col-4" />
        <span className="mx-auto my-1 icon-[mdi--letter-a] text-green-600 col-5" />
        <span className="mx-auto my-1 icon-[mdi--letter-b] text-green-600 col-6" />
        <span className="mx-auto my-1 icon-[mdi--letter-c] text-green-600 col-7" />
        <span className="mx-auto my-1 icon-[mdi--letter-d] text-green-600 col-8" />
        <span className="mx-auto my-1 icon-[mdi--letter-e] text-green-600 col-9" />
        <span className="mx-auto my-1 icon-[mdi--letter-f] text-green-600 col-10" />

        {range(lines).map((i, _, a) => (
          <Fragment key={i}>
            <InputNumber
              name={`codes.T${i}`}
              value={codes[`T${i}`]}
              onChange={onChange}
              top={i === 0}
              bottom={i === a.length - 1}
              left
            />
            <InputNumber
              name={`codes.R${i}`}
              value={codes[`R${i}`]}
              onChange={onChange}
              top={i === 0}
              bottom={i === a.length - 1}
            />
            <InputNumber
              name={`codes.C${i}`}
              value={codes[`C${i}`]}
              onChange={onChange}
              top={i === 0}
              bottom={i === a.length - 1}
              right
            />
            <span />
            <Checkbox name={`res.A${i}`} value={res[`A${i}`]} onChange={onChange} />
            <Checkbox name={`res.B${i}`} value={res[`B${i}`]} onChange={onChange} />
            <Checkbox name={`res.C${i}`} value={res[`C${i}`]} onChange={onChange} />
            <Checkbox name={`res.D${i}`} value={res[`D${i}`]} onChange={onChange} />
            <Checkbox name={`res.E${i}`} value={res[`E${i}`]} onChange={onChange} />
            <Checkbox name={`res.F${i}`} value={res[`F${i}`]} onChange={onChange} />
          </Fragment>
        ))}
      </div>
  );
});
