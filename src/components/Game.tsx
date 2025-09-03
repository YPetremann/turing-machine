import React from "react";
import { version } from "../migrate"
import { TextInput } from "./TextInput"
import { generateGame, loadGameFromHash } from "../utils/games"

interface Game {
  status: string;
  curDate: string;
  idPartie: number;
  color: number;
  hash: string;
  m: string;
  d: number;
  n: string;
  code: number;
  par: number;
  fake: number[];
  ind: number[];
  law: number[];
  crypt: number[];
}
type Params = {
  uuid: string;
} & (
  | {
      m: number;
      d: number;
      n: number;
    }
  | {
      curDate: number;
    }
  | {
      h: string;
    }
);
function myParseInt(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function Game({ name, value, onLoad, onChange }) {
  value ??= {};
  value.m ??= 1;
  value.d ??= 1;
  value.n ??= 4;
  return (
    <div className="w-44 flex flex-col gap-1">
      <div className="flex gap-1 justify-end">
        Mode:
        <button
          type="button"
          className={`${value.m === 1 && "bg-blue-500 text-white"} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.m`, 1)}
          title="Classique"
        >
          <span className="icon-[mdi--dice] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.m === 2 && "bg-blue-500 text-white"} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.m`, 2)}
          title="Extreme"
        >
          <span className="icon-[mdi--flash] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.m === 3 && "bg-blue-500 text-white"} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.m`, 3)}
          title="Cauchemar"
        >
          <span className="icon-[mdi--skull] text-2xl" />
        </button>
      </div>

      <div className="flex gap-1 justify-end">
        Difficulté:
        <button
          type="button"
          className={`${value.d === 1 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.d`, 1)}
          title="Facile"
        >
          <span className="icon-[mdi--one] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.d === 2 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.d`, 2)}
          title="Standard"
        >
          <span className="icon-[mdi--two] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.d === 3 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.d`, 3)}
          title="Difficile"
        >
          <span className="icon-[mdi--three] text-2xl" />
        </button>
      </div>

      <div className="flex gap-1 justify-end">
        Verifs:
        <button
          type="button"
          className={`${value.n === 4 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.n`, 4)}
          title="4"
        >
          <span className="icon-[mdi--numeric-four-box-outline] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.n === 5 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.n`, 5)}
          title="5"
        >
          <span className="icon-[mdi--numeric-five-box-outline] text-2xl" />
        </button>
        <button
          type="button"
          className={`${value.n === 6 && `bg-blue-500 text-white`} w-7 h-7 inline-flex items-center justify-center rounded-sm`}
          onClick={() => onChange(`${name}.n`, 6)}
          title="6"
        >
          <span className="icon-[mdi--numeric-six-box-outline] text-2xl" />
        </button>
      </div>

{/*
      <div className="flex flex-col my-4">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-25"
          disabled={loading}
          onClick={handleGenerate}
        >
          <span className="icon-[mdi--dice] inline-block mr-2" />
          Generer
        </button>
      </div>
      <TextInput
        name={`${name}.hash`}
        value={value.hash}
        onChange={onChange}
        icon="icon-[mdi--hashtag]"
      />
      <div className="flex flex-col my-4">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-25"
          disabled={loading}
          onClick={handleLoad}
        >
          <span className="icon-[mdi--dice] inline-block mr-2" />
          Charger
        </button>
      </div>
        */}
      {["A", "B", "C", "D", "E", "F"].slice(0, value.n).map((v) => (
        <div key={v} className="flex gap-1 justify-end">
          <span className="text-green-600 flex justify-center items-center font-bold w-4">{v}</span>
          <input
            className="border-2 font-bold w-10 h-6 text-center rounded-sm"
            value={value?.verifier?.[`${v}C`] || 0}
            onChange={(e) => onChange(`${name}.verifier.${v}C`, myParseInt(e.target.value))}
            maxLength={3}
          />
          {value.m === 3 && <span className="w-6" />}
          <input
            className="bg-green-500 text-white w-6 h-6 text-center rounded-sm"
            value={value?.verifier?.[`${v}A`] || 0}
            onChange={(e) => onChange(`${name}.verifier.${v}A`, myParseInt(e.target.value))}
            maxLength={2}
          />
          {value.m === 2 && (
            <input
              className="bg-green-500 text-white w-6 h-6 text-center rounded-sm"
              value={value?.verifier?.[`${v}B`] || 0}
              onChange={(e) => onChange(`${name}.verifier.${v}B`, myParseInt(e.target.value))}
              maxLength={2}
            />
          )}
          {value.m === 1 && <span className="w-6" />}
        </div>
      ))}
    </div>
  );
}
