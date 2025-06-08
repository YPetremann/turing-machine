import React from "react";
import type { Save } from "./Save";
import { Icon } from "@iconify/react/dist/iconify.js";

const saveList=()=>JSON.parse(localStorage.getItem("tm-index") || "[]")
  .filter(n=>localStorage.getItem(`tm-${n}`)!==null)
const loadList=(index)=>localStorage.setItem("tm-index", JSON.stringify(index));
const saveGame=(name,save)=>localStorage.setItem(`tm-${name}`, JSON.stringify(save))
const loadGame=(name)=>JSON.parse(localStorage.getItem(`tm-${name}`) || "{}");
const removeSave=(name)=> {localStorage.removeItem(`tm-${name}`);saveList(loadList())}
const addSaveInList=(name) =>{
  loadList([name,...saveList().filter((n: string) => n !== name)]);
}
const getSaveName=(save)=>save.name ?? `${save.user || "?"} ${save.game || "?"}`;
export function SaveManager({ save, onLoad }) {
  const [saves, setSaves] = React.useState<string[]>([]);
  const reloadList=()=> {setSaves(saveList())};
  React.useEffect(reloadList, []);

  function saveAction() {
    const name = getSaveName(save);
    saveGame(name, save);
    addSaveInList(name)
    reloadList();
  }

  function actionLoad(name: string) {
    const game=loadGame(name)
    console.log("Loading save:", name, game);
    onLoad(game);
  }

  function actionDelete(name: string) {
    removeSave(name);
    reloadList();
  }

  return <div className="flex flex-col gap-1 justify-start">
    <button type="button" onClick={()=>actionLoad()} className="px-4 py-2 bg-blue-500 text-white rounded">
      <Icon icon="mdi:new" className="inline-block mr-2" />
      Nouvelle Partie
    </button>
    <button type="button" onClick={saveAction} className="px-4 py-2 bg-blue-500 text-white rounded">
      <Icon icon="mdi:content-save" className="inline-block mr-2" />
      Sauvegarder
    </button>
    <div className="flex flex-col gap-1">
      {saves.length === 0 && <span className="text-gray-400">Aucune sauvegarde</span>}
      {saves.map(name => (
        <div key={name} className="flex gap-0.5 items-center">
          <button type="button" onClick={() => actionLoad(name)} className="px-1 bg-emerald-500 text-white rounded grow">{name}</button>
          <button type="button" onClick={() => actionDelete(name)} className="px-1 bg-red-500 text-white rounded">
            <Icon icon="mdi:delete" className="inline-block" />
          </button>
        </div>
      ))}
    </div>
  </div>;
}
