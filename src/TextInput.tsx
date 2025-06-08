import { Icon } from "@iconify/react/dist/iconify.js"
import { memo } from "react"

export const TextInput=memo(({ icon, className, name, value="", onChange }) => {
  return <div className={"grid bg-emerald-100 items-center " + className}>
    <Icon icon={icon} className="col-span-full row-span-full text-2xl m-2 text-emerald-600" />
    <input type="text" className="col-span-full row-span-full pl-9 w-43 p-2"
      name={name} value={value} onChange={(e) => onChange(name, e.target.value)}
    />
  </div>
})
