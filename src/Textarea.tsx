export function Textarea({ name = "", left = false, right = false }) {
  let side = "pl-10";
  if (left) side = "pl-7";
  if (right) side = "pl-12";
  return <textarea name={name}
    className={`pt-2 w-90 ${side} h-38 flex items-center justify-center resize-none`} />;
}
