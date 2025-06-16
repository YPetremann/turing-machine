import { useCallback, useState } from "react";
import { Codes } from "./components/Codes";
import { Deduct } from "./components/Deduct";
import { Infos } from "./components/Infos";
import { Responses } from "./components/Responses";
import { SaveManager } from "./components/SaveManager";
import { Textarea } from "./components/Textarea";
import type { Save } from "./types/Save";
import { updateDeep } from "./utils/updateDeep";
export default function App() {
  const [save, setSave] = useState<Save>({});
  const onChange = useCallback((k, u) => setSave((p) => updateDeep(p, k, u)), []);

  return (
    <div className="flex gap-5">
      <div className="col-span-full row-span-full w-170 h-231 p-4 flex flex-col bg-white justify-between">
        <div className="flex flex-row items-start justify-between">
          <Codes name="codes" value={save.codes} onChange={onChange} />
          <Responses name="res" value={save.res} onChange={onChange} />
          <div className="w-44">
            <Infos name="info" value={save.info} onChange={onChange} />
            <Deduct name="deduct" value={save.deduct} onChange={onChange} />
          </div>
        </div>
        <Notes name="notes" value={save.notes} onChange={onChange} />
      </div>
      <SaveManager save={save} onLoad={setSave} />
    </div>
  );
}

function Notes({ name, value, onChange }) {
  value ??= {};
  return (
    <div className="grid grid-cols-3">
      <Textarea
        name={`${name}.A`}
        value={value.A}
        onChange={onChange}
        title="A"
        top={true}
        left={true}
      />
      <Textarea name={`${name}.C`} value={value.C} onChange={onChange} title="C" top={true} />
      <Textarea
        name={`${name}.E`}
        value={value.E}
        onChange={onChange}
        title="E"
        top={true}
        right={true}
      />

      <Textarea
        name={`${name}.B`}
        value={value.B}
        onChange={onChange}
        title="B"
        bottom={true}
        left={true}
      />
      <Textarea name={`${name}.D`} value={value.D} onChange={onChange} title="D" bottom={true} />
      <Textarea
        name={`${name}.F`}
        value={value.F}
        onChange={onChange}
        title="F"
        bottom={true}
        right={true}
      />
    </div>
  );
}
