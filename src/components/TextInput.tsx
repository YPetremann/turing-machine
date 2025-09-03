import React from "react";
interface Props {
  icon: string;
  className?: string;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}
export const TextInput = React.memo(({ icon, className = "", name, value = "", onChange }: Props) => {
  return (
    <label className={`flex bg-emerald-100 items-center grow ${className}`}>
      <span className={`m-1 text-emerald-600 ${icon}`} />
      <input
        type="text"
        className="w-1 grow"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </label>
  );
});
