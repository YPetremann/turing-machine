import { Icon } from "@iconify/react/dist/iconify.js"

export function TextInput({ name = "",icon }) {
  return <div className="grid bg-emerald-100 items-center">
    <Icon icon={icon} className="col-span-full row-span-full text-2xl m-2 text-emerald-600"/>
    <input type="text" name={name} className="col-span-full row-span-full pl-9 w-43 p-2" />
  </div>
}
