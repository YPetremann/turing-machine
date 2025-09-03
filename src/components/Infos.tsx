import { TextInput } from "./TextInput";

export function Infos({ name, value, onChange }) {
  value ??= {};
  return (
    <div className="flex gap-3">
      <TextInput
        name={`${name}.user`}
        value={value.user}
        onChange={onChange}
        className="grow-2"
        icon="icon-[mdi--user]"
      />
      <TextInput
        name={`${name}.hash`}
        value={value.hash}
        onChange={onChange}
        icon="icon-[mdi--hashtag]"
      />
    </div>
  );
}
