export function Textarea({
  name = "",
  title,
  top = false,
  middle = false,
  bottom = false,
  left = false,
  right = false
}) {
  const borderV = top ? "border-b-1" : bottom ? "border-t-1" : "border-y-1"
  const borderH = left ? "border-r-1" : "border-l-1"
  let side = "pl-10"
  if (left) side = "pl-7"
  if (right) side = "pl-12"
  return <td className={`border-emerald-500 ${borderV} ${borderH}`}>
    <label className="grid gap-2">
      <span className="col-span-full pl-1 row-span-full text-emerald-600">{title}</span>
      <textarea
        name={name}
        className={`col-span-full row-span-full pl-5 h-37 grow resize-none`}
      />
    </label>
  </td>
}
