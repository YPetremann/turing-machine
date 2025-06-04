import React from "react";

import { InputNumber } from "./InputNumber";
import { Checkbox } from "./Checkbox";
import { CheckNumber } from "./CheckNumber";
import { TextInput } from "./TextInput";
import { Textarea } from "./Textarea";
import type { Save } from "./Save";
import { SaveManager } from "./SaveManager";

const range = (n: number) => ([...Array(n).keys()]);

function App() {
  const formRef = React.useRef<HTMLFormElement>(null);

  // Save form data to localStorage
  const save = ():Save => {
    const form = formRef.current;
    if (!form) throw new Error("Form not found");
    const data = new FormData(form);
    const obj: Record<string, string> = {};
    for (const [key, value] of data.entries()) obj[key] = value as string;
    return obj
  };

  // Restore form data from localStorage
  const restore = (obj:Save) => {
    const form = formRef.current;
    if (!form) throw new Error("Form not found");
    // Set all input/textarea values
    for (const el of Array.from(form.elements) as HTMLFormElement[]) {
      if (!el.name) continue;

      if (obj[el.name] === undefined) continue;
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) continue
      el.value = obj[el.name];
      console.log(el.name, el.value);
      // trigger onChange event for React to pick up the change
      if (el instanceof HTMLInputElement && el.type === "checkbox") {
        el.checked = obj[el.name] === "1" || obj[el.name] === "true";
      } else if (el instanceof HTMLInputElement && el.type === "number") {
        el.value = String(Number(obj[el.name])); // Ensure it's a number
      }
    }
  };

  return <div className="flex">
    <div className="grid">
      <img src="notesheet.jpg" alt="Notesheet"
        className="col-span-full row-span-full" />
      <form ref={formRef} className="col-span-full row-span-full p-0 flex flex-col items-stretch">
        <div className="flex flex-row p-9 pt-5 pb-2 items-start">
          <table className="mt-17.5">
            <tbody>
              {range(9).map((i) => <tr key={i}>
                <td><InputNumber name={`turn.${i}.T`} /></td>
                <td><InputNumber name={`turn.${i}.R`} /></td>
                <td><InputNumber name={`turn.${i}.C`} /></td>
                <td className="w-6" />
                <td><Checkbox name={`turn.${i}.A`} /></td>
                <td><Checkbox name={`turn.${i}.B`} /></td>
                <td><Checkbox name={`turn.${i}.C`} /></td>
                <td><Checkbox name={`turn.${i}.D`} /></td>
                <td><Checkbox name={`turn.${i}.E`} /></td>
                <td><Checkbox name={`turn.${i}.F`} /></td>
              </tr>)}
            </tbody>
          </table>
          <div>
            <div><TextInput name="player" /></div>
            <div><TextInput name="game" /></div>
            <table className="ml-12 mt-20">
              <tbody>
                {range(5).map((i) => <tr key={i}>
                  <td><CheckNumber name={`hyp.T${i + 1}`} /></td>
                  <td><CheckNumber name={`hyp.R${i + 1}`} /></td>
                  <td><CheckNumber name={`hyp.C${i + 1}`} /></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <table className="mt-3 ml-1">
            <tbody>
              <tr key={0}>
                <td><Textarea name="note.A" left /></td>
                <td><Textarea name="note.B" right /></td>
              </tr>
              <tr key={1}>
                <td><Textarea name="note.C" left /></td>
                <td><Textarea name="note.D" right /></td>
              </tr>
              <tr key={2}>
                <td><Textarea name="note.E" left /></td>
                <td><Textarea name="note.F" right /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
    <SaveManager {...{ save, restore }} />
  </div>
}

export default App

