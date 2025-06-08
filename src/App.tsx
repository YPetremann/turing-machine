import React from "react"

import { InputNumber } from "./InputNumber"
import { Checkbox } from "./Checkbox"
import { CheckNumber } from "./CheckNumber"
import { TextInput } from "./TextInput"
import { Textarea } from "./Textarea"
import type { Save } from "./Save"
import { SaveManager } from "./SaveManager"
import { Icon } from "@iconify/react/dist/iconify.js"
import {Insert} from "./Insert"

const range = (n: number) => ([...Array(n).keys()])
const Spacer = () => <div className="w-1 h-1" />
export default function App() {
  const formRef = React.useRef<HTMLFormElement>(null)
  const [save, setSave] = React.useState({})
  const setValue = React.useCallback((key, update) => setSave(prev => {
    const val = typeof update === "function" ? update(prev[key]) : update
    console.log(`Updated ${key}:`,val)
    return ({ ...prev, [key]: val  })
  }), [])

  return <div className="flex gap-5">
    <form ref={formRef} className="col-span-full row-span-full w-170 h-231 p-4 flex flex-col bg-white justify-between">
      <div className="flex flex-row items-start justify-between">
        <div className="grid grid-cols-3 justify-items-center">
          <Insert text=":T:"><span className="icon-[uim--triangle] text-4xl mb-1 text-blue-400" /></Insert>
          <Insert text=":R:"><span className="icon-[uim--square] text-4xl mb-1 text-yellow-400" /></Insert>
          <Insert text=":C:"><span className="icon-[uim--circle] text-4xl mb-1 text-purple-800" /></Insert>

          <InputNumber name="turn.1.T" value={save["turn.1.T"]} onChange={setValue} top left />
          <InputNumber name="turn.1.R" value={save["turn.1.R"]} onChange={setValue} top />
          <InputNumber name="turn.1.C" value={save["turn.1.C"]} onChange={setValue} top right />

          <InputNumber name="turn.2.T" value={save["turn.2.T"]} onChange={setValue} left />
          <InputNumber name="turn.2.R" value={save["turn.2.R"]} onChange={setValue} />
          <InputNumber name="turn.2.C" value={save["turn.2.C"]} onChange={setValue} right />

          <InputNumber name="turn.3.T" value={save["turn.3.T"]} onChange={setValue} left />
          <InputNumber name="turn.3.R" value={save["turn.3.R"]} onChange={setValue} />
          <InputNumber name="turn.3.C" value={save["turn.3.C"]} onChange={setValue} right />

          <InputNumber name="turn.4.T" value={save["turn.4.T"]} onChange={setValue} left />
          <InputNumber name="turn.4.R" value={save["turn.4.R"]} onChange={setValue} />
          <InputNumber name="turn.4.C" value={save["turn.4.C"]} onChange={setValue} right />

          <InputNumber name="turn.5.T" value={save["turn.5.T"]} onChange={setValue} left />
          <InputNumber name="turn.5.R" value={save["turn.5.R"]} onChange={setValue} />
          <InputNumber name="turn.5.C" value={save["turn.5.C"]} onChange={setValue} right />

          <InputNumber name="turn.6.T" value={save["turn.6.T"]} onChange={setValue} left />
          <InputNumber name="turn.6.R" value={save["turn.6.R"]} onChange={setValue} />
          <InputNumber name="turn.6.C" value={save["turn.6.C"]} onChange={setValue} right />

          <InputNumber name="turn.7.T" value={save["turn.7.T"]} onChange={setValue} left />
          <InputNumber name="turn.7.R" value={save["turn.7.R"]} onChange={setValue} />
          <InputNumber name="turn.7.C" value={save["turn.7.C"]} onChange={setValue} right />

          <InputNumber name="turn.8.T" value={save["turn.8.T"]} onChange={setValue} left />
          <InputNumber name="turn.8.R" value={save["turn.8.R"]} onChange={setValue} />
          <InputNumber name="turn.8.C" value={save["turn.8.C"]} onChange={setValue} right />

          <InputNumber name="turn.9.T" value={save["turn.9.T"]} onChange={setValue} bottom left />
          <InputNumber name="turn.9.R" value={save["turn.9.R"]} onChange={setValue} bottom />
          <InputNumber name="turn.9.C" value={save["turn.9.C"]} onChange={setValue} bottom right />
        </div>
        <div className="grid grid-cols-6 justify-items-center">
          <span className="icon-[mdi--letter-a] text-4xl mb-1 text-gree-600" />
          <span className="icon-[mdi--letter-b] text-4xl mb-1 text-gree-600" />
          <span className="icon-[mdi--letter-c] text-4xl mb-1 text-gree-600" />
          <span className="icon-[mdi--letter-d] text-4xl mb-1 text-gree-600" />
          <span className="icon-[mdi--letter-e] text-4xl mb-1 text-gree-600" />
          <span className="icon-[mdi--letter-f] text-4xl mb-1 text-gree-600" />

          <Checkbox name="turn.1.1" value={save["turn.1.1"]} onChange={setValue} />
          <Checkbox name="turn.1.2" value={save["turn.1.2"]} onChange={setValue} />
          <Checkbox name="turn.1.3" value={save["turn.1.3"]} onChange={setValue} />
          <Checkbox name="turn.1.4" value={save["turn.1.4"]} onChange={setValue} />
          <Checkbox name="turn.1.5" value={save["turn.1.5"]} onChange={setValue} fill />
          <Checkbox name="turn.1.6" value={save["turn.1.6"]} onChange={setValue} fill />

          <Checkbox name="turn.2.1" value={save["turn.2.1"]} onChange={setValue} />
          <Checkbox name="turn.2.2" value={save["turn.2.2"]} onChange={setValue} />
          <Checkbox name="turn.2.3" value={save["turn.2.3"]} onChange={setValue} />
          <Checkbox name="turn.2.4" value={save["turn.2.4"]} onChange={setValue} />
          <Checkbox name="turn.2.5" value={save["turn.2.5"]} onChange={setValue} fill />
          <Checkbox name="turn.2.6" value={save["turn.2.6"]} onChange={setValue} fill />

          <Checkbox name="turn.3.1" value={save["turn.3.1"]} onChange={setValue} />
          <Checkbox name="turn.3.2" value={save["turn.3.2"]} onChange={setValue} />
          <Checkbox name="turn.3.3" value={save["turn.3.3"]} onChange={setValue} />
          <Checkbox name="turn.3.4" value={save["turn.3.4"]} onChange={setValue} />
          <Checkbox name="turn.3.5" value={save["turn.3.5"]} onChange={setValue} fill />
          <Checkbox name="turn.3.6" value={save["turn.3.6"]} onChange={setValue} fill />

          <Checkbox name="turn.4.1" value={save["turn.4.1"]} onChange={setValue} />
          <Checkbox name="turn.4.2" value={save["turn.4.2"]} onChange={setValue} />
          <Checkbox name="turn.4.3" value={save["turn.4.3"]} onChange={setValue} />
          <Checkbox name="turn.4.4" value={save["turn.4.4"]} onChange={setValue} />
          <Checkbox name="turn.4.5" value={save["turn.4.5"]} onChange={setValue} fill />
          <Checkbox name="turn.4.6" value={save["turn.4.6"]} onChange={setValue} fill />

          <Checkbox name="turn.5.1" value={save["turn.5.1"]} onChange={setValue} />
          <Checkbox name="turn.5.2" value={save["turn.5.2"]} onChange={setValue} />
          <Checkbox name="turn.5.3" value={save["turn.5.3"]} onChange={setValue} />
          <Checkbox name="turn.5.4" value={save["turn.5.4"]} onChange={setValue} />
          <Checkbox name="turn.5.5" value={save["turn.5.5"]} onChange={setValue} fill />
          <Checkbox name="turn.5.6" value={save["turn.5.6"]} onChange={setValue} fill />

          <Checkbox name="turn.6.1" value={save["turn.6.1"]} onChange={setValue} />
          <Checkbox name="turn.6.2" value={save["turn.6.2"]} onChange={setValue} />
          <Checkbox name="turn.6.3" value={save["turn.6.3"]} onChange={setValue} />
          <Checkbox name="turn.6.4" value={save["turn.6.4"]} onChange={setValue} />
          <Checkbox name="turn.6.5" value={save["turn.6.5"]} onChange={setValue} fill />
          <Checkbox name="turn.6.6" value={save["turn.6.6"]} onChange={setValue} fill />

          <Checkbox name="turn.7.1" value={save["turn.7.1"]} onChange={setValue} />
          <Checkbox name="turn.7.2" value={save["turn.7.2"]} onChange={setValue} />
          <Checkbox name="turn.7.3" value={save["turn.7.3"]} onChange={setValue} />
          <Checkbox name="turn.7.4" value={save["turn.7.4"]} onChange={setValue} />
          <Checkbox name="turn.7.5" value={save["turn.7.5"]} onChange={setValue} fill />
          <Checkbox name="turn.7.6" value={save["turn.7.6"]} onChange={setValue} fill />

          <Checkbox name="turn.8.1" value={save["turn.8.1"]} onChange={setValue} />
          <Checkbox name="turn.8.2" value={save["turn.8.2"]} onChange={setValue} />
          <Checkbox name="turn.8.3" value={save["turn.8.3"]} onChange={setValue} />
          <Checkbox name="turn.8.4" value={save["turn.8.4"]} onChange={setValue} />
          <Checkbox name="turn.8.5" value={save["turn.8.5"]} onChange={setValue} fill />
          <Checkbox name="turn.8.6" value={save["turn.8.6"]} onChange={setValue} fill />

          <Checkbox name="turn.9.1" value={save["turn.9.1"]} onChange={setValue} />
          <Checkbox name="turn.9.2" value={save["turn.9.2"]} onChange={setValue} />
          <Checkbox name="turn.9.3" value={save["turn.9.3"]} onChange={setValue} />
          <Checkbox name="turn.9.4" value={save["turn.9.4"]} onChange={setValue} />
          <Checkbox name="turn.9.5" value={save["turn.9.5"]} onChange={setValue} fill />
          <Checkbox name="turn.9.6" value={save["turn.9.6"]} onChange={setValue} fill />
        </div>
        <div className="w-44">
          <div className="flex flex-col gap-1">
            <TextInput name="user" value={save.user} onChange={setValue} icon="mdi:user" className="rounded-t-xl" />
            <TextInput name="game" value={save.game} onChange={setValue} icon="mdi:hashtag" className="rounded-b-xl" />
          </div>
          <div className="mt-3 grid grid-cols-3 justify-items-center p-3 border-2 border-emerald-500 rounded-xl">
            <Insert text=":T:"><span className="icon-[uim--triangle] text-4xl m-1 text-blue-400" /></Insert>
            <Insert text=":R:"><span className="icon-[uim--square] text-4xl m-1 text-yellow-400" /></Insert>
            <Insert text=":C:"><span className="icon-[uim--circle] text-4xl m-1 text-purple-800" /></Insert>

            <CheckNumber title={5} name="hyp.T5" value={save["hyp.T5"]} onChange={setValue} />
            <CheckNumber title={5} name="hyp.R5" value={save["hyp.R5"]} onChange={setValue} />
            <CheckNumber title={5} name="hyp.C5" value={save["hyp.C5"]} onChange={setValue} />

            <CheckNumber title={4} name="hyp.T4" value={save["hyp.T4"]} onChange={setValue} />
            <CheckNumber title={4} name="hyp.R4" value={save["hyp.R4"]} onChange={setValue} />
            <CheckNumber title={4} name="hyp.C4" value={save["hyp.C4"]} onChange={setValue} />

            <CheckNumber title={3} name="hyp.T3" value={save["hyp.T3"]} onChange={setValue} />
            <CheckNumber title={3} name="hyp.R3" value={save["hyp.R3"]} onChange={setValue} />
            <CheckNumber title={3} name="hyp.C3" value={save["hyp.C3"]} onChange={setValue} />

            <CheckNumber title={2} name="hyp.T2" value={save["hyp.T2"]} onChange={setValue} />
            <CheckNumber title={2} name="hyp.R2" value={save["hyp.R2"]} onChange={setValue} />
            <CheckNumber title={2} name="hyp.C2" value={save["hyp.C2"]} onChange={setValue} />

            <CheckNumber title={1} name="hyp.T1" value={save["hyp.T1"]} onChange={setValue} />
            <CheckNumber title={1} name="hyp.R1" value={save["hyp.R1"]} onChange={setValue} />
            <CheckNumber title={1} name="hyp.C1" value={save["hyp.C1"]} onChange={setValue} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <Textarea name="note.A" value={save["note.A"]} onChange={setValue} title="A" top left />
        <Textarea name="note.C" value={save["note.C"]} onChange={setValue} title="C" top />
        <Textarea name="note.E" value={save["note.E"]} onChange={setValue} title="E" top right />

        <Textarea name="note.B" value={save["note.B"]} onChange={setValue} title="B" bottom left />
        <Textarea name="note.D" value={save["note.D"]} onChange={setValue} title="D" bottom />
        <Textarea name="note.F" value={save["note.F"]} onChange={setValue} title="F" bottom right />
      </div>
    </form>
    <SaveManager save={save} onLoad={setSave} />
  </div>
}