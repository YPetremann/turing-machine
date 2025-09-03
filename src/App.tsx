import { useCallback, useState } from "react";

import { Deduct } from "./components/Deduct";
import { Infos } from "./components/Infos";
import { Responses } from "./components/Responses";
import { SaveManager } from "./components/SaveManager";
import { updateDeep } from "./utils/updateDeep";
import { Game } from "./components/Game"
import { Notes } from "./components/Notes"
import { version } from "./migrate"
import { Grid } from "./components/Grid"
import { Cross } from "./components/Cross";

import type { Save } from "./types/Save";

export default function App() {
  const [save, setSave] = useState<Save>({} as Save);
  const onChange = useCallback((k: string, u: unknown) => setSave((p) => updateDeep(p, k, u)), []);

  return (
    <div className="flex gap-5 p-2 box-border">
      <div className="w-44 flex flex-col gap-4">
        <a className="flex gap-1 justify-end font-bold" href="https://www.turingmachine.info/" target="blank">Turing Machine {version}</a>
        <Game name="info" value={save.info} onLoad={setSave} onChange={onChange} />
        <SaveManager save={save} onLoad={setSave} />
      </div>
      <div className="col-span-full row-span-full w-170 p-4 grid grid-cols-5 bg-white justify-between gap-3 text-xl">
        <div className="col-start-1 col-end-3 flex flex-col gap-3">
          <Infos name="info" value={save.info} onChange={onChange} />
          <Responses codes={save.codes} res={save.res} lines={12} onChange={onChange} />
        </div>
        <div className="col-start-3 col-end-6 grid grid-cols-3 gap-3">
          <Deduct name="deduct" value={save.deduct} onChange={onChange} />
          <Cross name="cross" deduct={save.deduct} value={save.cross} onChange={onChange} />
          <Grid name="grid" deduct={save.deduct} cross={save.cross} value={save.grid} onChange={onChange} />
        </div>
        <div className="col-start-1 col-end-6 flex">
          <Notes name="notes" value={save.notes} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}


