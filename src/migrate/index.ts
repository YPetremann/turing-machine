import type { Save } from "../types/Save"
const migrators= Object.fromEntries(Object.values(import.meta.glob("./*.ts", {
  eager: true,
})).map(module=>{
  return [module.from, module];
}));

let lastVersion:string
while(lastVersion in migrators){
  const migrator=migrators[lastVersion]
  lastVersion=migrator.to;
}

export const version = lastVersion

export function migrate(save: unknown): Save {
  console.log("prev version",save.version,save)
  while(save.version in migrators){
    const migrator=migrators[save.version]
    console.log("migrating from",migrator.from, "to", migrator.to)
    save=migrator.migrate(save);
    save.version=migrator.to;
  }
  console.log("next version",save.version,save)

  return save;
}