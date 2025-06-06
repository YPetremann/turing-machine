import React from "react"

import { InputNumber } from "./InputNumber"
import { Checkbox } from "./Checkbox"
import { CheckNumber } from "./CheckNumber"
import { TextInput } from "./TextInput"
import { Textarea } from "./Textarea"
import type { Save } from "./Save"
import { SaveManager } from "./SaveManager"
import { Icon } from "@iconify/react/dist/iconify.js"

const range = (n: number) => ([...Array(n).keys()])
function Spacer() {
  return <div className="w-1 h-1" />
}
function App() {
  const formRef = React.useRef<HTMLFormElement>(null)

  // Save form data to localStorage
  const save = (): Save => {
    const form = formRef.current
    if (!form) throw new Error("Form not found")
    const data = new FormData(form)
    const obj: Record<string, string> = {}
    for (const [key, value] of data.entries()) obj[key] = value as string
    return obj
  }

  // Restore form data from localStorage
  const restore = (obj: Save) => {
    const form = formRef.current
    if (!form) throw new Error("Form not found")
    // Set all input/textarea values
    for (const el of Array.from(form.elements) as HTMLFormElement[]) {
      if (!el.name) continue

      if (obj[el.name] === undefined) continue
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) continue
      el.value = obj[el.name]
      console.log(el.name, el.value)
      // trigger onChange event for React to pick up the change
      if (el instanceof HTMLInputElement && el.type === "checkbox") {
        el.checked = obj[el.name] === "1" || obj[el.name] === "true"
      } else if (el instanceof HTMLInputElement && el.type === "number") {
        el.value = String(Number(obj[el.name])) // Ensure it's a number
      }
    }
  }

  return <div className="flex">
    <div className="grid">
      <form ref={formRef} className="col-span-full row-span-full w-185 h-231 p-6 flex flex-col bg-white justify-between">
        <div className="flex flex-row items-start justify-between">
          <div className="grid grid-cols-3 justify-items-center">
            <Icon icon="uim:triangle" className="text-4xl my-2 text-blue-400"/>
            <Icon icon="uim:square" className="text-4xl my-2 text-yellow-400"/>
            <Icon icon="uim:circle" className="text-4xl my-2 text-purple-800"/>

            <InputNumber name="turn.1.T" top left/>
            <InputNumber name="turn.1.R" top center/>
            <InputNumber name="turn.1.C" top right/>

            <InputNumber name="turn.2.T" center left/>
            <InputNumber name="turn.2.R" center center/>
            <InputNumber name="turn.2.C" center right/>
 
            <InputNumber name="turn.3.T" center left/>
            <InputNumber name="turn.3.R" center center/>
            <InputNumber name="turn.3.C" center right/>
 
            <InputNumber name="turn.4.T" center left/>
            <InputNumber name="turn.4.R" center center/>
            <InputNumber name="turn.4.C" center right/>
 
            <InputNumber name="turn.5.T" center left/>
            <InputNumber name="turn.5.R" center center/>
            <InputNumber name="turn.5.C" center right/>
  
            <InputNumber name="turn.6.T" center left/>
            <InputNumber name="turn.6.R" center center/>
            <InputNumber name="turn.6.C" center right/>
  
            <InputNumber name="turn.7.T" center left/>
            <InputNumber name="turn.7.R" center center/>
            <InputNumber name="turn.7.C" center right/>
 
            <InputNumber name="turn.8.T" center left/>
            <InputNumber name="turn.8.R" center center/>
            <InputNumber name="turn.8.C" center right/>
 
            <InputNumber name="turn.9.T" bottom left/>
            <InputNumber name="turn.9.R" bottom center/>
            <InputNumber name="turn.9.C" bottom right/>
          </div>
          <div className="grid grid-cols-6 justify-items-center">
            <Icon icon="mdi:letter-a" className="text-4xl my-2 text-gree-600"/>
            <Icon icon="mdi:letter-b" className="text-4xl my-2 text-gree-600"/>
            <Icon icon="mdi:letter-c" className="text-4xl my-2 text-gree-600"/>
            <Icon icon="mdi:letter-d" className="text-4xl my-2 text-gree-600"/>
            <Icon icon="mdi:letter-e" className="text-4xl my-2 text-gree-600"/>
            <Icon icon="mdi:letter-f" className="text-4xl my-2 text-gree-600"/>
 
            <Checkbox name={`turn.1.A`} />
            <Checkbox name={`turn.1.B`} />
            <Checkbox name={`turn.1.C`} />
            <Checkbox name={`turn.1.D`} />
            <Checkbox name={`turn.1.E`} fill />
            <Checkbox name={`turn.1.F`} fill />
 
            <Checkbox name={`turn.2.A`} />
            <Checkbox name={`turn.2.B`} />
            <Checkbox name={`turn.2.C`} />
            <Checkbox name={`turn.2.D`} />
            <Checkbox name={`turn.2.E`} fill />
            <Checkbox name={`turn.2.F`} fill />

            <Checkbox name={`turn.3.A`} />
            <Checkbox name={`turn.3.B`} />
            <Checkbox name={`turn.3.C`} />
            <Checkbox name={`turn.3.D`} />
            <Checkbox name={`turn.3.E`} fill />
            <Checkbox name={`turn.3.F`} fill />

            <Checkbox name={`turn.4.A`} />
            <Checkbox name={`turn.4.B`} />
            <Checkbox name={`turn.4.C`} />
            <Checkbox name={`turn.4.D`} />
            <Checkbox name={`turn.4.E`} fill />
            <Checkbox name={`turn.4.F`} fill />

            <Checkbox name={`turn.5.A`} />
            <Checkbox name={`turn.5.B`} />
            <Checkbox name={`turn.5.C`} />
            <Checkbox name={`turn.5.D`} />
            <Checkbox name={`turn.5.E`} fill />
            <Checkbox name={`turn.5.F`} fill />

            <Checkbox name={`turn.6.A`} />
            <Checkbox name={`turn.6.B`} />
            <Checkbox name={`turn.6.C`} />
            <Checkbox name={`turn.6.D`} />
            <Checkbox name={`turn.6.E`} fill />
            <Checkbox name={`turn.6.F`} fill />

            <Checkbox name={`turn.7.A`} />
            <Checkbox name={`turn.7.B`} />
            <Checkbox name={`turn.7.C`} />
            <Checkbox name={`turn.7.D`} />
            <Checkbox name={`turn.7.E`} fill />
            <Checkbox name={`turn.7.F`} fill />

 
            <Checkbox name={`turn.8.A`} />
            <Checkbox name={`turn.8.B`} />
            <Checkbox name={`turn.8.C`} />
            <Checkbox name={`turn.8.D`} />
            <Checkbox name={`turn.8.E`} fill />
            <Checkbox name={`turn.8.F`} fill />

            <Checkbox name={`turn.9.A`} />
            <Checkbox name={`turn.9.B`} />
            <Checkbox name={`turn.9.C`} />
            <Checkbox name={`turn.9.D`} />
            <Checkbox name={`turn.9.E`} fill />
            <Checkbox name={`turn.9.F`} fill />
          </div>
          <div>
            <div className="w-44">
              <div className="flex flex-col gap-1 rounded-xl overflow-hidden">
                <TextInput icon="mdi:user" name="player" />
                <TextInput icon="mdi:hashtag" name="game" />
              </div>
              <div className="mt-1 grid grid-cols-3 justify-items-center p-3 border-2 border-emerald-500 rounded-xl">
                <Icon icon="uim:triangle" className="text-4xl m-1 text-blue-400"/>
                <Icon icon="uim:square" className="text-4xl m-1 text-yellow-400"/>
                <Icon icon="uim:circle" className="text-4xl m-1 text-purple-800"/>
                {range(5).map(i=>5-i).map((i) => <>
                  <CheckNumber title={i} name={`hyp.T${i}`} />
                  <CheckNumber title={i} name={`hyp.R${i}`} />
                  <CheckNumber title={i} name={`hyp.C${i}`} />
                </>)}
              </div>
            </div>
          </div>
        </div>
        <table className="w-full">
          <tbody>
            <tr>
              <Textarea name="note.A" title="A" top left />
              <Textarea name="note.B" title="B" top right />
            </tr>
            <tr>
              <Textarea name="note.C" title="C" middle left />
              <Textarea name="note.D" title="D" middle right />
            </tr>
            <tr>
              <Textarea name="note.E" title="E" bottom left />
              <Textarea name="note.F" title="F" bottom right />
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <SaveManager {...{ save, restore }} />
  </div>
}

export default App

