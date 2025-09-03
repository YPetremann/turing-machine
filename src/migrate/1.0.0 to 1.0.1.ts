// migrate save data from old format to new format:
// - add a version field to 1.0
export const from = "1.0.0";
export const to = "1.0.1";
export function migrate(save) {
  // Helper to generate codes and res objects
  for(const key in save.game) 
    save.info[key] = save.game[key];
  save.info.hash = save.info.game;
  save.info.game = undefined
  save.game = undefined
  return save;
}
