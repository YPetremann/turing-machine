import React from "react";
import { CheckNumber } from "./CheckNumber";
import { Checkbox } from "./Checkbox";
import { InputNumber } from "./InputNumber";
import { Insert } from "./Insert";
import { SaveManager } from "./SaveManager";
import { TextInput } from "./TextInput";
import { Textarea } from "./Textarea";
import type { Save } from "./Save"

export default function App() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [save, setSave] = React.useState<Save>({});
  const setValue = React.useCallback(
    (key:string, update:unknown) =>
      setSave((prev) => {
        const val = typeof update === "function" ? update(prev[key]) : update;
        console.info(`Updated ${key}:`, val);
        return { ...prev, [key]: val };
      }),
    [],
  );

  return (
    <div className="flex gap-5">
      <form
        ref={formRef}
        className="col-span-full row-span-full w-170 h-231 p-4 flex flex-col bg-white justify-between"
      >
        <div className="flex flex-row items-start justify-between">
          <div className="grid grid-cols-3 justify-items-center">
            <Insert text=":T:">
              <span className="icon-[uim--triangle] text-4xl mb-1 text-blue-400" />
            </Insert>
            <Insert text=":R:">
              <span className="icon-[uim--square] text-4xl mb-1 text-yellow-400" />
            </Insert>
            <Insert text=":C:">
              <span className="icon-[uim--circle] text-4xl mb-1 text-purple-800" />
            </Insert>

            <InputNumber
              name="turn.1.T"
              value={save["turn.1.T"] as number}
              onChange={setValue}
              top={true}
              left={true}
            />
            <InputNumber
              name="turn.1.R"
              value={save["turn.1.R"] as number}
              onChange={setValue}
              top={true}
            />
            <InputNumber
              name="turn.1.C"
              value={save["turn.1.C"] as number}
              onChange={setValue}
              top={true}
              right={true}
            />

            <InputNumber
              name="turn.2.T"
              value={save["turn.2.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.2.R"
              value={save["turn.2.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.2.C"
              value={save["turn.2.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.3.T"
              value={save["turn.3.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.3.R"
              value={save["turn.3.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.3.C"
              value={save["turn.3.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.4.T"
              value={save["turn.4.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.4.R"
              value={save["turn.4.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.4.C"
              value={save["turn.4.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.5.T"
              value={save["turn.5.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.5.R"
              value={save["turn.5.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.5.C"
              value={save["turn.5.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.6.T"
              value={save["turn.6.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.6.R"
              value={save["turn.6.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.6.C"
              value={save["turn.6.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.7.T"
              value={save["turn.7.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.7.R"
              value={save["turn.7.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.7.C"
              value={save["turn.7.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.8.T"
              value={save["turn.8.T"] as number}
              onChange={setValue}
              left={true}
            />
            <InputNumber
              name="turn.8.R"
              value={save["turn.8.R"] as number}
              onChange={setValue}
            />
            <InputNumber
              name="turn.8.C"
              value={save["turn.8.C"] as number}
              onChange={setValue}
              right={true}
            />

            <InputNumber
              name="turn.9.T"
              value={save["turn.9.T"] as number}
              onChange={setValue}
              bottom={true}
              left={true}
            />
            <InputNumber
              name="turn.9.R"
              value={save["turn.9.R"] as number}
              onChange={setValue}
              bottom={true}
            />
            <InputNumber
              name="turn.9.C"
              value={save["turn.9.C"] as number}
              onChange={setValue}
              bottom={true}
              right={true}
            />
          </div>
          <div className="grid grid-cols-6 justify-items-center">
            <span className="icon-[mdi--letter-a] text-4xl mb-1 text-gree-600" />
            <span className="icon-[mdi--letter-b] text-4xl mb-1 text-gree-600" />
            <span className="icon-[mdi--letter-c] text-4xl mb-1 text-gree-600" />
            <span className="icon-[mdi--letter-d] text-4xl mb-1 text-gree-600" />
            <span className="icon-[mdi--letter-e] text-4xl mb-1 text-gree-600" />
            <span className="icon-[mdi--letter-f] text-4xl mb-1 text-gree-600" />

            <Checkbox
              name="turn.1.1"
              value={save["turn.1.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.1.2"
              value={save["turn.1.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.1.3"
              value={save["turn.1.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.1.4"
              value={save["turn.1.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.1.5"
              value={save["turn.1.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.1.6"
              value={save["turn.1.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.2.1"
              value={save["turn.2.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.2.2"
              value={save["turn.2.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.2.3"
              value={save["turn.2.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.2.4"
              value={save["turn.2.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.2.5"
              value={save["turn.2.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.2.6"
              value={save["turn.2.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.3.1"
              value={save["turn.3.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.3.2"
              value={save["turn.3.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.3.3"
              value={save["turn.3.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.3.4"
              value={save["turn.3.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.3.5"
              value={save["turn.3.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.3.6"
              value={save["turn.3.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.4.1"
              value={save["turn.4.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.4.2"
              value={save["turn.4.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.4.3"
              value={save["turn.4.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.4.4"
              value={save["turn.4.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.4.5"
              value={save["turn.4.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.4.6"
              value={save["turn.4.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.5.1"
              value={save["turn.5.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.5.2"
              value={save["turn.5.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.5.3"
              value={save["turn.5.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.5.4"
              value={save["turn.5.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.5.5"
              value={save["turn.5.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.5.6"
              value={save["turn.5.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.6.1"
              value={save["turn.6.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.6.2"
              value={save["turn.6.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.6.3"
              value={save["turn.6.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.6.4"
              value={save["turn.6.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.6.5"
              value={save["turn.6.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.6.6"
              value={save["turn.6.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.7.1"
              value={save["turn.7.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.7.2"
              value={save["turn.7.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.7.3"
              value={save["turn.7.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.7.4"
              value={save["turn.7.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.7.5"
              value={save["turn.7.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.7.6"
              value={save["turn.7.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.8.1"
              value={save["turn.8.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.8.2"
              value={save["turn.8.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.8.3"
              value={save["turn.8.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.8.4"
              value={save["turn.8.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.8.5"
              value={save["turn.8.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.8.6"
              value={save["turn.8.6"] as number}
              onChange={setValue}
            />

            <Checkbox
              name="turn.9.1"
              value={save["turn.9.1"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.9.2"
              value={save["turn.9.2"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.9.3"
              value={save["turn.9.3"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.9.4"
              value={save["turn.9.4"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.9.5"
              value={save["turn.9.5"] as number}
              onChange={setValue}
            />
            <Checkbox
              name="turn.9.6"
              value={save["turn.9.6"] as number}
              onChange={setValue}
            />
          </div>
          <div className="w-44">
            <div className="flex flex-col gap-1">
              <TextInput
                name="user"
                value={save.user as string}
                onChange={setValue}
                icon="mdi:user"
                className="rounded-t-xl"
              />
              <TextInput
                name="game"
                value={save.game as string}
                onChange={setValue}
                icon="mdi:hashtag"
                className="rounded-b-xl"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 justify-items-center p-3 border-2 border-emerald-500 rounded-xl">
              <Insert text=":T:">
                <span className="icon-[uim--triangle] text-4xl m-1 text-blue-400" />
              </Insert>
              <Insert text=":R:">
                <span className="icon-[uim--square] text-4xl m-1 text-yellow-400" />
              </Insert>
              <Insert text=":C:">
                <span className="icon-[uim--circle] text-4xl m-1 text-purple-800" />
              </Insert>

              <CheckNumber
                title="5"
                name="hyp.T5"
                value={save["hyp.T5"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="5"
                name="hyp.R5"
                value={save["hyp.R5"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="5"
                name="hyp.C5"
                value={save["hyp.C5"] as number}
                onChange={setValue}
              />

              <CheckNumber
                title="4"
                name="hyp.T4"
                value={save["hyp.T4"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="4"
                name="hyp.R4"
                value={save["hyp.R4"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="4"
                name="hyp.C4"
                value={save["hyp.C4"] as number}
                onChange={setValue}
              />

              <CheckNumber
                title="3"
                name="hyp.T3"
                value={save["hyp.T3"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="3"
                name="hyp.R3"
                value={save["hyp.R3"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="3"
                name="hyp.C3"
                value={save["hyp.C3"] as number}
                onChange={setValue}
              />

              <CheckNumber
                title="2"
                name="hyp.T2"
                value={save["hyp.T2"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="2"
                name="hyp.R2"
                value={save["hyp.R2"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="2"
                name="hyp.C2"
                value={save["hyp.C2"] as number}
                onChange={setValue}
              />

              <CheckNumber
                title="1"
                name="hyp.T1"
                value={save["hyp.T1"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="1"
                name="hyp.R1"
                value={save["hyp.R1"] as number}
                onChange={setValue}
              />
              <CheckNumber
                title="1"
                name="hyp.C1"
                value={save["hyp.C1"] as number}
                onChange={setValue}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <Textarea
            name="note.A"
            value={save["note.A"] as string}
            onChange={setValue}
            title="A"
            top={true}
            left={true}
          />
          <Textarea
            name="note.C"
            value={save["note.C"] as string}
            onChange={setValue}
            title="C"
            top={true}
          />
          <Textarea
            name="note.E"
            value={save["note.E"] as string}
            onChange={setValue}
            title="E"
            top={true}
            right={true}
          />

          <Textarea
            name="note.B"
            value={save["note.B"] as string}
            onChange={setValue}
            title="B"
            bottom={true}
            left={true}
          />
          <Textarea
            name="note.D"
            value={save["note.D"] as string}
            onChange={setValue}
            title="D"
            bottom={true}
          />
          <Textarea
            name="note.F"
            value={save["note.F"] as string}
            onChange={setValue}
            title="F"
            bottom={true}
            right={true}
          />
        </div>
      </form>
      <SaveManager save={save} onLoad={setSave} />
    </div>
  );
}
