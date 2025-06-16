// migrate save data from old format to new format:
// - add a version field to 1.0
export const from=undefined
export const to="0.0.1"
export function migrate(save) {
  return save;
}