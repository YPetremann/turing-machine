import React from "react";
import type { Save } from "../types/Save";
import { migrate, version } from "../migrate"

const loadList = (): string[] => {
  const list: string[] = JSON.parse(localStorage.getItem("tm-index") || "[]");
  return list.filter((n) => localStorage.getItem(`tm-${n}`) !== null);
};
const saveList = (index: string[]) => localStorage.setItem("tm-index", JSON.stringify(index));
const saveGame = (name: string, save: Save) =>
  localStorage.setItem(`tm-${name}`, JSON.stringify(save));
const loadGame = (name: string): Save => JSON.parse(localStorage.getItem(`tm-${name}`) || "{}");
const removeSave = (name: string) => {
  localStorage.removeItem(`tm-${name}`);
  saveList(loadList());
};
const addSaveInList = (name: string) => {
  saveList([name, ...loadList().filter((n: string) => n !== name)]);
};
const getSaveName = (save: Save): string =>
  `${save.name ?? `${save.info.user ?? "?"} ${save.info.hash ?? "?"}`}`;
interface Props {
  save: Save;
  onLoad: (save: Save) => void;
}
export function SaveManager({ save, onLoad }: Props) {
  const [saves, setSaves] = React.useState<string[]>([]);
  const reloadList = () => {
    setSaves(loadList());
  };
  React.useEffect(reloadList, []);

  function saveAction() {
    const name = getSaveName(save);
    save.version=version
    saveGame(name, save);
    addSaveInList(name);
    reloadList();
  }

  function actionLoad(name: string) {
    onLoad(migrate(loadGame(name)));
  }

  function actionDelete(name: string) {
    removeSave(name);
    reloadList();
  }

  return (
    <div className="flex flex-col gap-1 justify-start">
      <button
        type="button"
        onClick={saveAction}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        <span className="icon-[mdi--content-save] inline-block mr-2" />
        Sauvegarder
      </button>
      <div className="flex flex-col gap-1">
        {saves.length === 0 && <span className="text-gray-400">Aucune sauvegarde</span>}
        {saves.map((name) => (
          <div key={name} className="flex gap-0.5 items-center">
            <button
              type="button"
              onClick={() => actionLoad(name)}
              className="px-1 bg-emerald-500 text-white rounded grow"
            >
              {name}
            </button>
            <button
              type="button"
              onClick={() => actionDelete(name)}
              className="px-1 bg-red-500 text-white rounded"
            >
              <span className="icon-[mdi--delete] inline-block" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
