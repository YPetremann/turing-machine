import React from "react";
import type { Save } from "./Save";
import { Icon } from "@iconify/react/dist/iconify.js";

export function SaveManager({ save, restore }: { save: () => Save; restore: (obj: Save) => void; }) {
  const [saves, setSaves] = React.useState<string[]>([]);
  React.useEffect(() => {
    const index = JSON.parse(localStorage.getItem("tm-index") || "[]");
    setSaves(index);
  }, []);

  function getSaveName() {
    const obj = save();
    const player = obj.player || "?";
    const game = obj.game || "?";
    return `${player}-${game}`;
  }

  function handleSave() {
    const name = getSaveName();
    let index = JSON.parse(localStorage.getItem("tm-index") || "[]");
    index = index.filter((n: string) => n !== name); // Remove if already exists
    index.unshift(name); // Add to the front
    localStorage.setItem("tm-index", JSON.stringify(index));
    localStorage.setItem(`tm-${name}`, JSON.stringify(save()));
    setSaves(index);
  }

  function handleRestore(name: string) {
    const data = localStorage.getItem(`tm-${name}`);
    if (data) restore(JSON.parse(data));
  }

  function handleDelete(name: string) {
    localStorage.removeItem(`tm-${name}`);
    const index = JSON.parse(localStorage.getItem("tm-index") || "[]").filter((n: string) => n !== name);
    localStorage.setItem("tm-index", JSON.stringify(index));
    setSaves(index);
  }

  return <div className="flex flex-col gap-1 justify-start">
    <button type="button" onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
      <Icon icon="mdi:content-save" className="inline-block mr-2" />
      Save
    </button>
    <div className="flex flex-col gap-1">
      {saves.length === 0 && <span className="text-gray-400">Aucune sauvegarde</span>}
      {saves.map(name => (
        <div key={name} className="flex gap-0.5 items-center">
          <button type="button" onClick={() => handleRestore(name)} className="px-1 bg-emerald-500 text-white rounded grow">{name}</button>
          <button type="button" onClick={() => handleDelete(name)} className="px-1 bg-red-500 text-white rounded">
            <Icon icon="mdi:delete" className="inline-block" />
          </button>
        </div>
      ))}
    </div>
  </div>;
}
