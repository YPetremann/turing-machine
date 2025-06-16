import { TextInput } from "./TextInput";

export function Infos({ name, value, onChange }) {
  value ??= {};
  return (
    <div className="flex flex-col gap-1">
      <TextInput
        name={`${name}.user`}
        value={value.user}
        onChange={onChange}
        icon="icon-[mdi--user]"
        className="rounded-t-xl"
      />
      <TextInput
        name={`${name}.game`}
        value={value.game}
        onChange={onChange}
        icon="icon-[mdi--hashtag]"
        className="rounded-b-xl"
      />
    </div>
  );
}
