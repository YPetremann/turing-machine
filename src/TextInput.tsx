import React from "react";
interface Props {
  icon: string;
  className?: string;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}
export const TextInput = React.memo(
  ({ icon, className, name, value = "", onChange }: Props) => {
    return (
      <div className={`grid bg-emerald-100 items-center ${className}`}>
        <span
          className={`col-span-full row-span-full text-2xl m-2 text-emerald-600 ${icon}`}
        />
        <input
          type="text"
          className="col-span-full row-span-full pl-9 w-43 p-2"
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
        />
      </div>
    );
  },
);
